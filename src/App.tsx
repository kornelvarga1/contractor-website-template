import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ChatWidget from "@/components/ChatWidget";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import LocationPage from "./pages/LocationPage";
import Contact from "./pages/Contact";
import WriteReview from "./pages/WriteReview";
import Quote from "./pages/Quote";
import Gallery from "./pages/Gallery";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const BlogComingSoon = () => (
  <section className="min-h-[60vh] flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-foreground">Blog</h1>
      <p className="mt-4 text-muted-foreground">Coming soon — check back for roofing tips and project updates.</p>
    </div>
  </section>
);

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
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/areas/:city" element={<LocationPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/write-a-review" element={<WriteReview />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/blog" element={<BlogComingSoon />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
