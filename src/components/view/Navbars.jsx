import React, { useState } from "react";

export const Navbars = ({ dark, setDark }) => {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Meas Vanchay
        </h1>
        <div className="hidden md:flex text-gray-900 dark:text-slate-100 space-x-2">
          <button
            onClick={() => scrollToSection("home")}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-yellow-400 hover:text-gray-900 transition "
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
          >
            About & Education
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
          >
            Contact Me
          </button>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:scale-105 transition"
          >
            {dark ? "☀" : "🌙 "}
          </button>
        </div>

        <div className="flex justify-center items-center  space-x-2">
          <button
            onClick={() => setDark(!dark)}
            className=" md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:scale-105 transition"
          >
            {dark ? "☀" : "🌙 "}
          </button>
          {open ? (
            <button
              onClick={() => setOpen(!open)}
              className=" md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:scale-105 transition"
            >
              ss
            </button>
          ) : (
            <button
              onClick={() => setOpen(!open)}
              className=" md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:scale-105 transition"
            >
              kk
            </button>
          )}
        </div>
      </div>
      {open && (
        <div className="md:hidden text-gray-900 dark:text-slate-100 border-t">
          <div className="flex flex-col p-6 gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              About & Education
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
