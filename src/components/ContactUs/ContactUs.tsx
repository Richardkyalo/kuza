import React from "react";

const Contactus = () => {
  return (
    <section className="bg-gray-100 mt-16 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <p className="text-gray-700 mb-4">
              If you have any questions, feel free to contact us via phone or
              email. We’d love to hear from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26L9.42 21h5.16l-1.47-7.74L21 8H13V3H8v5H3z"
                  />
                </svg>
                <span className="text-gray-700">+254721 838205</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 5l5 5m-5 5l-5 5m0 0L5 14m5-5l-5 5"
                  />
                </svg>
                <span className="text-gray-700">kuzatalanta@gmail.com</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 10a7.5 7.5 0 01-7 7.5M3 10v2a5.5 5.5 0 005.5 5.5"
                  />
                </svg>
                <span className="text-gray-700">https://kuza-xi.vercel.app/</span>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold">Our Location</h4>
                <p className="text-gray-700">Box 211 90136, Nzeeka, Kambu</p>
              </div>

              {/* Google Map */}
              <div className="mt-4 relative" style={{ paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146382.6223740636!2d38.21762043550844!3d-2.5417080489908908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183ba5c82523eda9%3A0x6715f29d63c1f40f!2sYINDUNDU%20PRI!5e0!3m2!1sen!2ske!4v1726495159871!5m2!1sen!2ske"
                  style={{ border: 0, width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
