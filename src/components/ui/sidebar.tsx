import React from "react";
import { cn } from "../../lib/utils";
import { navigation } from "../../config/navigation";
import { Link, useLocation } from "react-router-dom";
import { PanelsTopLeft, ChevronRight, LayoutGrid, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
  onToggle?: () => void;
}

export function Sidebar({ className, isVisible = true, onToggle }: SidebarProps) {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    onToggle?.();
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      "relative border-r border-gray-200 dark:border-gray-800",
      isCollapsed ? "w-16" : "w-[220px]",
      "transition-all duration-300 h-[calc(100vh-64px)]",
      className
    )}>
      {/* Collapse Button */}
      <button
        className="absolute -right-3 top-4 z-10 rounded-full border border-gray-200 bg-white p-1.5 dark:border-gray-800 dark:bg-gray-950"
        onClick={handleToggle}
      >
        <PanelsTopLeft className={cn(
          "h-4 w-4 transition-transform duration-300",
          isCollapsed ? "rotate-180" : "rotate-0"
        )} />
      </button>

      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className={cn(
            "flex items-center gap-2 transition-all",
            isCollapsed ? "opacity-0" : "opacity-100 px-2 mb-2"
          )}>
            <LayoutGrid className="h-5 w-5 text-[hsl(var(--brand))]" />
            <h2 className="text-lg font-semibold tracking-tight text-[hsl(var(--brand))]">
              Health Spaces
            </h2>
          </div>
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-all",
                    "hover:bg-[hsl(var(--brand))] hover:text-[hsl(var(--brand-foreground))] hover:bg-opacity-90",
                    isActive 
                      ? "bg-[hsl(var(--brand))] text-[hsl(var(--brand-foreground))]" 
                      : "text-gray-500 dark:text-gray-400"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className={cn(
                    "transition-all",
                    isCollapsed ? "opacity-0 w-0" : "opacity-100"
                  )}>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Health Pilot Card */}
          <div className={cn(
            "mt-4 transition-all",
            isCollapsed ? "opacity-0" : "opacity-100"
          )}>
            <Card className="border border-gray-200 dark:border-gray-800">
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-[hsl(var(--brand))]" />
                  <CardTitle className="text-sm">Health Pilot (Beta)</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  AI agent trained on your private and personal health data
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <button className="w-full px-3 py-1.5 text-xs font-medium text-white bg-[hsl(var(--brand))] hover:bg-opacity-90 rounded-md transition-colors">
                  Learn More
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={cn(
        "fixed bottom-0 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0B0D14] p-4",
        isCollapsed ? "hidden" : "block",
        isCollapsed ? "w-16" : "w-[220px]"
      )}>
        <a
          href="https://protocolhealth.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full px-3 py-2 text-xs font-medium text-white bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))] hover:bg-opacity-90 rounded-lg transition-colors"
        >
          Visit Protocol Health
        </a>
        <p className="mt-3 text-xs text-center text-gray-500 dark:text-gray-400">Version 1.0.0</p>
      </div>
    </div>
  );
}
