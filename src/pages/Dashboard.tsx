import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  MapPin,
  TrendingUp,
  Users,
  Gauge,
  Clock,
  DollarSign,
  Route,
  Bus,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Dashboard = () => {
  const statsData = [
    {
      label: "Total Passengers",
      value: "12,456",
      change: "+12%",
      icon: Users,
      color: "text-primary",
    },
    {
      label: "Average Speed",
      value: "65 km/h",
      change: "+5%",
      icon: Gauge,
      color: "text-secondary",
    },
    {
      label: "Distance Covered",
      value: "45,230 km",
      change: "+18%",
      icon: Route,
      color: "text-success",
    },
    {
      label: "Fuel Saved",
      value: "8,420",
      change: "+25%",
      icon: DollarSign,
      color: "text-warning",
    },
  ];

  const routeData = [
    { month: "Jan", distance: 4000, time: 2400 },
    { month: "Feb", distance: 3000, time: 1398 },
    { month: "Mar", distance: 2000, time: 9800 },
    { month: "Apr", distance: 2780, time: 3908 },
    { month: "May", distance: 1890, time: 4800 },
    { month: "Jun", distance: 2390, time: 3800 },
  ];

  const efficiencyData = [
    { route: "Route A", efficiency: 95 },
    { route: "Route B", efficiency: 87 },
    { route: "Route C", efficiency: 92 },
    { route: "Route D", efficiency: 78 },
    { route: "Route E", efficiency: 88 },
  ];

  const vehicleUsageData = [
    { name: "Active", value: 65, color: "hsl(var(--primary))" },
    { name: "Maintenance", value: 20, color: "hsl(var(--warning))" },
    { name: "Idle", value: 15, color: "hsl(var(--muted))" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's your route optimization overview.
            </p>
          </div>
          <Button className="shadow-glow">
            <MapPin className="mr-2 h-4 w-4" />
            Start New Route
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className={`text-sm ${stat.color} mt-1`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ${stat.color}`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Distance & Time Analysis
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={routeData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="distance"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="time"
                  stroke="hsl(var(--secondary))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Bar Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Route Efficiency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={efficiencyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis dataKey="route" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar
                  dataKey="efficiency"
                  fill="hsl(var(--primary))"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pie Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Vehicle Usage</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={vehicleUsageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="hsl(var(--primary))"
                  dataKey="value"
                >
                  {vehicleUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-auto py-4 flex-col items-start"
              >
                <Bus className="mb-2 h-5 w-5" />
                <span className="font-semibold">View All Routes</span>
                <span className="text-xs text-muted-foreground">
                  See active and planned routes
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 flex-col items-start"
              >
                <TrendingUp className="mb-2 h-5 w-5" />
                <span className="font-semibold">Generate Reports</span>
                <span className="text-xs text-muted-foreground">
                  Download performance analytics
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 flex-col items-start"
              >
                <MapPin className="mb-2 h-5 w-5" />
                <span className="font-semibold">Track Live Routes</span>
                <span className="text-xs text-muted-foreground">
                  Monitor real-time locations
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 flex-col items-start"
              >
                <Clock className="mb-2 h-5 w-5" />
                <span className="font-semibold">Schedule Maintenance</span>
                <span className="text-xs text-muted-foreground">
                  Plan vehicle service
                </span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
