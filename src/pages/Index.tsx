import { AppLayout } from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import {
  TrendingUp,
  Shield,
  LineChart,
  Activity,
} from "lucide-react";

export default function Index() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Financial Services & Healthcare Analytics Overview
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Portfolio Performance"
            value="$2.4M"
            icon={<TrendingUp className="h-6 w-6" />}
            trend={{ value: 12.5, isPositive: true }}
          />
          <MetricCard
            title="Risk Score"
            value="Low"
            icon={<Shield className="h-6 w-6" />}
          />
          <MetricCard
            title="Market Volatility"
            value="Stable"
            icon={<LineChart className="h-6 w-6" />}
          />
          <MetricCard
            title="Healthcare Index"
            value="92.3"
            icon={<Activity className="h-6 w-6" />}
            trend={{ value: 3.2, isPositive: true }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Placeholder for future charts and detailed analytics */}
          <div className="glass-morphism rounded-lg p-6 h-[400px]">
            <h3 className="text-lg font-medium mb-4">Investment Trends</h3>
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Chart coming soon
            </div>
          </div>
          <div className="glass-morphism rounded-lg p-6 h-[400px]">
            <h3 className="text-lg font-medium mb-4">Healthcare Analytics</h3>
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Chart coming soon
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}