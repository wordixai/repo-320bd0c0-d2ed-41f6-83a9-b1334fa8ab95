import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { LoginPage } from '@/components/LoginPage';
import { Dashboard } from '@/components/Dashboard';
import { EventsPage } from '@/components/EventsPage';
import { FansPage } from '@/components/FansPage';
import { MusicCatalogPage } from '@/components/MusicCatalogPage';
import { CollaborationPage } from '@/components/CollaborationPage';
import { Home, Calendar, Users, Music, UserPlus, LogOut, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Page = 'dashboard' | 'events' | 'fans' | 'catalog' | 'collaboration';

const Index = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState<Page>('dashboard');

  // Check for existing session on component mount
  useEffect(() => {
    const savedSession = localStorage.getItem('musiccrm_session');
    if (savedSession) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('musiccrm_session', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('musiccrm_session');
    setActivePage('dashboard');
  };

  const goToPricingPage = () => {
    navigate('/price');
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const menuItems = [
    { id: 'dashboard' as Page, label: 'Dashboard', icon: Home },
    { id: 'events' as Page, label: 'Events', icon: Calendar },
    { id: 'fans' as Page, label: 'Fans', icon: Users },
    { id: 'catalog' as Page, label: 'Music Catalog', icon: Music },
    { id: 'collaboration' as Page, label: 'Collaboration', icon: UserPlus },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'events':
        return <EventsPage />;
      case 'fans':
        return <FansPage />;
      case 'catalog':
        return <MusicCatalogPage />;
      case 'collaboration':
        return <CollaborationPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-sidebar-border p-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Music className="h-4 w-4 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">MusicCRM</h2>
                <p className="text-xs text-sidebar-foreground/70">Professional</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-2">
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActivePage(item.id)}
                    isActive={activePage === item.id}
                    className="w-full justify-start"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          
          {/* Pricing and Logout Buttons */}
          <div className="p-2 border-t border-sidebar-border space-y-2">
            <Button
              variant="ghost"
              onClick={goToPricingPage}
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              View Pricing
            </Button>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </Sidebar>
        
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="h-4 w-px bg-sidebar-border" />
              <div>
                <h1 className="text-lg font-semibold capitalize">
                  {activePage === 'catalog' ? 'Music Catalog' : activePage}
                </h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2 ml-auto px-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Free Plan</span>
              </div>
              <Button 
                size="sm" 
                className="gradient-primary text-white"
                onClick={goToPricingPage}
              >
                Upgrade
              </Button>
            </div>
          </header>
          
          <main className="flex-1 overflow-auto">
            {renderPage()}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;