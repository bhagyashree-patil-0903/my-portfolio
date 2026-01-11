"use client";

const certifications = [
  "Artificial Intelligence — Simplilearn Skillup",
  "Power BI for Beginners — Simplilearn Skillup",
  "MATLAB Fundamentals — MathWorks",
  "MATLAB: Data Processing and Visualization — Simplilearn Skillup",
  "CSS Certificate — HackerRank",
  "Python 101 for Data Science — IBM",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((c) => (
            <div
              key={c}
              className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition bg-white"
            >
              <p className="text-gray-800 font-semibold">✅ {c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
