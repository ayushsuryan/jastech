import React from "react";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Enterprise Cloud Migration",
      client: "Global Retail Corp",
      industry: "Retail",
      challenge: "Legacy infrastructure limiting scalability",
      solution: "Comprehensive cloud migration and optimization",
      results: [
        "40% reduction in operational costs",
        "99.9% uptime achieved",
        "Improved scalability and performance",
      ],
    },
    {
      title: "Digital Transformation Initiative",
      client: "FinTech Solutions",
      industry: "Financial Services",
      challenge: "Outdated systems and manual processes",
      solution: "Custom software development and process automation",
      results: [
        "85% process automation achieved",
        "50% reduction in processing time",
        "Enhanced customer satisfaction",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
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
    </div>
  );
};

export default CaseStudiesPage;
