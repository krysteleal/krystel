
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FromFranceToValley from "./pages/stories/FromFranceToValley";
import CustomerSuccess from "./pages/stories/CustomerSuccess";
import StartupJourney from "./pages/stories/StartupJourney";
import DigitalProjects from "./pages/stories/france/DigitalProjects";
import GrowingUp from "./pages/stories/france/GrowingUp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stories/france" element={<FromFranceToValley />} />
          <Route path="/stories/customer-success" element={<CustomerSuccess />} />
          <Route path="/stories/startup" element={<StartupJourney />} />
          <Route path="/stories/france/digital-projects" element={<DigitalProjects />} />
          <Route path="/stories/france/growing-up" element={<GrowingUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
