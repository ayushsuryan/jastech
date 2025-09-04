import React from "react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const cases = [
    {
      title: "W Labs Enterprise Resource Planning",
      client: "W Labs Research & Technology",
      category: "Enterprise Software",
      image:
        "https://cdn.dribbble.com/users/77531/screenshots/12587527/media/f13ab4cf034c56b4f9f7136debaf5c95.png?resize=1000x750&vertical=center",
      results: [
        "Streamlined 5 department workflows",
        "Automated resource allocation",
        "Real-time financial tracking",
      ],
      slug: "w-labs-erp",
    },
    {
      title: "Acero School Management Suite",
      client: "Acero Schools Network",
      category: "Education Technology",
      image:
        "https://cdn.dribbble.com/userupload/5776460/file/original-5dceb5fb5e57afe258b8a51eb7ba21ca.png?resize=1024x768&vertical=center",
      results: [
        "Integrated student information system",
        "Automated attendance tracking",
        "Parent-teacher communication portal",
      ],
      slug: "acero-school-management",
    },
    {
      title: "Zendenta Clinic Management",
      client: "Zendenta Dental Care",
      category: "Healthcare Solution",
      image:
        "https://cdn.dribbble.com/userupload/15677342/file/original-643451a14e5ee445889b4223f57ff5ee.png?resize=1024x768&vertical=center",
      results: [
        "Digital patient records system",
        "Integrated appointment scheduling",
        "Automated billing system",
      ],
      slug: "zendenta-clinic-management",
    },
  ];

  return (
    <section className=" bg-gray-50">
      <div className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-blue-100">
            Enterprise IT solutions powered by cutting-edge technology
          </p>
        </div>
      </div>
      <div className="pt-10 pb-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <Link
              key={index}
              to={`/success-stories/${study.slug}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {study.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">Client: {study.client}</p>
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
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
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/success-stories"
            className="inline-flex items-center px-6 py-3 border border-blue-600 
            text-base font-medium rounded-md text-blue-600 hover:bg-secondary"
          >
            View All Stories
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
