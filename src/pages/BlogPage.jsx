import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const blogData = [
  {
    id: 1,
    title: "NPM vs NPX: Understanding the Key Differences",
    excerpt:
      "Dive deep into the distinctions between npm and npx. Learn when to use each tool, their specific use cases, and how they complement each other in modern JavaScript development workflows.",
    category: "JavaScript Tools",
    author: "Sarah Mitchell",
    date: "2024-03-25",
    readTime: "6 min",
    image: "/images/blog/npm-npx.jpg",
    tags: ["npm", "npx", "JavaScript", "Node.js"],
  },
  {
    id: 2,
    title: "TypeScript 5.4: Essential New Features for Developers",
    excerpt:
      "Explore the latest features in TypeScript 5.4, including improved type inference, new utility types, and performance enhancements. Practical examples included.",
    category: "TypeScript",
    author: "James Lee",
    date: "2024-03-22",
    readTime: "8 min",
    image: "/images/blog/typescript.jpg",
    tags: ["TypeScript", "JavaScript", "Development"],
  },
  {
    id: 3,
    title: "Git Rebase vs Merge: Making the Right Choice",
    excerpt:
      "A practical guide to understanding when to use git rebase versus merge. Learn the implications of each approach and best practices for maintaining a clean git history.",
    category: "Version Control",
    author: "Alex Kumar",
    date: "2024-03-20",
    readTime: "7 min",
    image: "/images/blog/git-workflow.jpg",
    tags: ["Git", "DevOps", "Version Control"],
  },
  {
    id: 4,
    title: "Understanding package.json Scripts for Productivity",
    excerpt:
      "Master the art of npm scripts in package.json. From basic commands to complex automated workflows, learn how to boost your development productivity.",
    category: "JavaScript Tools",
    author: "Maria Garcia",
    date: "2024-03-18",
    readTime: "5 min",
    image: "/images/blog/package-json.jpg",
    tags: ["npm", "Node.js", "Development"],
  },
  {
    id: 5,
    title: "ESLint vs Prettier: Configuring the Perfect Setup",
    excerpt:
      "Learn how to effectively combine ESLint and Prettier in your development workflow. Best practices for configuration and resolving common conflicts.",
    category: "Development Tools",
    author: "Chris Wilson",
    date: "2024-03-15",
    readTime: "6 min",
    image: "/images/blog/eslint-prettier.jpg",
    tags: ["ESLint", "Prettier", "Code Quality"],
  },
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = ["All", ...new Set(blogData.map((post) => post.category))];

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Our Blog
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 md:mb-8 font-inter leading-relaxed px-2">
              Insights and updates from our team of experts
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 md:px-4 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-colors
                  ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Post Image */}
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 md:h-56 object-cover"
                />
              </Link>

              {/* Post Content */}
              <div className="p-4 md:p-6">
                {/* Category */}
                <span className="text-xs md:text-sm text-primary font-medium">
                  {post.category}
                </span>

                {/* Title */}
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-lg md:text-xl font-bold mt-2 mb-3 hover:text-primary transition-colors font-sora">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-sm md:text-base text-gray-600 mb-4 font-inter leading-relaxed">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs md:text-sm text-gray-500 gap-2">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4">
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
              className="px-3 md:px-4 py-2 md:py-3 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 md:px-4 py-2 md:py-3 border rounded-md hover:bg-gray-100 text-sm md:text-base
                  ${currentPage === index + 1 ? "bg-primary text-white" : ""}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 md:px-4 py-2 md:py-3 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
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
