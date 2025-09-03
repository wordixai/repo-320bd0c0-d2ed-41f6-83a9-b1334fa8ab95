import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Music, Play, DollarSign, TrendingUp, Plus, ExternalLink, Search } from 'lucide-react';
import { mockTracks } from '@/data/mockData';
import { Track } from '@/types';

export function MusicCatalogPage() {
  const [tracks, setTracks] = useState<Track[]>(mockTracks);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    duration: '',
    genre: '',
    releaseDate: '',
    spotify: '',
    apple: '',
    youtube: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTrack: Track = {
      id: Date.now().toString(),
      title: formData.title,
      artist: formData.artist,
      album: formData.album,
      duration: parseInt(formData.duration),
      genre: formData.genre,
      releaseDate: formData.releaseDate,
      streamingPlatforms: {
        spotify: formData.spotify,
        apple: formData.apple,
        youtube: formData.youtube
      },
      revenue: {
        streaming: 0,
        downloads: 0
      },
      plays: 0
    };

    setTracks([...tracks, newTrack]);
    setIsDialogOpen(false);
    setFormData({
      title: '',
      artist: '',
      album: '',
      duration: '',
      genre: '',
      releaseDate: '',
      spotify: '',
      apple: '',
      youtube: ''
    });
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const filteredTracks = tracks.filter(track =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.album.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRevenue = tracks.reduce((sum, track) => sum + track.revenue.streaming + track.revenue.downloads, 0);
  const totalPlays = tracks.reduce((sum, track) => sum + track.plays, 0);

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Music Catalog</h1>
          <p className="text-muted-foreground">Manage your music library and track performance</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Track
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Track</DialogTitle>
              <DialogDescription>Add a new track to your music catalog</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Track Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="artist">Artist</Label>
                  <Input
                    id="artist"
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="album">Album</Label>
                  <Input
                    id="album"
                    value={formData.album}
                    onChange={(e) => setFormData({ ...formData, album: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="genre">Genre</Label>
                  <Input
                    id="genre"
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="duration">Duration (seconds)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="releaseDate">Release Date</Label>
                  <Input
                    id="releaseDate"
                    type="date"
                    value={formData.releaseDate}
                    onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label>Streaming Platform Links</Label>
                <div>
                  <Label htmlFor="spotify" className="text-sm">Spotify URL</Label>
                  <Input
                    id="spotify"
                    value={formData.spotify}
                    onChange={(e) => setFormData({ ...formData, spotify: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="apple" className="text-sm">Apple Music URL</Label>
                  <Input
                    id="apple"
                    value={formData.apple}
                    onChange={(e) => setFormData({ ...formData, apple: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="youtube" className="text-sm">YouTube URL</Label>
                  <Input
                    id="youtube"
                    value={formData.youtube}
                    onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="gradient-primary">Add Track</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tracks</CardTitle>
            <Music className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tracks.length}</div>
            <p className="text-xs text-muted-foreground">In your catalog</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Plays</CardTitle>
            <Play className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPlays.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all platforms</p>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Music Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Streaming + downloads</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tracks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Track Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTracks.map((track) => (
          <Card key={track.id} className="music-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{track.title}</CardTitle>
                  <CardDescription>{track.artist} • {track.album}</CardDescription>
                </div>
                <Badge variant="secondary">{track.genre}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Duration:</span>
                  <p className="text-muted-foreground">{formatDuration(track.duration)}</p>
                </div>
                <div>
                  <span className="font-medium">Release Date:</span>
                  <p className="text-muted-foreground">{new Date(track.releaseDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <span className="font-medium">Plays:</span>
                  <p className="text-muted-foreground">{track.plays.toLocaleString()}</p>
                </div>
                <div>
                  <span className="font-medium">Revenue:</span>
                  <p className="text-muted-foreground">${(track.revenue.streaming + track.revenue.downloads).toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Streaming Revenue</span>
                  <span className="font-medium">${track.revenue.streaming.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Download Revenue</span>
                  <span className="font-medium">${track.revenue.downloads.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">Streaming Platforms</p>
                <div className="flex space-x-2">
                  {track.streamingPlatforms.spotify && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={track.streamingPlatforms.spotify} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Spotify
                      </a>
                    </Button>
                  )}
                  {track.streamingPlatforms.apple && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={track.streamingPlatforms.apple} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Apple
                      </a>
                    </Button>
                  )}
                  {track.streamingPlatforms.youtube && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={track.streamingPlatforms.youtube} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        YouTube
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}