import React from "react";
import { cn } from "@/lib/utils";
import { navigation } from "@/config/navigation";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

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
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className={cn(
            "text-lg font-semibold tracking-tight transition-all",
            isCollapsed ? "opacity-0" : "opacity-100 px-2 mb-2"
          )}>
            Health Dashboard
          </h2>
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
                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                    isActive 
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" 
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
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-white bg-[#0B85B5] hover:bg-[#0B85B5]/90 rounded-lg transition-colors group"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4 text-white" />
            Visit Protocol Health
          </span>
          <ChevronRight className="h-4 w-4 text-white" />
        </a>
        <p className="mt-3 text-xs text-center text-gray-500 dark:text-gray-400">Version 1.0.0</p>
      </div>
    </div>
  );
}
