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
    <div className="min-h-screen bg-gray-50">
      <div className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Developments
          </h1>
          <p className="text-xl text-blue-100">
            Enterprise IT solutions powered by cutting-edge technology
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="text-sm text-blue-600 mb-2">
                  {study.industry}
                </div>
                <h2 className="text-2xl font-bold mb-4">{study.title}</h2>
                <p className="text-gray-600 mb-4">Client: {study.client}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-2">Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Solution</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold mb-4">Results</h3>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
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
                        {result}
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
