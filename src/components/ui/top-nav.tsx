import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  LogOut,
  Settings,
  Sliders,
  HelpCircle,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useTheme } from "../theme-provider";
import phIcon from "../../assets/ph-icon2.svg";

export const TopNav = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [notifications, setNotifications] = React.useState(3);
  
  const userEmail = localStorage.getItem("userEmail") || "guest@example.com";
  const userRole = localStorage.getItem("userRole") || "guest";
  const displayName = userRole === "guest" ? "Guest User" : userEmail.split("@")[0];
  const avatarInitials = displayName.split(" ").map(n => n[0]).join("").toUpperCase();
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0B85B5&color=fff&size=128`;

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-[#0B85B5] border-b border-[#F7F7F7]/10 px-4 flex items-center justify-between z-50">
      {/* Left side - Logo and Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          to="/login"
          className="hover:opacity-90"
        >
          <img 
            src={phIcon} 
            alt="Protocol Health" 
            className="h-8 w-8"
          />
        </Link>
        <Link
          to="/longevity"
          className="text-sm font-medium text-white hover:text-white/90"
        >
          Longevity
        </Link>
        <Link
          to="/health-wallet"
          className="text-sm font-medium text-white hover:text-white/90"
        >
          Health Wallet
        </Link>
        <Link
          to="/wearables"
          className="text-sm font-medium text-white hover:text-white/90"
        >
          Wearables
        </Link>
        <Link
          to="/rx-cabinet"
          className="text-sm font-medium text-white hover:text-white/90"
        >
          Rx Cabinet
        </Link>
      </div>

      {/* Right side - User Account and Notifications */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative hover:bg-white/10">
              <Bell size={20} className="text-white" />
              {notifications > 0 && (
                <Badge
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-[#FFC67D]"
                  variant="destructive"
                >
                  {notifications}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-[#1A1D23] border-[#F7F7F7]/10">
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#F7F7F7]/10">
              <span className="font-semibold text-white">Notifications</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setNotifications(0)}
                className="hover:bg-white/10 text-white"
              >
                Mark all as read
              </Button>
            </div>
            {/* Example notifications */}
            <div className="py-2 px-4 text-sm">
              <div className="mb-2">
                <p className="font-medium text-white">Daily Goal Achieved!</p>
                <p className="text-white/70">You've reached your step goal for today.</p>
              </div>
              <div className="mb-2">
                <p className="font-medium text-white">New Health Tip Available</p>
                <p className="text-white/70">Check out today's wellness advice.</p>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Account Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Avatar className="h-8 w-8">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback className="bg-[#1A1D23] text-white">{avatarInitials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-[#1A1D23] border-[#F7F7F7]/10">
            <div className="px-4 py-3 border-b border-[#F7F7F7]/10">
              <div className="flex items-center space-x-3">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={avatarUrl} />
                  <AvatarFallback className="bg-[#1A1D23] text-white">{avatarInitials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-white">{displayName}</p>
                  <p className="text-xs text-white/70">{userEmail}</p>
                </div>
              </div>
            </div>
            <Link to="/profile">
              <DropdownMenuItem className="text-white hover:bg-white/10">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
            </Link>
            <Link to="/settings">
              <DropdownMenuItem className="text-white hover:bg-white/10">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </Link>
            <Link to="/preferences">
              <DropdownMenuItem className="text-white hover:bg-white/10">
                <Sliders className="mr-2 h-4 w-4" />
                <span>Preferences</span>
              </DropdownMenuItem>
            </Link>
            <Link to="/help">
              <DropdownMenuItem className="text-white hover:bg-white/10">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator className="bg-[#F7F7F7]/10" />
            <DropdownMenuItem 
              className="text-[#FFC67D] hover:bg-white/10 cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
