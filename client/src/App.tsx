import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ContactPage from "@/pages/ContactPage";
import LandingPageService from "@/pages/services/LandingPageService";
import AIChatbotService from "@/pages/services/AIChatbotService";
import MediaService from "@/pages/services/MediaService";
import ImpressumPage from "@/pages/ImpressumPage";
import AGBPage from "@/pages/AGBPage";
import DatenschutzPage from "@/pages/DatenschutzPage";
import FunnelPage from "@/pages/FunnelPage";
import ChatBot from "@/components/ChatBot";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/services/landing-page" component={LandingPageService} />
      <Route path="/services/ai-chatbot" component={AIChatbotService} />
      <Route path="/services/media" component={MediaService} />
      <Route path="/impressum" component={ImpressumPage} />
      <Route path="/agb" component={AGBPage} />
      <Route path="/datenschutz" component={DatenschutzPage} />
      <Route path="/funnel" component={FunnelPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const showChatBot = location !== "/funnel";

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
      {showChatBot && <ChatBot />}
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;