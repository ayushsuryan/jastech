import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="bg-black text-white py-2">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium">
          Free IT consultation for new clients
          <a href="/contact" className="ml-2 underline hover:text-blue-100">
            Learn More →
          </a>
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
