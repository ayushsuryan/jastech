import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Innovative IT Solutions for Your Business Growth
            </h1>
            <p className="text-xl  mb-8">
              We help businesses leverage cutting-edge technology to transform
              their operations and achieve remarkable results.
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
                <h4 className="text-3xl font-bold">500+</h4>
                <p className="text-blue-100">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">98%</h4>
                <p className="text-blue-100">Client Satisfaction</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">15+</h4>
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
