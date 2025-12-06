import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ThemeProvider } from "@/react-app/context/ThemeContext";
import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import SolutionsPage from "@/react-app/pages/Solutions";
import UseCasesPage from "@/react-app/pages/UseCases";
import PricingPage from "@/react-app/pages/Pricing";
import ContactPage from "@/react-app/pages/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <Router basename="/Curelystics">
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
