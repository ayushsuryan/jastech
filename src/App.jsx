import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AnnouncementBar from "./components/layout/AnnouncementBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/home/HeroSection";
import BusinessGrowth from "./components/home/BusinessGrowth";
import TopBrands from "./components/home/TopBrands";
import ServiceSection from "./components/home/ServiceSection";
import ContactForm from "./components/home/ContactForm";
import StatsSection from "./components/home/StatsSection";
import ReviewsSection from "./components/home/ReviewsSection";
import CaseStudies from "./components/home/CaseStudies";
import BlogSection from "./components/home/BlogSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BusinessGrowth />
      <ServiceSection />
      <CaseStudies />
      <ReviewsSection />
      <StatsSection />
      <ContactForm />
      <BlogSection />
      <TopBrands />
    </>
  );
};

const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));

const AboutPage = React.lazy(() => import("./pages/AboutPage"));

const CaseStudiesPage = React.lazy(() => import("./pages/CaseStudiesPage"));

const ContactPage = React.lazy(() => import("./pages/ContactPage"));

const BlogPage = React.lazy(() => import("./pages/BlogPage"));

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Header />

        <main className="flex-grow">
          <React.Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />

              {/* Catch all route for 404 */}
              <Route
                path="*"
                element={
                  <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-4xl font-bold mb-4">
                      404 - Page Not Found
                    </h1>
                    <p className="text-gray-600 mb-8">
                      The page you're looking for doesn't exist.
                    </p>
                    <a
                      href="/"
                      className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Return Home
                    </a>
                  </div>
                }
              />
            </Routes>
          </React.Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
