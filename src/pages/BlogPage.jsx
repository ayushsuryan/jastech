// pages/BlogPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Sample blog data - in a real app, this would come from an API
const blogData = [
  {
    id: 1,
    title: "10 Cloud Computing Trends to Watch in 2024",
    excerpt:
      "Discover the latest trends in cloud computing that are shaping the future of enterprise IT infrastructure. From edge computing to serverless architectures, learn what's driving innovation.",
    category: "Cloud Computing",
    author: "John Smith",
    date: "2024-03-15",
    readTime: "5 min",
    image: "/images/blog/cloud-computing.jpg",
    tags: ["Cloud", "Technology", "Innovation"],
  },
  {
    id: 2,
    title: "The Ultimate Guide to Cybersecurity Best Practices",
    excerpt:
      "Learn essential cybersecurity practices to protect your business from emerging digital threats. A comprehensive guide to securing your digital assets.",
    category: "Cybersecurity",
    author: "Sarah Johnson",
    date: "2024-03-12",
    readTime: "8 min",
    image: "/images/blog/cybersecurity.jpg",
    tags: ["Security", "Cybersecurity", "Best Practices"],
  },
  {
    id: 3,
    title: "Implementing AI in Business Operations",
    excerpt:
      "A comprehensive guide on integrating artificial intelligence into your business processes. Learn how AI can transform your operations.",
    category: "Artificial Intelligence",
    author: "Mike Anderson",
    date: "2024-03-10",
    readTime: "6 min",
    image: "/images/blog/ai-business.jpg",
    tags: ["AI", "Business", "Digital Transformation"],
  },
  {
    id: 4,
    title: "5G Technology and Its Impact on IoT",
    excerpt:
      "Explore how 5G technology is revolutionizing the Internet of Things and creating new possibilities for connected devices.",
    category: "Technology",
    author: "Emily Chen",
    date: "2024-03-08",
    readTime: "7 min",
    image: "/images/blog/5g-iot.jpg",
    tags: ["5G", "IoT", "Technology"],
  },
  {
    id: 5,
    title: "The Rise of Edge Computing",
    excerpt:
      "Understanding edge computing and its growing importance in modern IT infrastructure. Learn about use cases and implementation strategies.",
    category: "Cloud Computing",
    author: "David Wilson",
    date: "2024-03-05",
    readTime: "6 min",
    image: "/images/blog/edge-computing.jpg",
    tags: ["Edge Computing", "Cloud", "Infrastructure"],
  },
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Get unique categories from blog data
  const categories = ["All", ...new Set(blogData.map((post) => post.category))];

  // Filter posts based on search term and category
  const filteredPosts = blogData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-xl text-blue-100">
            Insights and updates from our team of experts
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Post Image */}
              <Link to={`/blog/${post.id}`}>
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
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-xl font-bold mt-2 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 border rounded-md hover:bg-gray-100
                  ${currentPage === index + 1 ? "bg-blue-600 text-white" : ""}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
