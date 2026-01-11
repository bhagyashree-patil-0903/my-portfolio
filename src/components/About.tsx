"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT PHOTO */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-indigo-600">
              <Image
                src="/profile.png"
                alt="Bhagyashree"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Bhagyashree C Patil
            </h3>

            <p className="text-lg font-semibold text-indigo-600 mt-2">
              M.Tech in Artificial Intelligence
            </p>

            <p className="text-gray-600 mt-5 leading-relaxed">
              I am a passionate AI student who enjoys learning and building useful
              projects. I like working on backend systems and AI-based solutions
              that can solve real-world problems.
            </p>

            {/* INFO LIST (Degree first, Email second, Location last) */}
            <div className="mt-6 space-y-3 text-gray-800 font-medium">
              <p>
                🎓 Degree:{" "}
                <span className="text-gray-600 font-semibold">
                  M.Tech (Artificial Intelligence)
                </span>
              </p>

              <p>
                📧 Email:{" "}
                <span className="text-gray-600 font-semibold">
                  bhagyashreepatil0903@gmail.com
                </span>
              </p>

              <p>
                📍 Location:{" "}
                <span className="text-gray-600 font-semibold">
                  Bengaluru, Karnataka, India
                </span>
              </p>
            </div>

            {/* DOWNLOAD RESUME */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-block bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
