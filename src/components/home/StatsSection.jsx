// components/home/StatsSection.jsx
import React from "react";

const StatsSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects across industries",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently high client satisfaction rate",
    },
    {
      number: "50+",
      label: "Expert Team",
      description: "Skilled professionals at your service",
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Years of industry expertise and knowledge",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <p>
            We take pride in our achievements and the trust our clients place in
            us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-primary hover:bg-blue-700/40 transition-all duration-300"
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <p className="text-blue-100">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
