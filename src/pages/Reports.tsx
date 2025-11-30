import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Download, FileText, TrendingUp } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      title: "Monthly Performance Report",
      description: "Comprehensive analysis of routes, fuel efficiency, and delivery performance",
      date: "March 2025",
      size: "2.4 MB",
    },
    {
      title: "Fleet Analytics",
      description: "Vehicle utilization, maintenance schedules, and performance metrics",
      date: "March 2025",
      size: "1.8 MB",
    },
    {
      title: "Cost Analysis",
      description: "Detailed breakdown of operational costs and savings achieved",
      date: "March 2025",
      size: "1.2 MB",
    },
    {
      title: "Driver Performance",
      description: "Individual driver metrics, safety scores, and efficiency ratings",
      date: "March 2025",
      size: "900 KB",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Reports</h1>
            <p className="text-muted-foreground">Download and view your performance reports.</p>
          </div>
          <Button className="shadow-glow">
            <TrendingUp className="mr-2 h-4 w-4" />
            Generate New Report
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {reports.map((report, index) => (
            <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1">{report.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {report.date} • {report.size}
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
