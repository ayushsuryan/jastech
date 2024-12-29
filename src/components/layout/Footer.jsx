import React from "react";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "Home", href: "/" },
        { name: "Our Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Cloud Solutions", href: "/services#cloud" },
        { name: "Mobile Development", href: "/services#mobile" },
        { name: "Web Development", href: "/services#web" },
        { name: "AI & Machine Learning", href: "/services#ai" },
        { name: "DevOps", href: "/services#devops" },
        { name: "Cybersecurity", href: "/services#security" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR Compliance", href: "/gdpr" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/jastech",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/jastech",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="/src/assets/logo-inverse.png"
              alt="JAS Technologies"
              className="h-8 mb-4"
            />
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative technology solutions.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mt-6">
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </a>

              <a
                href="mailto:contact@jastechnologies.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                <span>contact@jastechnologies.com</span>
              </a>

              <a
                href="https://calendly.com/jastechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <CalendarIcon className="h-5 w-5 text-blue-400" />
                <span>Schedule a Meeting</span>
              </a>

              <div className="flex  space-x-3 pt-2">
                <IdentificationIcon className="h-5 w-5 text-blue-400" />
                <div className="text-gray-400">
                  <div>GSTIN: 29AABCU9603R1ZJ</div>
                  <div>CIN: U72200KA2019PTC123456</div>
                  <div>PAN: AABCU9603R</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} JAS Technologies. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
