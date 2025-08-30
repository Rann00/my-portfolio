import { useState } from "react";
import { Home, User, FolderKanban, Mail, Sun, Moon } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <h1 className="text-xl font-bold text-indigo-600">BarFolio</h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-100 font-medium items-center">
          <li>
            <a href="#hero" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Home size={18} /> Home
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <User size={18} /> About
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <FolderKanban size={18} /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Mail size={18} /> Contact
            </a>
          </li>
          {/* Dark/Light Toggle */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-100 rounded transition-all duration-300 
              ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-100 rounded my-1 transition-all duration-300 
              ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-100 rounded transition-all duration-300 
              ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg overflow-hidden transition-all duration-300 ease-in-out 
          ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 dark:text-gray-100 font-medium">
          <li>
            <a href="#hero" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Home size={18} /> Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <User size={18} /> About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <FolderKanban size={18} /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Mail size={18} /> Contact
            </a>
          </li>
          {/* Dark/Light Toggle */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
