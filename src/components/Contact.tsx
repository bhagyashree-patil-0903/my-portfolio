"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("✅ Message sent! I will contact you soon.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-10">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Let’s Connect
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              If you want to contact me for internships, job opportunities, or
              project collaborations, feel free to message me anytime.
            </p>

            <div className="mt-8 space-y-4 text-gray-800 font-semibold">
              <p>📧 Email: <span className="text-gray-600">bhagyashreepatil0903@gmail.com</span></p>
              <p>📞 Phone: <span className="text-gray-600">7676428044</span></p>
              <p>📍 Location: <span className="text-gray-600">Bengaluru, Karnataka, India</span></p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="mailto:bhagyashreepatil0903@gmail.com"
                className="bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
              >
                Email Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="border-2 border-indigo-600 text-indigo-600 px-7 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition"
              >
                Download Resume
              </a>

              <a
                href="https://linkedin.com/in/bhagyashree-c-patil"
                target="_blank"
                className="border-2 border-gray-300 text-gray-800 px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="border rounded-2xl shadow-lg p-8 bg-white">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </form>

            {status && (
              <p className="text-green-600 font-semibold mt-5">{status}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
