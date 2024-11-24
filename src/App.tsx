import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { TopNav } from "./components/ui/top-nav";
import { Sidebar } from "./components/ui/sidebar";
import { GeneralHealth } from "./pages/GeneralHealth";
import { MentalHealth } from "./pages/MentalHealth";
import { Nutrition } from "./pages/Nutrition";
import { Fitness } from "./pages/Fitness";
import { Sleep } from "./pages/Sleep";
import { Social } from "./pages/Social";
import { Lifestyle } from "./pages/Lifestyle";
import { Login } from "./pages/Login";
import { Preferences } from "./pages/Preferences";
import { cn } from "./lib/utils";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-[#F7F7F7] dark:bg-[#0B0D14]">
          <TopNav />
          <div className="flex pt-16">
            <Sidebar 
              isVisible={isSidebarVisible} 
              onToggle={handleSidebarToggle}
            />
            <main className={cn(
              "flex-1 p-6",
              isSidebarCollapsed ? "ml-16" : ""
            )}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/general-health" element={<GeneralHealth />} />
                <Route path="/mental-health" element={<MentalHealth />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/fitness" element={<Fitness />} />
                <Route path="/sleep" element={<Sleep />} />
                <Route path="/social" element={<Social />} />
                <Route path="/lifestyle" element={<Lifestyle />} />
                <Route path="/preferences" element={<Preferences />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
