import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
import ScrollToTop from "./components/common/ScrollToTop";
// import BlogSection from "./components/home/BlogSection";

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
      {/* <BlogSection /> */}
      <TopBrands />
    </>
  );
};

const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const CaseStudiesPage = React.lazy(() => import("./pages/CaseStudiesPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
// const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const CaseStudyDetail = React.lazy(() => import("./pages/CaseStudyDetail"));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            },
            // Success toast style
            success: {
              style: {
                background: "#10B981",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#10B981",
              },
            },
            // Error toast style
            error: {
              style: {
                background: "#EF4444",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#EF4444",
              },
            },
            // Loading toast style
            loading: {
              style: {
                background: "#3B82F6",
                color: "#fff",
              },
            },
          }}
        />

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
              <Route
                path="/success-stories/:slug"
                element={<CaseStudyDetail />}
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/success-stories" element={<CaseStudiesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* <Route path="/blog" element={<BlogPage />} /> */}

              {/* Catch all route for 404 */}
              <Route
                path="*"
                element={
                  <div className="flex flex-col items-center justify-center min-h-screen bg-background-light px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-sora">
                      404 - Page Not Found
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 text-center font-inter leading-relaxed">
                      The page you're looking for doesn't exist.
                    </p>
                    <a
                      href="/"
                      className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-secondary transition-colors duration-300 font-sora"
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
