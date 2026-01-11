"use client";

const primarySkills = [
  { name: "Python", level: 85 },
  { name: "FastAPI / REST APIs", level: 80 },
  { name: "SQL", level: 78 },
  { name: "PostgreSQL", level: 80 },
  { name: "MongoDB", level: 70 },
  { name: "Power BI", level: 65 },
  { name: "AI / ML Concepts", level: 70 },

];

const softSkills = ["Smart-work", "Problem Solving","leadership Qualities","Teamwork","Team Management","Project Management","Problem Solving","Decision Making"];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-3">
          Skills
        </h2>

        {/* Description (similar style, not copied) */}
        <p className="text-gray-600 text-lg max-w-3xl mb-12 leading-relaxed">
          <span className="font-bold text-gray-800">Technical Expertise:</span>{" "}
          Over my academic journey and projects, I have gained strong technical
          skills. My core toolkit includes:
        </p>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Primary Skills */}
          <div className="border rounded-2xl shadow-lg p-8 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Primary Skills
            </h3>

            <div className="space-y-5">
              {primarySkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between font-semibold text-sm text-gray-700 mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-indigo-600"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="border rounded-2xl shadow-lg p-8 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Soft Skills
            </h3>

            <div className="space-y-4">
              {softSkills.map((s) => (
                <div
                  key={s}
                  className="p-4 rounded-xl border bg-indigo-50 text-indigo-700 font-bold"
                >
                  ✅ {s}
                </div>
              ))}
            </div>

            {/* Extra small note */}
            <p className="text-gray-600 mt-6 leading-relaxed">
              I enjoy working in a team environment and I always try to learn
              from feedback and improve continuously.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
