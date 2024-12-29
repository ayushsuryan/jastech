// components/home/BlogSection.jsx not being used
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ClockIcon, UserIcon } from "@heroicons/react/24/outline";

const BlogSection = () => {
  // Sample blog data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: "10 Cloud Computing Trends to Watch in 2024",
      excerpt:
        "Discover the latest trends in cloud computing that are shaping the future of enterprise IT infrastructure.",
      category: "Cloud Computing",
      author: "John Smith",
      date: "2024-03-15",
      readTime: "5 min",
      image: "/src/assets/blog/cloud-computing.jpg",
      slug: "cloud-computing-trends-2024",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Cybersecurity Best Practices",
      excerpt:
        "Learn essential cybersecurity practices to protect your business from emerging digital threats.",
      category: "Cybersecurity",
      author: "Sarah Johnson",
      date: "2024-03-12",
      readTime: "8 min",
      image: "/src/assets/blog/cybersecurity.jpg",
      slug: "cybersecurity-best-practices",
    },
    {
      id: 3,
      title: "Implementing AI in Business Operations",
      excerpt:
        "A comprehensive guide on integrating artificial intelligence into your business processes.",
      category: "Artificial Intelligence",
      author: "Mike Anderson",
      date: "2024-03-10",
      readTime: "6 min",
      image: "/src/assets/blog/ai-business.jpg",
      slug: "ai-business-implementation",
    },
  ];

  // Categories for filtering
  const categories = [
    "All",
    "Cloud Computing",
    "Cybersecurity",
    "Artificial Intelligence",
    "Digital Transformation",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Insights & News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest technology trends, insights, and best
            practices in the IT industry.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Post Image */}
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </Link>

              {/* Post Content */}
              <div className="p-6">
                {/* Category */}
                <span className="text-sm text-blue-600 font-medium">
                  {post.category}
                </span>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold mt-2 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                {/* Meta Information */}
                <div className="flex items-center text-sm text-gray-500">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>{post.readTime} read</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-secondary transition-colors"
          >
            View All Posts
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

export default BlogSection;
