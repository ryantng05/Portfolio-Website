// File: src/pages/Contact.jsx
import React from 'react';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-800 to-teal-400 p-8">
      <h1 className="text-5xl font-bold text-yellow-400 mb-8 ml-50">Contact me</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: intro and social icons */}
        <div>
          <p className="text-white mb-4 text-lg">
            Thank you for your interest in getting in touch!
          </p>
          <p className="text-white mb-6">
            I value open communication and welcome any inquiries, feedback, or
            collaboration opportunities. Please don’t hesitate to get in touch
            with me by filling out the contact form.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/ryantng05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-200 transition-colors"
            >
              <AiFillLinkedin size={64} />
            </a>
            <a
              href="mailto:ryant012015@gmail.com"
              className="text-yellow-400 hover:text-yellow-200 transition-colors"
            >
              <AiOutlineMail size={64} />
            </a>
          </div>
        </div>

        {/* Right side: contact form */}
        <form className="space-y-4 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-blue-900 placeholder-gray-400 rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-blue-900 placeholder-gray-400 rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 bg-blue-900 placeholder-gray-400 rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="w-full p-4 bg-blue-900 placeholder-gray-400 rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-blue-900 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
