// blog page and sections are not being used
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary py-20">
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
                  ${currentPage === index + 1 ? "bg-primar text-white" : ""}`}
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
