import React from "react";
import { 
  RocketLaunchIcon, 
  UserGroupIcon, 
  GlobeAltIcon, 
  LightBulbIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChartBarIcon,
  CpuChipIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  AcademicCapIcon,
  MapPinIcon,
  StarIcon,
  CheckBadgeIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  BoltIcon
} from "@heroicons/react/24/outline";
import Card from "../components/common/Card";
import ContactForm from "../components/home/ContactForm";

const AboutPage = () => {
  const journeySteps = [
    {
      year: "2019",
      title: "Foundation",
      description: "JAS Technologies was founded with a vision to revolutionize digital solutions and empower businesses through innovative technology.",
      icon: <BuildingOfficeIcon className="w-8 h-8 text-primary" />
    },
    {
      year: "2021", 
      title: "Expansion",
      description: "We expanded our team and services, establishing ourselves as a trusted partner for enterprise-grade software development.",
      icon: <ArrowTrendingUpIcon className="w-8 h-8 text-primary" />
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Launched our AI and machine learning division, integrating cutting-edge technologies into our service offerings.",
      icon: <CpuChipIcon className="w-8 h-8 text-primary" />
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Expanded internationally, serving clients across multiple continents with our comprehensive technology solutions.",
      icon: <GlobeAltIcon className="w-8 h-8 text-primary" />
    },
    {
      year: "2025",
      title: "Future Ready",
      description: "Today, we're a leading technology company with 200+ experts, ready to shape the future of digital transformation.",
      icon: <BoltIcon className="w-8 h-8 text-primary" />
    }
  ];

  const whyChooseUs = [
    {
      title: "Agile & Scalable Development",
      description: "We follow agile methodologies to deliver scalable solutions that grow with your business needs.",
      icon: <RocketLaunchIcon className="w-12 h-12 text-primary" />
    },
    {
      title: "Proven Track Record",
      description: "With 150+ successful projects and 98% client satisfaction, we deliver results that exceed expectations.",
      icon: <ChartBarIcon className="w-12 h-12 text-secondary" />
    },
    {
      title: "Expert Team",
      description: "Our 200+ certified professionals bring deep expertise across all major technologies and platforms.",
      icon: <UserGroupIcon className="w-12 h-12 text-primary" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support ensures your systems run smoothly and your business never stops.",
      icon: <ClockIcon className="w-12 h-12 text-secondary" />
    }
  ];

  const stats = [
    { label: "Years of Excellence", value: "6+" },
    { label: "Successful Projects", value: "150+" },
    { label: "Expert Team Members", value: "200+" },
    { label: "Client Satisfaction", value: "98%" },
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
              About JAS Technologies
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 md:mb-8 font-inter leading-relaxed px-2">
              Empowering businesses worldwide with innovative technology solutions and digital transformation expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <button className="bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-secondary transition duration-300">
                Our Services
              </button>
              <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-white hover:text-primary transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Our Journey Section */}
        <div className="mb-12 md:mb-section">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 font-sora">Our Journey</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-inter px-4">
              From a small startup to a global technology leader, discover the milestones that shaped our success
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary hidden lg:block"></div>
            
            <div className="space-y-8 md:space-y-16">
              {journeySteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Desktop Layout */}
                  <div className="hidden lg:block w-1/2 p-4">
                    <Card hover className="relative">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 mr-4 p-3 bg-primary/10 rounded-lg">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-2xl font-bold text-gray-900 font-sora">{step.title}</h3>
                            <span className="ml-3 px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                              {step.year}
                            </span>
                          </div>
                          <p className="text-base text-gray-600 leading-relaxed font-inter">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Desktop Timeline Node */}
                  <div className="hidden lg:flex w-1/2 justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.year}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>
                  
                  {/* Mobile Layout */}
                  <div className="lg:hidden w-full flex items-start gap-4 p-2">
                    {/* Mobile Year Node - 25% width */}
                    <div className={`w-1/4 flex justify-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                        {step.year}
                      </div>
                    </div>
                    
                    {/* Mobile Content - 75% width */}
                    <div className={`w-3/4 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                      <Card hover className="relative">
                        <div className="flex items-start mb-4">
                          <div className="flex-shrink-0 mr-3 p-2 bg-primary/10 rounded-lg">
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 font-sora mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-inter">{step.description}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="mb-12 md:mb-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 font-sora">Who We Are?</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed font-inter">
                At JAS Technologies, we are passionate technologists and creative strategists dedicated to empowering businesses with smart, scalable, and secure digital solutions. We've driven IT transformations across various industries, from startups to enterprises.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed font-inter">
                Our team combines deep technical expertise with business acumen to deliver solutions that not only meet current needs but are built to evolve with future technological advancements. We believe in the power of technology to transform businesses and create lasting value.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center p-4 md:p-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 md:mb-3 font-sora">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium font-inter">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 md:p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                <Card className="text-center group hover:scale-105 transition-transform duration-300 p-3 md:p-6">
                  <div className="p-2 md:p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                    <LightBulbIcon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base font-sora">Innovation</h3>
                  <p className="text-xs md:text-sm text-gray-600 font-inter">Cutting-edge solutions</p>
                </Card>
                <Card className="text-center group hover:scale-105 transition-transform duration-300 p-3 md:p-6">
                  <div className="p-2 md:p-4 bg-secondary/10 rounded-lg w-fit mx-auto mb-3 md:mb-4 group-hover:bg-secondary/20 transition-colors">
                    <ShieldCheckIcon className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base font-sora">Security</h3>
                  <p className="text-xs md:text-sm text-gray-600 font-inter">Enterprise-grade protection</p>
                </Card>
                <Card className="text-center group hover:scale-105 transition-transform duration-300 p-3 md:p-6">
                  <div className="p-2 md:p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                    <GlobeAltIcon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base font-sora">Global Reach</h3>
                  <p className="text-xs md:text-sm text-gray-600 font-inter">Worldwide presence</p>
                </Card>
                <Card className="text-center group hover:scale-105 transition-transform duration-300 p-3 md:p-6">
                  <div className="p-2 md:p-4 bg-secondary/10 rounded-lg w-fit mx-auto mb-3 md:mb-4 group-hover:bg-secondary/20 transition-colors">
                    <CpuChipIcon className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base font-sora">Technology</h3>
                  <p className="text-xs md:text-sm text-gray-600 font-inter">Latest tech stack</p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="mb-12 md:mb-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-0 p-6 md:p-8">
              <div className="flex items-center mb-6 md:mb-8">
                <div className="p-3 md:p-4 bg-white/20 rounded-lg mr-4 md:mr-6">
                  <LightBulbIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-sora">Vision</h2>
              </div>
              <p className="text-base md:text-lg leading-relaxed font-inter">
                Our vision is to be a globally recognized technology company, trusted for excellence in service, employee care, and customer collaboration. We strive to deliver innovative solutions that drive organizational value, ensuring long-term success and impactful digital transformation for businesses worldwide.
              </p>
            </Card>
            <Card className="bg-gradient-to-br from-secondary to-secondary/80 text-white border-0 p-6 md:p-8">
              <div className="flex items-center mb-6 md:mb-8">
                <div className="p-3 md:p-4 bg-white/20 rounded-lg mr-4 md:mr-6">
                  <RocketLaunchIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-sora">Mission</h2>
              </div>
              <p className="text-base md:text-lg leading-relaxed font-inter">
                Our mission is to empower businesses to leverage technology for success. We deliver world-class solutions that enhance efficiency, drive growth, and create a competitive edge, ultimately improving the lives of our clients through innovation and transformative digital advancements.
              </p>
            </Card>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12 md:mb-section">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 font-sora">Why Choose Us</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-inter px-4">
              Discover what makes JAS Technologies the preferred choice for businesses seeking digital transformation
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} hover className="text-center group p-4 md:p-6">
                <div className="mb-6 md:mb-8 flex justify-center">
                  <div className="p-3 md:p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 font-sora">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-inter">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Presence Section */}
        <div className="mb-12 md:mb-section">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 font-sora">Our Global Presence</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-inter px-4">
              Serving clients across multiple continents with our comprehensive technology solutions
            </p>
          </div>
          <Card className="p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
              <div className="group">
                <div className="p-4 md:p-6 bg-primary/10 rounded-full w-fit mx-auto mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <GlobeAltIcon className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 font-sora">15+ Countries</h3>
                <p className="text-sm md:text-base text-gray-600 font-inter">Serving clients worldwide</p>
              </div>
              <div className="group">
                <div className="p-4 md:p-6 bg-secondary/10 rounded-full w-fit mx-auto mb-4 md:mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                  <UserGroupIcon className="w-8 h-8 md:w-12 md:h-12 text-secondary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 font-sora">200+ Experts</h3>
                <p className="text-sm md:text-base text-gray-600 font-inter">Certified professionals</p>
              </div>
              <div className="group">
                <div className="p-4 md:p-6 bg-primary/10 rounded-full w-fit mx-auto mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <ClockIcon className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 font-sora">24/7 Support</h3>
                <p className="text-sm md:text-base text-gray-600 font-inter">Round-the-clock assistance</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-white/5"></div>
            <div className="absolute top-10 right-10 w-16 md:w-32 h-16 md:h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-12 md:w-24 h-12 md:h-24 bg-white rounded-full animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-sora">Let's Build the Future Together</h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto font-inter leading-relaxed px-4">
              Ready to transform your business with cutting-edge technology? Partner with JAS Technologies and unlock your digital potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <button className="bg-white text-primary px-6 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 font-sora">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-6 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300 font-sora">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <ContactForm/>
    </div>
  );
};

export default AboutPage;