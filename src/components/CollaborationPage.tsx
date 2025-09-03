import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Mail, Phone, Plus, UserPlus, Briefcase, Star } from 'lucide-react';
import { mockCollaborators } from '@/data/mockData';
import { Collaborator } from '@/types';

export function CollaborationPage() {
  const [collaborators, setCollaborators] = useState<Collaborator[]>(mockCollaborators);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    role: 'other' as Collaborator['role'],
    email: '',
    phone: '',
    skills: '',
    availability: 'available' as Collaborator['availability']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCollaborator: Collaborator = {
      id: Date.now().toString(),
      name: formData.name,
      role: formData.role,
      email: formData.email,
      phone: formData.phone,
      skills: formData.skills.split(',').map(skill => skill.trim()),
      availability: formData.availability,
      projects: []
    };

    setCollaborators([...collaborators, newCollaborator]);
    setIsDialogOpen(false);
    setFormData({
      name: '',
      role: 'other',
      email: '',
      phone: '',
      skills: '',
      availability: 'available'
    });
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'band-member': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'producer': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'manager': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'sound-engineer': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'busy': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'unavailable': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const roleStats = {
    'band-member': collaborators.filter(c => c.role === 'band-member').length,
    'producer': collaborators.filter(c => c.role === 'producer').length,
    'manager': collaborators.filter(c => c.role === 'manager').length,
    'sound-engineer': collaborators.filter(c => c.role === 'sound-engineer').length,
    'other': collaborators.filter(c => c.role === 'other').length
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Collaboration Hub</h1>
          <p className="text-muted-foreground">Manage your team and connect with music professionals</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-primary">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Collaborator
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Collaborator</DialogTitle>
              <DialogDescription>Add a new team member or collaborator</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value as Collaborator['role'] })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="band-member">Band Member</SelectItem>
                    <SelectItem value="producer">Producer</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="sound-engineer">Sound Engineer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="skills">Skills (comma-separated)</Label>
                <Input
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="e.g., Mixing, Mastering, Production"
                />
              </div>
              <div>
                <Label htmlFor="availability">Availability</Label>
                <Select value={formData.availability} onValueChange={(value) => setFormData({ ...formData, availability: value as Collaborator['availability'] })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="busy">Busy</SelectItem>
                    <SelectItem value="unavailable">Unavailable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="gradient-primary">Add Collaborator</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="team" className="space-y-6">
        <TabsList>
          <TabsTrigger value="team">Team Overview</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="team" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Team</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{collaborators.length}</div>
                <p className="text-xs text-muted-foreground">Active collaborators</p>
              </CardContent>
            </Card>

            <Card className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Available</CardTitle>
                <Star className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {collaborators.filter(c => c.availability === 'available').length}
                </div>
                <p className="text-xs text-muted-foreground">Ready to work</p>
              </CardContent>
            </Card>

            <Card className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Busy</CardTitle>
                <Briefcase className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {collaborators.filter(c => c.availability === 'busy').length}
                </div>
                <p className="text-xs text-muted-foreground">Currently working</p>
              </CardContent>
            </Card>

            <Card className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Projects</CardTitle>
                <Plus className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {new Set(collaborators.flatMap(c => c.projects)).size}
                </div>
                <p className="text-xs text-muted-foreground">Active projects</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborators.map((collaborator) => (
              <Card key={collaborator.id} className="music-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{collaborator.name}</CardTitle>
                      <CardDescription className="mt-1 capitalize">
                        {collaborator.role.replace('-', ' ')}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <Badge className={getRoleColor(collaborator.role)}>
                        {collaborator.role.replace('-', ' ')}
                      </Badge>
                      <Badge className={getAvailabilityColor(collaborator.availability)}>
                        {collaborator.availability}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="truncate">{collaborator.email}</span>
                    </div>
                    {collaborator.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{collaborator.phone}</span>
                      </div>
                    )}
                  </div>

                  {collaborator.skills.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">Skills</p>
                      <div className="flex flex-wrap gap-1">
                        {collaborator.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {collaborator.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{collaborator.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {collaborator.projects.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">Current Projects</p>
                      <div className="space-y-1">
                        {collaborator.projects.slice(0, 2).map((project) => (
                          <p key={project} className="text-xs text-muted-foreground">• {project}</p>
                        ))}
                        {collaborator.projects.length > 2 && (
                          <p className="text-xs text-muted-foreground">• +{collaborator.projects.length - 2} more</p>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="roles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(roleStats).map(([role, count]) => (
              <Card key={role} className="music-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between capitalize">
                    {role.replace('-', ' ')} {count > 1 ? 's' : ''}
                    <Badge className={getRoleColor(role)}>{count}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    {role === 'band-member' && 'Core band members and musicians'}
                    {role === 'producer' && 'Music production specialists'}
                    {role === 'manager' && 'Business and career management'}
                    {role === 'sound-engineer' && 'Audio engineering experts'}
                    {role === 'other' && 'Additional team members'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <Card className="music-card">
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>Current collaborative projects and assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from(new Set(collaborators.flatMap(c => c.projects))).map((project) => {
                  const projectCollaborators = collaborators.filter(c => c.projects.includes(project));
                  return (
                    <div key={project} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{project}</p>
                        <p className="text-sm text-muted-foreground">
                          {projectCollaborators.length} collaborator{projectCollaborators.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                      <div className="flex -space-x-2">
                        {projectCollaborators.slice(0, 3).map((collaborator) => (
                          <div
                            key={collaborator.id}
                            className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium border-2 border-background"
                          >
                            {collaborator.name.charAt(0)}
                          </div>
                        ))}
                        {projectCollaborators.length > 3 && (
                          <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-medium border-2 border-background">
                            +{projectCollaborators.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}