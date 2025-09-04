import React from "react";
import ContactForm from '../components/home/ContactForm'
const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Healthcare Data Platform Modernization",
      client: "MedTech Solutions Group",
      industry: "Healthcare",
      challenge: "Legacy data infrastructure causing delays in patient care and analytics",
      solution: "Implemented modern data lake architecture with real-time analytics capabilities",
      results: [
        "60% faster patient data retrieval",
        "Reduced data storage costs by 45%",
        "Real-time analytics implementation",
      ],
      slug: "medtech-data-platform"
    },
    {
      title: "AI-Powered Financial Trading Platform",
      client: "Global Investment Corp",
      industry: "Financial Services",
      challenge: "Manual trading processes limiting market responsiveness",
      solution: "Custom AI/ML platform for automated trading and risk analysis",
      results: [
        "90% reduction in trading decision time",
        "35% improvement in trading accuracy",
        "Real-time risk assessment capability",
      ],
      slug: "ai-trading-platform"
    },
    {
      title: "E-commerce Platform Scalability Project",
      client: "RetailTech Solutions",
      industry: "Retail Technology",
      challenge: "Platform performance issues during high-traffic periods",
      solution: "Microservices architecture implementation with auto-scaling",
      results: [
        "100x increase in concurrent users",
        "99.99% uptime during peak sales",
        "70% reduction in server costs",
      ],
      slug: "retailtech-scalability"
    }
  ,
    {
      title: "Cross-Platform Delivery Fleet Management App",
      client: "FastTrack Logistics",
      industry: "Transportation & Logistics",
      challenge: "Inefficient delivery tracking and driver management across different platforms",
      solution: "React Native mobile app with real-time GPS tracking and route optimization",
      results: [
        "40% improvement in delivery efficiency",
        "Real-time tracking for 500+ drivers",
        "85% reduction in delivery delays"
      ],
      slug: "fasttrack-fleet-app"
    },
    {
      title: "Enterprise Field Service Mobile Solution",
      client: "TechServ Solutions",
      industry: "Field Services",
      challenge: "Paper-based field service operations causing delays and data errors",
      solution: "Flutter-based mobile app with offline capability and digital forms",
      results: [
        "75% reduction in paperwork processing",
        "98% faster service report generation",
        "30% increase in daily service capacity"
      ],
      slug: "techserv-field-app"
    }
  ];

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
              Success Stories
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 md:mb-8 font-inter leading-relaxed px-2">
              Enterprise IT solutions powered by cutting-edge technology
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="space-y-8 md:space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 md:p-8">
                <div className="text-sm md:text-base text-primary mb-2 font-medium">
                  {study.industry}
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 font-sora">{study.title}</h2>
                <p className="text-sm md:text-base text-gray-600 mb-6 font-inter">Client: {study.client}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <h3 className="font-bold mb-3 text-base md:text-lg font-sora">Challenge</h3>
                    <p className="text-sm md:text-base text-gray-600 font-inter leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3 text-base md:text-lg font-sora">Solution</h3>
                    <p className="text-sm md:text-base text-gray-600 font-inter leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="mt-6 md:mt-8">
                  <h3 className="font-bold mb-4 text-base md:text-lg font-sora">Key Results</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm md:text-base text-gray-700 font-inter">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default CaseStudiesPage;
