import React from "react";
import CaseStudies from "../components/home/CaseStudies";
import ContactForm from "../components/home/ContactForm";

const AboutPage = () => {
  const stats = [
    { label: "Years of Innovation", value: "5+" },
    { label: "Successful Projects", value: "100+" },
    { label: "Expert Team Members", value: "25+" },
    { label: "Client Satisfaction", value: "97%" },
  ];

  const services = [
    {
      title: "Custom Software Development",
      description: "Enterprise-grade applications tailored to your unique business needs using cutting-edge technologies and best practices.",
      icon: "💻"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform and native mobile applications that deliver exceptional user experiences across all devices.",
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your business operations and reduce costs.",
      icon: "☁️"
    },
    {
      title: "Digital Transformation",
      description: "Strategic consulting and implementation services to help businesses evolve in the digital age.",
      icon: "🚀"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of technological trends to deliver forward-thinking solutions."
    },
    {
      title: "Client Partnership",
      description: "We build lasting relationships, treating your success as our own."
    },
    {
      title: "Technical Excellence",
      description: "We maintain the highest standards in code quality and system architecture."
    },
    {
      title: "Agile Adaptation",
      description: "We embrace change and rapidly adapt to evolving business needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">About JAS Tech</h1>
          <p className="text-xl text-blue-100">
            Transforming Ideas into Powerful Digital Solutions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Story and Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2019, JAS Tech emerged from a vision to bridge the gap between complex 
              technology and business success. As a dynamic IT startup, we've rapidly grown from 
              a small team of passionate developers to a full-service technology partner trusted 
              by businesses across multiple industries.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey began in a small office with three developers and a shared dream of 
              making enterprise-grade technology accessible to businesses of all sizes. Today, 
              we're proud to have expanded our team to include experts in various technology 
              domains, from cloud architecture to mobile development and AI implementation.
            </p>
            <p className="text-gray-600">
              At JAS Tech, we believe in the power of technology to transform businesses. 
              Our team combines technical excellence with creative problem-solving to deliver 
              solutions that not only meet today's needs but are built to evolve with future 
              technological advancements.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Technology Stack</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>React & React Native</li>
                  <li>Angular</li>
                  <li>Vue.js</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Backend Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Node.js</li>
                  <li>Python/Django</li>
                  <li>Java Spring Boot</li>
                  <li>.NET Core</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>AWS & Azure</li>
                  <li>Docker & Kubernetes</li>
                  <li>CI/CD Pipeline</li>
                  <li>Microservices Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CaseStudies />
      <ContactForm/>
    </div>
  );
};

export default AboutPage;