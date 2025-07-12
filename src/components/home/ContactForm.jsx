import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("zBgX4x5MJaj_61zaB");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      // Create a loading toast that we can dismiss later
      const loadingToast = toast.loading("Sending your message...");

      try {
        const result = await emailjs.send(
          "service_m1nwtjy",
          "template_hvc1fzj",
          {
            from_name: formData.name,
            reply_to: formData.email,
            phone_number: formData.phone || "Not provided",
            company: formData.company || "Not provided",
            message: formData.message,
            to_name: "JAS Tech Team",
          }
        );

        if (result.status === 200) {
          // Dismiss loading toast and show success
          toast.dismiss(loadingToast);
          toast.success("Message sent successfully!", {
            duration: 5000,
            style: {
              background: "#10B981",
              color: "#fff",
            },
          });

          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
          });
        }
      } catch (error) {
        // Dismiss loading toast and show error
        toast.dismiss(loadingToast);
        toast.error("Failed to send message.", {
          duration: 5000,
          style: {
            background: "#EF4444",
            color: "#fff",
          },
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
      toast.error("Please fill in all required fields correctly.", {
        duration: 5000,
        style: {
          background: "#EF4444",
          color: "#fff",
        },
      });
    }
  };

  return (
    <section className=" bg-white">
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
          loading: {
            style: {
              background: "#3B82F6",
              color: "#fff",
            },
          },
        }}
      />
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question or want to learn more about our services? Fill
                out the form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mt-1 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 7898119761</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mt-1 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:contact@jastechnologies.com"
                      className="text-gray-600"
                    >
                      contact@jastechnologies.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {errors.submit && (
                  <div className="text-red-500 text-sm">{errors.submit}</div>
                )}

                {submitSuccess && (
                  <div className="text-green-500 text-sm">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary text-white py-4 px-4 rounded-md  transition-colors ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
