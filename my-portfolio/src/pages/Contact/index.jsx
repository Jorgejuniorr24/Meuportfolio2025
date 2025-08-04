import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B1120] p-8 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          Contact
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-center mb-10 text-lg">
          Fill out the form below so we can clarify your questions and get
          started on your project!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-16">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 p-4 bg-white dark:bg-gray-800 rounded-md 
                         border border-gray-300 dark:border-gray-700 
                         text-gray-800 dark:text-gray-200 
                         placeholder-gray-500 dark:placeholder-gray-400 
                         shadow-sm focus:outline-none 
                         focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 p-4 bg-white dark:bg-gray-800 rounded-md 
                         border border-gray-300 dark:border-gray-700 
                         text-gray-800 dark:text-gray-200 
                         placeholder-gray-500 dark:placeholder-gray-400 
                         shadow-sm focus:outline-none 
                         focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 bg-white dark:bg-gray-800 rounded-md 
                       border border-gray-300 dark:border-gray-700 
                       text-gray-800 dark:text-gray-200 
                       placeholder-gray-500 dark:placeholder-gray-400 
                       shadow-sm focus:outline-none 
                       focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 bg-white dark:bg-gray-800 rounded-md 
                       border border-gray-300 dark:border-gray-700 
                       text-gray-800 dark:text-gray-200 
                       placeholder-gray-500 dark:placeholder-gray-400 
                       shadow-sm focus:outline-none 
                       focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-4 bg-white dark:bg-gray-800 rounded-md 
                       border border-gray-300 dark:border-gray-700 
                       text-gray-800 dark:text-gray-200 
                       placeholder-gray-500 dark:placeholder-gray-400 
                       shadow-sm focus:outline-none 
                       focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 resize-none"
          />
          <button
            type="submit"
            className="w-full p-4 bg-blue-500 dark:bg-blue-600 text-white rounded-md 
                       font-semibold shadow hover:bg-blue-600 dark:hover:bg-blue-700 
                       transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex justify-center items-center space-x-16 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 dark:bg-gray-700 rounded-md flex items-center justify-center mx-auto mb-2 shadow">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-800 dark:text-gray-300 font-medium">
              Location
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Salvador - Bahia - Brasil
            </p>
          </div>

          <a
            href="mailto:jorge.juniortwo@hotmail.com"
            className="text-center hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <div className="w-12 h-12 bg-blue-500 dark:bg-gray-700 rounded-md flex items-center justify-center mx-auto mb-2 shadow">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-800 dark:text-gray-300 font-medium">
              Send an email
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm underline">
              jorge.juniortwo@hotmail.com
            </p>
          </a>

          <a
            href="https://wa.me/5571992896908"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center hover:text-green-600 dark:hover:text-green-400 transition"
          >
            <div className="w-12 h-12 bg-green-500 dark:bg-gray-700 rounded-md flex items-center justify-center mx-auto mb-2 shadow">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-800 dark:text-gray-300 font-medium">
              Call or WhatsApp
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm underline">
              (+55) 71 99289-6908
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
