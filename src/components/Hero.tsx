"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="w-full bg-white py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

        {/* LEFT SIDE CONTENT */}
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-4">
            Hi, I&apos;m
          </p>

          <h1 className="text-6xl font-extrabold text-indigo-700 leading-tight">
            Bhagyashree C <br /> Patil
          </h1>

          <h2 className="text-3xl mt-6 font-bold text-gray-800">
            M.Tech in{" "}
            <span className="text-indigo-700 underline underline-offset-8">
              Artificial Intelligence
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            I build AI and backend projects and love learning new technologies.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-6">
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SIDE PHOTO */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[340px] h-[420px] border-[6px] border-indigo-600 shadow-xl overflow-hidden rounded-2xl">
            <Image
              src="/profile.png"
              alt="Profile"
              fill 
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
