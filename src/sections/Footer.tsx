import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 py-8 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-medium mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} BarFolio. All rights reserved.
        </p>
        <div className="flex gap-6 items-center">
          <a
            href="#hero"
            className="relative group font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative group font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="relative group font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative group font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
          </a>
          <div className="flex gap-4 ml-4">
            <a
              href="https://www.linkedin.com/in/barata-puji/"
              target="_blank"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Rann00"
              target="_blank"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:baratapuji@gmail.com"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
