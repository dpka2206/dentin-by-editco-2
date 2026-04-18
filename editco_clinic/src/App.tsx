import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import PageShell from "@/components/site/PageShell";
import HomePage from "@/pages/HomePage";
import AboutUs from "@/pages/AboutUs";
import ServicesPage from "@/pages/ServicesPage";
import DoctorsPage from "@/pages/DoctorsPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import FaqsPage from "@/pages/FaqsPage";
import ContactPage from "@/pages/ContactPage";
import AdminDashboard from "@/pages/AdminDashboard";

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Toaster position="top-center" richColors />
    <Routes>
      <Route element={<PageShell />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="faqs" element={<FaqsPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
