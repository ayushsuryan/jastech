import React from "react";
import {
  CloudArrowUpIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  ServerIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const ServiceSection = () => {
  const services = [
    {
      title: "Frontend Development",
      icon: CodeBracketIcon,
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
      icon: ServerIcon,
      description: "Scalable and secure backend solutions",
      features: [
        "Node.js/Express APIs",
        "Python/Django/Flask",
        "Java Spring Boot",
        "GraphQL Services",
        "Microservices Architecture",
        "API Documentation",
      ],
    },
    {
      title: "iOS Development",
      icon: DevicePhoneMobileIcon,
      description: "Native iOS applications for Apple ecosystem",
      features: [
        "Swift Development",
        "SwiftUI Implementation",
        "iOS SDK Integration",
        "App Store Deployment",
        "iOS Security Features",
        "Performance Optimization",
      ],
    },
    {
      title: "Android Development",
      icon: DevicePhoneMobileIcon,
      description: "Native Android applications with modern architecture",
      features: [
        "Kotlin Development",
        "Java Android Apps",
        "Material Design UI",
        "Play Store Publishing",
        "Android SDK/NDK",
        "App Performance",
      ],
    },
    {
      title: "Cross-Platform Mobile",
      icon: DevicePhoneMobileIcon,
      description: "Unified mobile solutions for all platforms",
      features: [
        "React Native Apps",
        "Flutter Development",
        "Xamarin Solutions",
        "Cross-Platform UI/UX",
        "Code Sharing Strategy",
        "Multi-Platform Deployment",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: CloudArrowUpIcon,
      description: "Enterprise-grade cloud solutions and DevOps automation",
      features: [
        "AWS/Azure/GCP Migration",
        "Kubernetes Orchestration",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "24/7 Cloud Monitoring",
        "Zero-downtime Deployment",
      ],
    },
    {
      title: "Database Solutions",
      icon: CircleStackIcon,
      description: "Database design, optimization and management",
      features: [
        "SQL Database Design",
        "NoSQL Implementation",
        "Data Migration",
        "Performance Tuning",
        "High Availability",
        "Backup & Recovery",
      ],
    },
    {
      title: "Quality Assurance",
      icon: WrenchScrewdriverIcon,
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
      icon: ShieldCheckIcon,
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
      icon: CpuChipIcon,
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
      title: "BigData Analytics",
      icon: ChartBarIcon,
      description: "Large-scale data processing and analytics solutions",
      features: [
        "Hadoop Ecosystem",
        "Apache Spark",
        "Real-time Analytics",
        "Data Warehousing",
        "ETL Pipeline Design",
        "Business Intelligence",
      ],
    },
    {
      title: "Support & Maintenance",
      icon: BoltIcon,
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-blue-100">
            Enterprise IT solutions powered by cutting-edge technology
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="w-8 h-8 text-bg-primary" />
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-bg-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 group"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
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
                      <span className="group-hover:text-blue-600 transition-colors duration-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
