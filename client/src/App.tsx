import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebDevelopment from './pages/WebDevelopment';
import { useEffect } from "react";
import "@/styles/FadeIn.css";

import ScrollToTop from "@/components/ScrollToTop";

const App = () => {
  useEffect(() => {
    // Add js-loaded class immediately
    document.documentElement.classList.add('js-loaded');
    return () => document.documentElement.classList.remove('js-loaded');
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col animation-wrapper">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TooltipProvider>
  );
};

export default App;
