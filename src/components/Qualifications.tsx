"use client";

const qualifications = [
  {
    year: "2025 – 2027",
    title: "M.Tech — Artificial Intelligence",
    score: "",
    institute: "Reva Academy for Corporate Excellence, Bangalore",
  },
  {
    year: "2021 – 2025",
    title: "B.Tech — Computer Science and Engineering",
    score: "CGPA: 7.56",
    institute: "Presidency University, Bangalore",
  },
  {
    year: "2021",
    title: "Pre-University",
    score: "75.17%",
    institute: "Guru Nanak Ind PU College, Bidar",
  },
  {
    year: "2019",
    title: "Secondary School",
    score: "85.2%",
    institute: "Guru Nanak Dev Public School, Bidar",
  },
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-10">
          Qualifications
        </h2>

        <div className="space-y-6">
          {qualifications.map((q) => (
            <div
              key={q.title}
              className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition bg-white"
            >
              <p className="text-indigo-600 font-bold text-sm">{q.year}</p>

              <h3 className="text-xl font-extrabold text-gray-900 mt-2">
                {q.title}
              </h3>

              {q.score && (
                <p className="text-gray-700 font-semibold mt-1">{q.score}</p>
              )}

              <p className="text-gray-600 mt-2">{q.institute}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
