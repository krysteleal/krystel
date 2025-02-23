
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FromFranceToValley from "./pages/stories/FromFranceToValley";
import CustomerSuccess from "./pages/stories/CustomerSuccess";
import StartupJourney from "./pages/stories/StartupJourney";
import DigitalProjects from "./pages/stories/europe/DigitalProjects";
import GrowingUp from "./pages/stories/europe/GrowingUp";
import SiliconValleyMindset from "./pages/stories/cs/SiliconValleyMindset";
import Learning from "./pages/stories/cs/Learning";
import BuildingTeam from "./pages/stories/cs/BuildingTeam";
import References from "./pages/stories/cs/References";
import Transition from "./pages/stories/startup/Transition";
import Networking from "./pages/stories/startup/Networking";
import ShowWork from "./pages/stories/startup/ShowWork";
import SiliconValley from "./pages/stories/europe/SiliconValley";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Redirect old routes to new routes */}
          <Route path="/stories/france" element={<Navigate to="/stories/europe" replace />} />
          <Route path="/stories/france/growing-up" element={<Navigate to="/stories/europe/growing-up" replace />} />
          <Route path="/stories/france/digital-projects" element={<Navigate to="/stories/europe/digital-projects" replace />} />
          <Route path="/stories/france/silicon-valley" element={<Navigate to="/stories/europe/silicon-valley" replace />} />
          <Route path="/stories/europe" element={<FromFranceToValley />} />
          <Route path="/stories/customer-success" element={<CustomerSuccess />} />
          <Route path="/stories/startup" element={<StartupJourney />} />
          <Route path="/stories/europe/digital-projects" element={<DigitalProjects />} />
          <Route path="/stories/europe/growing-up" element={<GrowingUp />} />
          <Route path="/stories/europe/silicon-valley" element={<SiliconValley />} />
          <Route path="/stories/cs/silicon-valley-mindset" element={<SiliconValleyMindset />} />
          <Route path="/stories/cs/learning" element={<Learning />} />
          <Route path="/stories/cs/building-team" element={<BuildingTeam />} />
          <Route path="/stories/cs/references" element={<References />} />
          <Route path="/stories/startup/transition" element={<Transition />} />
          <Route path="/stories/startup/networking" element={<Networking />} />
          <Route path="/stories/startup/show-work" element={<ShowWork />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
