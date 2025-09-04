import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css"; // <- we’ll put animation styles here

const HeroSection = () => {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Animated Background Layer */}
      <div className="background">
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert IT Development & Custom Software Solutions for Business Growth
            </h1>
            <p className="text-xl mb-8">
              At Jas Technologies, we specialize in delivering tailored IT
              development services, including web, mobile, and enterprise
              software, to drive your digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold 
                hover:bg-secondary transition duration-300 text-center"
              >
                Get Started
              </Link>
              <Link
                to="/success-stories"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg 
                font-semibold hover:bg-white hover:text-black transition duration-300 text-center"
              >
                View Stories
              </Link>
            </div>
            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <p className="text-blue-100">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold">98%</div>
                <p className="text-blue-100">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold">15+</div>
                <p className="text-blue-100">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
