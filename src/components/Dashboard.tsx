import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Users, Music, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { mockEvents, mockFans, mockTracks, mockMerchandise } from '@/data/mockData';

export function Dashboard() {
  const totalRevenue = 45680;
  const monthlyGrowth = 12.5;
  const totalFans = mockFans.length;
  const upcomingEvents = mockEvents.filter(e => e.status === 'upcoming').length;
  const totalTracks = mockTracks.length;

  const revenueBreakdown = {
    streaming: 18500,
    merchandise: 15800,
    events: 11380
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            Music CRM Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your music career, fans, and revenue in one place
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 revenue-positive" />
              <span className="revenue-positive">+{monthlyGrowth}% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Fans</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalFans.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all segments</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingEvents}</div>
            <p className="text-xs text-muted-foreground">Next 30 days</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Music Catalog</CardTitle>
            <Music className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTracks}</div>
            <p className="text-xs text-muted-foreground">Published tracks</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="fans">Fans</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="music-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your music career</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-sm">New fan Sarah Johnson joined VIP segment</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm">Electric Dreams reached 150k streams</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-sm">Summer Rock Festival tickets 92% sold</p>
                </div>
              </CardContent>
            </Card>

            <Card className="music-card">
              <CardHeader>
                <CardTitle>Top Tracks Performance</CardTitle>
                <CardDescription>Your most popular tracks this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockTracks.map((track, index) => (
                  <div key={track.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium">#{index + 1}</span>
                      <div>
                        <p className="font-medium text-sm">{track.title}</p>
                        <p className="text-xs text-muted-foreground">{track.plays.toLocaleString()} plays</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{track.genre}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="music-card">
              <CardHeader>
                <CardTitle>Streaming Revenue</CardTitle>
                <CardDescription>Revenue from music platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${revenueBreakdown.streaming.toLocaleString()}</div>
                <Progress value={65} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">65% of total revenue</p>
              </CardContent>
            </Card>

            <Card className="music-card">
              <CardHeader>
                <CardTitle>Merchandise</CardTitle>
                <CardDescription>Physical and digital sales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${revenueBreakdown.merchandise.toLocaleString()}</div>
                <Progress value={35} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">35% of total revenue</p>
              </CardContent>
            </Card>

            <Card className="music-card">
              <CardHeader>
                <CardTitle>Live Events</CardTitle>
                <CardDescription>Concert and show earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${revenueBreakdown.events.toLocaleString()}</div>
                <Progress value={25} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">25% of total revenue</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="fans" className="space-y-4">
          <Card className="music-card">
            <CardHeader>
              <CardTitle>Fan Segments</CardTitle>
              <CardDescription>Your audience breakdown by engagement level</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">1</div>
                  <p className="text-sm text-muted-foreground">VIP Fans</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1</div>
                  <p className="text-sm text-muted-foreground">Regular</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1</div>
                  <p className="text-sm text-muted-foreground">New</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">0</div>
                  <p className="text-sm text-muted-foreground">Inactive</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockEvents.map((event) => (
              <Card key={event.id} className="music-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge variant={event.status === 'upcoming' ? 'default' : 'secondary'}>
                      {event.status}
                    </Badge>
                  </div>
                  <CardDescription>{event.venue}, {event.location}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Date:</span>
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tickets Sold:</span>
                    <span>{event.ticketsSold.toLocaleString()} / {event.capacity.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Revenue:</span>
                    <span className="font-semibold">${event.revenue.toLocaleString()}</span>
                  </div>
                  <Progress value={(event.ticketsSold / event.capacity) * 100} className="mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}