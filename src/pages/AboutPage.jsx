import React from "react";

const AboutPage = () => {
  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Completed Projects", value: "500+" },
    { label: "Team Members", value: "50+" },
    { label: "Client Satisfaction", value: "98%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-blue-100">
            Leading the way in digital transformation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              For over 15 years, we've been at the forefront of technological
              innovation, helping businesses transform and thrive in the digital
              age. Our journey began with a simple mission: to make powerful
              technology accessible to businesses of all sizes.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be trusted by organizations worldwide,
              delivering cutting-edge solutions that drive growth and success.
              Our team of experts brings together deep industry knowledge and
              technical expertise to solve complex challenges and create lasting
              value.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
