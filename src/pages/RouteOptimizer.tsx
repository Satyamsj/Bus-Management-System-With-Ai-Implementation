import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  MapPin,
  Navigation,
  Zap,
  Clock,
  Fuel,
  AlertTriangle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RouteOptimizer = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimized, setOptimized] = useState(false);
  const { toast } = useToast();

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setOptimized(true);
      toast({
        title: "Route Optimized!",
        description: "Your optimal route has been calculated successfully.",
      });
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">AI Route Optimization</h1>
          <p className="text-muted-foreground">
            Find the most efficient route with our AI-powered optimizer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Route Details</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="source">Source Location</Label>
                <Input id="source" placeholder="Enter starting point" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" placeholder="Enter destination" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicle">Vehicle Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bus">Bus</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                    <SelectItem value="car">Car</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="constraints">Optimization Priority</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fastest">Fastest Route</SelectItem>
                    <SelectItem value="fuel">Fuel Efficient</SelectItem>
                    <SelectItem value="balanced">Balanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full shadow-glow"
                onClick={handleOptimize}
                disabled={isOptimizing}
              >
                <Zap className="mr-2 h-4 w-4" />
                {isOptimizing ? "Optimizing..." : "Optimize Route"}
              </Button>
            </div>
          </Card>

          {/* Map Placeholder */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Route Map</h2>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-muted-foreground">Map will appear here</p>
                <p className="text-sm text-muted-foreground">
                  Enter route details and optimize to view
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Results */}
        {optimized && (
          <Card className="p-6 bg-gradient-card">
            <h2 className="text-xl font-semibold mb-6">Optimization Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <Navigation className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Distance
                  </span>
                </div>
                <p className="text-2xl font-bold">125.4 km</p>
                <p className="text-xs text-success mt-1">15km shorter</p>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">
                    Duration
                  </span>
                </div>
                <p className="text-2xl font-bold">2h 15m</p>
                <p className="text-xs text-success mt-1">25min faster</p>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <Fuel className="h-5 w-5 text-warning" />
                  <span className="text-sm text-muted-foreground">
                    Fuel Cost
                  </span>
                </div>
                <p className="text-2xl font-bold">450.20</p>
                <p className="text-xs text-success mt-1">120 saved</p>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-info" />
                  <span className="text-sm text-muted-foreground">Traffic</span>
                </div>
                <p className="text-2xl font-bold">Light</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Good conditions
                </p>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <Button className="flex-1">Export Route</Button>
              <Button variant="outline" className="flex-1">
                Send to Driver
              </Button>
            </div>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default RouteOptimizer;
