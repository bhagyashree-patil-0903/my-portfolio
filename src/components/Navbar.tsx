"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-700">Portfolio</h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-semibold">
          <li><a href="#home" className="hover:text-indigo-700">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-700">About</a></li>
          <li><a href="#qualifications" className="hover:text-indigo-700">Qualifications</a></li>
          <li><a href="#skills" className="hover:text-indigo-700">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-700">Projects</a></li>
          <li><a href="#experience" className="hover:text-indigo-700">Experience</a></li>
          <li><a href="#publications" className="hover:text-indigo-700">Publications</a></li>
          <li><a href="#certifications" className="hover:text-indigo-700">Certifications</a></li>
          <li><a href="#contact" className="hover:text-indigo-700">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
