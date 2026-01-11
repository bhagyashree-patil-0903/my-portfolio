"use client";

import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-10">
          Internship Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">
              Backend Development Intern
            </h3>

            <p className="text-lg font-bold text-indigo-700 mt-2">
              L&T Technology Services
            </p>

            <p className="text-gray-700 font-semibold mt-2">
              Feb 2025 – May 2025 • Bengaluru, India
            </p>

            <p className="text-gray-600 mt-5 leading-relaxed">
              During my internship, I worked on backend development using Python
              and FastAPI. I developed secure REST APIs and worked with databases
              like PostgreSQL and MongoDB. I also implemented authentication and
              encryption features.
            </p>

            {/* Bullet points */}
            <ul className="mt-6 space-y-3 text-gray-700 font-medium list-disc list-inside">
              <li>Built REST APIs using FastAPI (Python).</li>
              <li>Worked with PostgreSQL and MongoDB integration.</li>
              <li>Implemented JWT authentication and AES encryption.</li>
              <li>Followed PEP8 coding standards and clean architecture.</li>
              <li>Used logging and environment variable handling.</li>
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "Python",
                "FastAPI",
                "REST APIs",
                "PostgreSQL",
                "MongoDB",
                "JWT",
                "AES",
                "PEP8",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT CERTIFICATE IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[360px] h-[460px] rounded-2xl overflow-hidden shadow-xl border-4 border-indigo-600">
              <Image
                src="/ly-certificate.png"
                alt="L&T Internship Certificate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
