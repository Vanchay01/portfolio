import React from "react";

const Navbar = ({dark, setDark}) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log(dark)
  return (<>
    <nav className=" top-0 w-full bg-gray-400  text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-center space-x-6 py-4">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:scale-105 transition"
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
        <button
          onClick={() => scrollToSection("home")}
          className="px-4 py-2 bg-gray-800 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="px-4 py-2 bg-gray-800 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          About & Education
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="px-4 py-2 bg-gray-800 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("work")}
          className="px-4 py-2 bg-gray-800 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Work
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="px-4 py-2 bg-gray-800 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Contact Me
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
