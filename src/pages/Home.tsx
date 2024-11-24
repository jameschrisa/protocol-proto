import { useState } from "react"
import { 
  Activity,
  BarChart2, 
  Clock, 
  AlertTriangle,
  Database,
  LineChart,
  ShieldCheck,
  Timer
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"

const kpis = [
  {
    title: "System Health",
    value: "98.2%",
    description: "Overall system status",
    icon: Activity,
    iconColor: "text-blue-500"
  },
  {
    title: "Active Processes",
    value: "1,245",
    description: "Currently running",
    icon: BarChart2,
    iconColor: "text-purple-500"
  },
  {
    title: "Uptime",
    value: "99.9%",
    description: "Last 30 days",
    icon: Clock,
    iconColor: "text-green-500"
  },
  {
    title: "Critical Alerts",
    value: "3",
    description: "Active incidents",
    icon: AlertTriangle,
    iconColor: "text-yellow-500"
  },
  {
    title: "Data Processing",
    value: "2.8TB",
    description: "Daily average",
    icon: Database,
    iconColor: "text-emerald-500"
  },
  {
    title: "Performance Index",
    value: "94.5",
    description: "System efficiency score",
    icon: LineChart,
    iconColor: "text-indigo-500"
  },
  {
    title: "Compliance Status",
    value: "100%",
    description: "Requirements met",
    icon: ShieldCheck,
    iconColor: "text-teal-500"
  },
  {
    title: "Response Time",
    value: "125ms",
    description: "Average latency",
    icon: Timer,
    iconColor: "text-cyan-500"
  }
]

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Activity className="h-8 w-8 text-blue-600" strokeWidth={1.5} />
        <h1 className="text-3xl font-bold">System Overview</h1>
      </div>

      {/* KPI Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {kpi.title}
              </CardTitle>
              <kpi.icon className={`h-4 w-4 ${kpi.iconColor}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground">
                {kpi.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            System monitoring dashboard will be displayed here
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
