import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  BarChart3,
  Bot,
  MapPin,
  Sparkles,
  TrendingUp,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Route Optimization</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Smarter Routes,
            <br />
            Better Logistics
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your logistics with AI-driven route optimization. Save time, reduce fuel costs, and maximize efficiency with intelligent planning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="shadow-glow">
                Get Started Free
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">
                Request Demo
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-gradient-card shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">40%</h3>
              <p className="text-muted-foreground">Fuel Cost Reduction</p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">35%</h3>
              <p className="text-muted-foreground">Time Saved</p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-muted-foreground">On-Time Delivery</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Modern Logistics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to optimize routes, manage fleets, and deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Route Optimization</h3>
              <p className="text-muted-foreground">
                Advanced algorithms analyze traffic, weather, and constraints to find the most efficient routes instantly.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time GPS Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your entire fleet in real-time with interactive maps and live location updates.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <Bot className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Assistant</h3>
              <p className="text-muted-foreground">
                Get instant help and insights from our intelligent chatbot that understands your logistics needs.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Comprehensive dashboards with charts and reports to track performance and identify improvements.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Role-Based Access</h3>
              <p className="text-muted-foreground">
                Secure admin panel with granular permissions for admins, dispatchers, and drivers.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Booking System</h3>
              <p className="text-muted-foreground">
                Streamlined ticket booking with seat selection, payment processing, and instant e-tickets.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Optimize Your Routes?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of logistics professionals who trust RouteAI for smarter, faster deliveries.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="shadow-lg">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
