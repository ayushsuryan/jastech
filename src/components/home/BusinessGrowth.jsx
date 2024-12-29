import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const BusinessGrowth = () => {
  const benefits = [
    "Custom Software Solutions",
    "Cloud Infrastructure",
    "Digital Transformation",
    "IT Consulting",
    "Cybersecurity",
    "AI & Machine Learning",
  ];

  return (
    <section className="py-20 bg-black-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Accelerate Your Business Growth
            </h2>
            <p className="text-black-600 mb-8">
              We help businesses leverage cutting-edge technology to stay ahead
              of the competition and achieve their goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-black-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="/src/assets/images/1.jpg"
              alt="Business Growth"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowth;
