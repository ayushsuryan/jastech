import React from "react";
import ContactForm from "../components/home/ContactForm";

const ContactPage = () => {

  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <div className="relative bg-primary text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 font-sora">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 md:mb-8 font-inter leading-relaxed px-2">
              Get in touch with our team
            </p>
          </div>
        </div>
      </div>

      <ContactForm></ContactForm>
    </div>
  );
};

export default ContactPage;
