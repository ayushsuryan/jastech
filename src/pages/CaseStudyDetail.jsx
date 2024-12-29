import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  
  // Case studies data - In a real app, this would come from an API or database
  const caseStudies = {
    'w-labs-erp': {
      title: "W Labs Enterprise Resource Planning",
      client: "W Labs Research & Technology",
      category: "Enterprise Software",
      image: "https://cdn.dribbble.com/users/77531/screenshots/12587527/media/f13ab4cf034c56b4f9f7136debaf5c95.png?resize=1000x750&vertical=center",
      challenge: "Legacy ERP system causing inefficiencies and data silos across departments",
      solution: "Custom ERP solution with integrated modules for resource management, financial tracking, and automated workflows",
      results: [
        "Streamlined 5 department workflows",
        "Automated resource allocation",
        "Real-time financial tracking",
        "40% reduction in manual data entry",
        "60% faster report generation"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      testimonial: {
        text: "The new ERP system has transformed how we operate. The automation and real-time insights have been game-changing for our efficiency.",
        author: "Sarah Chen",
        position: "CTO, W Labs"
      }
    },
    'acero-school-management': {
      title: "Acero School Management Suite",
      client: "Acero Schools Network",
      category: "Education Technology",
      image: "https://cdn.dribbble.com/userupload/5776460/file/original-5dceb5fb5e57afe258b8a51eb7ba21ca.png?resize=1024x768&vertical=center",
      challenge: "Disparate systems for student information, attendance, and parent communication",
      solution: "Integrated school management platform with centralized database and communication tools",
      results: [
        "Integrated student information system",
        "Automated attendance tracking",
        "Parent-teacher communication portal",
        "50% reduction in administrative tasks",
        "95% parent engagement rate"
      ],
      technologies: ["Vue.js", "Python/Django", "MongoDB", "AWS"],
      testimonial: {
        text: "This system has revolutionized how we manage our schools and communicate with parents. It's been an invaluable tool for our educational community.",
        author: "Michael Rodriguez",
        position: "Director of Technology, Acero Schools"
      }
    },
    'zendenta-clinic-management': {
      title: "Zendenta Clinic Management",
      client: "Zendenta Dental Care",
      category: "Healthcare Solution",
      image: "https://cdn.dribbble.com/userupload/15677342/file/original-643451a14e5ee445889b4223f57ff5ee.png?resize=1024x768&vertical=center",
      challenge: "Paper-based patient records and manual appointment scheduling",
      solution: "Digital clinic management system with electronic health records and automated scheduling",
      results: [
        "Digital patient records system",
        "Integrated appointment scheduling",
        "Automated billing system",
        "70% reduction in scheduling errors",
        "30% increase in patient satisfaction"
      ],
      technologies: ["Angular", "Java Spring Boot", "MySQL", "Azure"],
      testimonial: {
        text: "The digital transformation has significantly improved our operational efficiency and patient care quality.",
        author: "Dr. Lisa Wang",
        position: "CEO, Zendenta Dental Care"
      }
    }
  };

  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/success-stories" className="text-blue-600 hover:text-blue-800">
            View All Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-blue-200 mb-4">{caseStudy.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-blue-100">Client: {caseStudy.client}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Project Image */}
          <div className="mb-12">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-600">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <p className="text-gray-600">{caseStudy.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Results</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
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
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <blockquote className="text-xl text-gray-600 mb-6">
              "{caseStudy.testimonial.text}"
            </blockquote>
            <div className="font-semibold">{caseStudy.testimonial.author}</div>
            <div className="text-gray-600">{caseStudy.testimonial.position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;