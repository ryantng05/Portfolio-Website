// File: src/pages/Contact.jsx
import React, { useState, useRef } from 'react';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly via email.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-800 to-teal-400 p-8">
      <h1 className="text-5xl font-bold text-yellow-400 mb-8 ml-50 mb-25 mt-20">Contact me</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: intro and social icons */}
        <div>
          <p className="text-white mb-4 text-lg">
            Thank you for your interest in getting in touch!
          </p>
          <p className="text-white mb-6">
            I value open communication and welcome any inquiries, feedback, or
            collaboration opportunities. Please don't hesitate to get in touch
            with me by filling out the contact form.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/ryan-tang-ab55192b1"
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
        <form ref={form} onSubmit={handleSubmit} className="space-y-4 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-4 bg-blue-900 placeholder-gray-400 rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-4 bg-blue-900 placeholder-gray-400 rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full p-4 bg-blue-900 placeholder-gray-400 rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
          />

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="w-full p-4 bg-blue-900 placeholder-gray-400 rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
          />

          {status.message && (
            <div
              className={`p-4 rounded ${
                status.type === 'success'
                  ? 'bg-green-600 text-white'
                  : 'bg-red-600 text-white'
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-blue-900 transition-colors ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
