"use client";

import Image from "next/image";

const projects = [
  {
    title: "Arduino Soil Moisture Sensor Kit",
    role: "Team Member — Tester",
    desc: "Arduino-based kit using Embedded C to monitor real-time soil moisture for efficient irrigation.",
    tech: ["Arduino", "Embedded C", "Sensors"],
    img: "/soil.png",
  },
  {
    title: "Raspberry Pi Water Testing Kit",
    role: "Team Leader",
    desc: "Raspberry Pi + Python system to monitor pH, temperature and turbidity in real time.",
    tech: ["Raspberry Pi", "Python", "Sensors"],
    img: "/water.png",
  },
  {
    title: "Virtual Banker at Your Fingertips",
    role: "Team Member",
    desc: "Chatbot-based virtual banking support system for seamless user assistance.",
    tech: ["Chatbot", "NLP", "Python"],
    img: "/banker.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden bg-white"
            >
              {/* IMAGE */}
              <div className="relative w-full h-56">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                <p className="text-sm text-indigo-600 font-semibold mt-1">
                  {p.role}
                </p>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {p.desc}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
