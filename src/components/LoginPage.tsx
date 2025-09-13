import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Music, Mail, Lock, Eye, EyeOff, Github, Chrome } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    onLogin();
  };

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    
    // Simulate social login
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    onLogin();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Music className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">MusicCRM</h1>
              <p className="text-white/80">Professional Music Management</p>
            </div>
          </div>
          
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-semibold mb-4">
              Manage Your Music Career Like a Pro
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Track your fans, manage events, monitor revenue streams, and collaborate with your team all in one powerful platform.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 text-center">
            <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-white/80">Artists</div>
            </div>
            <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="text-2xl font-bold">50M+</div>
              <div className="text-sm text-white/80">Fans Managed</div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white/5 animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-white/10"></div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-secondary">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center space-x-2 mb-8">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <Music className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold">MusicCRM</h1>
          </div>

          <Card className="music-card shadow-xl border-0">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl font-bold">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </CardTitle>
              <CardDescription className="text-base">
                {isLogin 
                  ? 'Sign in to access your music dashboard' 
                  : 'Join thousands of artists managing their careers'
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-11"
                      required={!isLogin}
                    />
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 h-11"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10 h-11"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="pl-10 h-11"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span>Remember me</span>
                    </label>
                    <button type="button" className="text-primary hover:underline">
                      Forgot password?
                    </button>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full h-11 gradient-primary text-white font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{isLogin ? 'Signing in...' : 'Creating account...'}</span>
                    </div>
                  ) : (
                    isLogin ? 'Sign In' : 'Create Account'
                  )}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="h-11"
                  onClick={() => handleSocialLogin('google')}
                  disabled={isLoading}
                >
                  <Chrome className="h-4 w-4 mr-2" />
                  Google
                </Button>
                <Button 
                  variant="outline" 
                  className="h-11"
                  onClick={() => handleSocialLogin('github')}
                  disabled={isLoading}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>

              <div className="text-center text-sm">
                {isLogin ? (
                  <>
                    Don't have an account?{' '}
                    <button 
                      onClick={() => setIsLogin(false)}
                      className="text-primary hover:underline font-medium"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button 
                      onClick={() => setIsLogin(true)}
                      className="text-primary hover:underline font-medium"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>

              {!isLogin && (
                <div className="text-xs text-muted-foreground text-center">
                  By creating an account, you agree to our{' '}
                  <button className="text-primary hover:underline">Terms of Service</button>
                  {' '}and{' '}
                  <button className="text-primary hover:underline">Privacy Policy</button>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 MusicCRM. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}