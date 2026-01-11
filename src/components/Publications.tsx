"use client";

import Image from "next/image";

export default function Publications() {
  return (
    <section id="publications" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-10">
          Publications
        </h2>

        <div className="space-y-12">
          {/* Publication 1 (NO certificate column) */}
          <div className="border rounded-2xl shadow-lg p-8 bg-white">
            <h3 className="text-2xl font-extrabold text-gray-900">
              Green Cloud Computing in Cloud Computing
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              This paper is about reducing energy usage in cloud computing.
              It explains simple methods to improve performance and reduce
              carbon footprint using sustainable cloud practices.
            </p>

           
          </div>

          {/* Publication 2 (WITH certificate) */}
          <div className="grid md:grid-cols-2 gap-10 items-center border rounded-2xl shadow-lg p-8 bg-white">
            {/* LEFT DESCRIPTION */}
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Virtual Banker at Your Fingertips using Chatbot Systems
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                This research is about using chatbots in banking. It helps users
                get quick support like account queries and basic banking help in
                real time.
              </p>

              <p className="mt-4 font-semibold text-indigo-700">
                Certificate: <span className="text-gray-700">Available</span>
              </p>
            </div>

            {/* RIGHT CERTIFICATE */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-[860px] h-[360px] rounded-2xl overflow-hidden shadow-xl border-4 border-indigo-600">
                <Image
                  src="/virtual-banker-certificate.png"
                  alt="Virtual Banker Certificate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
