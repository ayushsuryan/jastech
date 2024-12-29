import React, { useState, useEffect, useRef } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);
  const cardRef = useRef(null); // Ref to track individual card width (including padding)

  const avatars = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
  ];

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      position: "CTO",
      company: "Global Retail Corp",
      avatar: avatars[0],
      content:
        "The cloud migration project revolutionized our infrastructure. We achieved a 40% reduction in operational costs and 99.9% uptime.",
      rating: 5,
      project: "Enterprise Cloud Migration",
      results: ["40% cost reduction", "99.9% uptime", "Improved scalability"],
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "CEO",
      company: "FinTech Solutions",
      avatar: avatars[1],
      content:
        "The AI-powered analytics platform transformed our data processing capabilities. We're now able to process data 85% faster.",
      rating: 5,
      project: "AI Analytics Platform",
      results: [
        "85% faster processing",
        "Automated reporting",
        "Real-time insights",
      ],
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Director of Operations",
      company: "Healthcare Provider",
      avatar: avatars[2],
      content:
        "The security infrastructure upgrade was critical for our HIPAA compliance. Zero security breaches since implementation.",
      rating: 5,
      project: "Security Infrastructure",
      results: ["Zero breaches", "HIPAA compliance", "Enhanced protection"],
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      position: "Digital Transformation Lead",
      company: "E-commerce Giant",
      avatar: avatars[3],
      content:
        "The custom e-commerce solution increased our conversion rates by 45%. The AI recommendations made a significant impact.",
      rating: 5,
      project: "E-commerce Platform Optimization",
      results: [
        "45% conversion increase",
        "AI recommendations",
        "Streamlined checkout",
      ],
    },
    {
      id: 5,
      name: "David Wilson",
      position: "Head of Technology",
      company: "Manufacturing Co",
      avatar: avatars[4],
      content:
        "The IoT implementation transformed our manufacturing processes. Real-time monitoring reduced downtime by 60%.",
      rating: 5,
      project: "IoT Manufacturing Solution",
      results: [
        "60% reduced downtime",
        "Real-time monitoring",
        "Predictive maintenance",
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 2);
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Recalculate the width of each card when the component is mounted
    if (cardRef.current) {
      setVisibleCards(window.innerWidth < 768 ? 1 : 2);
    }
  }, [cardRef]);

  const nextSlide = () => {
    if (cardRef.current) {
      if (currentIndex < reviews.length - visibleCards) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const prevSlide = () => {
    if (cardRef.current) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  return (
    <section className="pb-10 bg-gray-50 overflow-hidden">
      <div className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
           Testimonials
          </h1>
          <p className="text-xl text-blue-100">
            Success stories from organizations we've helped transform
          </p>
        </div>
      </div>
      <div className="container pt-10 mx-auto px-4">
        <div className="relative max-w-[1200px] mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (cardRef.current?.offsetWidth + 24) // Add padding (assumed 24px, adjust if needed)
                }px)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  ref={cardRef}
                  key={review.id}
                  className="w-full md:w-1/2 flex-shrink-0"
                >
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg h-full flex flex-col">
                    {/* Project Name */}
                    <div className="text-blue-600 font-semibold mb-4">
                      {review.project}
                    </div>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Content */}
                    <blockquote className="text-gray-700 mb-6 flex-grow">
                      "{review.content}"
                    </blockquote>

                    {/* Key Results */}
                    <div className="mb-6">
                      <div className="font-semibold mb-2">Key Results:</div>
                      <div className="flex flex-wrap gap-2">
                        {review.results.map((result, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Reviewer Info */}
                    <div className="flex items-center mt-auto pt-6 border-t border-gray-100">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-gray-600 text-sm">
                          {review.position} at {review.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8
                       bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all
                       focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </button>
          )}

          {currentIndex < reviews.length - visibleCards && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8
                       bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all
                       focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(Math.ceil(reviews.length - visibleCards + 1))].map(
            (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
