import React from "react";
import ContactForm from "../components/home/ContactForm";

const ContactPage = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">Get in touch with our team</p>
        </div>
      </div>

    <ContactForm></ContactForm>
    </div>
  );
};

export default ContactPage;
