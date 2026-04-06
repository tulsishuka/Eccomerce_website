import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-20">
      {/* Breadcrumb */}
      <nav className="mb-10 text-sm">
        <span className="text-gray-400">Home</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">Contact</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        
        {/* Left Column: Contact Info Card */}
        <div className="rounded-md bg-white p-8 shadow-[0_0_15px_rgba(0,0,0,0.05)] lg:col-span-1">
          {/* Call To Us Section */}
          <div className="mb-8 border-b border-gray-200 pb-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DB4444]">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-lg font-bold">Call To Us</h2>
            </div>
            <div className="space-y-3 text-sm text-black">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
          </div>

          {/* Email To Us Section */}
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DB4444]">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-lg font-bold">Write To Us</h2>
            </div>
            <div className="space-y-3 text-sm text-black">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="rounded-md bg-white p-8 shadow-[0_0_15px_rgba(0,0,0,0.05)] lg:col-span-2">
          <form>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded bg-[#F5F5F5] px-4 py-3 text-sm focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded bg-[#F5F5F5] px-4 py-3 text-sm focus:outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full rounded bg-[#F5F5F5] px-4 py-3 text-sm focus:outline-none"
                required
              />
            </div>
            
            <div className="mt-4">
              <textarea
                placeholder="Your Message"
                rows="8"
                className="w-full rounded bg-[#F5F5F5] px-4 py-3 text-sm focus:outline-none resize-none"
              ></textarea>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="rounded bg-[#DB4444] px-10 py-4 text-white font-medium hover:bg-[#c13a3a] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;