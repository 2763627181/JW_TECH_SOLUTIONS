import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "@/components/ChatWidget";
import { LanguageProvider } from "@/i18n/LanguageContext";

const queryClient = new QueryClient();

// El chatbot Jowi necesita un backend (/api/chat) y una API key (OpenAI/Groq).
// Está desactivado por defecto; para reactivarlo define VITE_ENABLE_CHAT=true
// en las variables de entorno de Vercel (y configura OPENAI_API_KEY).
const CHAT_ENABLED = import.meta.env.VITE_ENABLE_CHAT === "true";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Chat flotante global (desactivado temporalmente, ver CHAT_ENABLED) */}
          {CHAT_ENABLED && <ChatWidget />}
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
