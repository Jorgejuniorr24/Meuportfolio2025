import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-700 mb-8 text-center">Contact</h1>
        
        {/* Description */}
        <p className="text-gray-700 text-center mb-12 text-lg leading-relaxed">
          Fill out the form below so we can clarify your questions and get started on your project!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-16">
          {/* First Name and Last Name Row */}
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 p-4 bg-gray-200 border-none rounded text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 p-4 bg-gray-200 border-none rounded text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 bg-gray-200 border-none rounded text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 bg-gray-200 border-none rounded text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-4 bg-gray-200 border-none rounded text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 bg-gray-400 text-white rounded font-medium hover:bg-gray-500 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="flex justify-center items-center space-x-16 mb-16">
          {/* Location */}
          <div className="text-center">
            <div className="w-12 h-12 bg-black rounded flex items-center justify-center mx-auto mb-2">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-700 font-medium">Location</p>
            <p className="text-gray-700 text-sm">Salvador - Bahia - Brasil</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="w-12 h-12 bg-black rounded flex items-center justify-center mx-auto mb-2">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-700 font-medium">Send an email</p>
            <p className="text-gray-700 text-sm">jorge.juniortwo@hotmail.com</p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-12 h-12 bg-black rounded flex items-center justify-center mx-auto mb-2">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-700 font-medium">Call or WhatsApp</p>
            <p className="text-gray-700 text-sm">(+55) 71 992896908</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm">
         
        </p>
      </div>
    </div>
  );
}