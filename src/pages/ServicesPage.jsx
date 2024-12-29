import React from "react";
import ContactForm from "../components/home/ContactForm";
const ServicesPage = () => {
  const services = [
    {
      title: "Cloud & DevOps",
      description: "Enterprise-grade cloud solutions and DevOps automation",
      features: [
        "AWS/Azure/GCP Migration",
        "Kubernetes Orchestration",
        "CI/CD Implementation",
        "Infrastructure as Code",
        "Microservices Architecture",
        "24/7 Cloud Monitoring",
      ],
    },
    {
      title: "Frontend Development",
      description: "Modern web applications with cutting-edge technologies",
      features: [
        "React/Next.js Development",
        "Vue.js Applications",
        "Angular Solutions",
        "Progressive Web Apps",
        "UI/UX Implementation",
        "Performance Optimization",
      ],
    },
    {
      title: "Backend Development",
      description: "Scalable and secure backend solutions",
      features: [
        "Node.js/Express APIs",
        "Python/Django/Flask",
        "Java Spring Boot",
        "GraphQL Services",
        "Microservices Design",
        "API Security",
      ],
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile solutions",
      features: [
        "iOS Development",
        "Android Applications",
        "React Native Apps",
        "Flutter Development",
        "Mobile UI/UX",
        "App Store Deployment",
      ],
    },
    {
      title: "Database Solutions",
      description: "Database design, optimization and management",
      features: [
        "SQL Database Design",
        "NoSQL Implementation",
        "Data Migration",
        "Performance Tuning",
        "High Availability Setup",
        "Backup & Recovery",
      ],
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and quality assurance",
      features: [
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
        "CI/CD Integration",
        "Test Automation",
        "QA Consulting",
      ],
    },
    {
      title: "Cybersecurity",
      description: "Enterprise security and compliance solutions",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance (GDPR/HIPAA)",
        "Security Architecture",
        "Incident Response",
        "Security Training",
      ],
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions for business automation",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "ML Model Development",
        "AI Integration",
        "Data Pipeline Setup",
      ],
    },
    {
      title: "Support & Maintenance",
      description: "24/7 technical support and system maintenance",
      features: [
        "System Monitoring",
        "Performance Optimization",
        "Security Updates",
        "Bug Fixes",
        "Feature Enhancement",
        "Technical Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">
            Enterprise IT solutions powered by cutting-edge technology
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ServicesPage;
