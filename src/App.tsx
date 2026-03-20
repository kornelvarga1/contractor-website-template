import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import ServicePage from "./pages/ServicePage";
import LocationPage from "./pages/LocationPage";
import Reviews from "./pages/Reviews";
import Specials from "./pages/Specials";
import Contact from "./pages/Contact";
import WriteReview from "./pages/WriteReview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/areas/:city" element={<LocationPage />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/write-a-review" element={<WriteReview />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileActionBar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
