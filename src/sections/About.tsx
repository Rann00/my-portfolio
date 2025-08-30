import React, { useState } from "react";
import { Code, Palette, Laptop, GitBranch, Layers, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../components/FadeInSection";

type SkillItem = {
  title: string;
  icon: React.ReactNode;
  description: string;
  subSkills: string[];
};

const skills: SkillItem[] = [
  {
    title: "Clean Code",
    icon: <Code size={40} className="mx-auto mb-4 text-indigo-600" />,
    description: "Writing clean, structured, and maintainable code.",
    subSkills: ["TypeScript", "JavaScript", "TSX", "PHP"],
  },
  {
    title: "UI/UX Design",
    icon: <Palette size={40} className="mx-auto mb-4 text-indigo-600" />,
    description: "Designing modern interfaces with a user-friendly experience.",
    subSkills: ["Figma", "Canva", "Adobe XD"],
  },
  {
    title: "Responsive Design",
    icon: <Laptop size={40} className="mx-auto mb-4 text-indigo-600" />,
    description: "Ensuring websites look great on all devices, from mobile to desktop.",
    subSkills: ["Bootstrap", "TailwindCSS", "Flexbox", "Grid"],
  },
  {
    title: "Frameworks & Backend",
    icon: <Layers size={40} className="mx-auto mb-4 text-indigo-600" />,
    description: "Proficient in modern frontend and backend frameworks.",
    subSkills: ["React", "Laravel", "Next.js"],
  },
  {
    title: "CI/CD & Collaboration",
    icon: <GitBranch size={40} className="mx-auto mb-4 text-indigo-600" />,
    description: "Utilizing modern tools for efficient workflow and team collaboration.",
    subSkills: ["GitHub Actions", "CI/CD Pipelines", "Docker"],
  },
  {
    title: "Databases & Storage",
    icon: <Database size={40} className="mx-auto mb-4 text-indigo-600" />, // Bisa ganti icon lain misal Database icon
    description: "Managing and interacting with databases and storage solutions.",
    subSkills: ["MySQL", "PostgreSQL", "Firebase", "JSON"],
  },
];

// Warna subskills dengan subtle gradient untuk elegan
const colors = [
  "bg-gradient-to-r from-red-100 to-red-200 text-red-800 dark:from-red-800 dark:to-red-700 dark:text-red-100",
  "bg-gradient-to-r from-green-100 to-green-200 text-green-800 dark:from-green-800 dark:to-green-700 dark:text-green-100",
  "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:from-blue-800 dark:to-blue-700 dark:text-blue-100",
  "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 dark:from-yellow-800 dark:to-yellow-700 dark:text-yellow-100",
  "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 dark:from-purple-800 dark:to-purple-700 dark:text-purple-100",
  "bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 dark:from-pink-800 dark:to-pink-700 dark:text-pink-100",
  "bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 dark:from-teal-800 dark:to-teal-700 dark:text-teal-100",
  "bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 dark:from-indigo-800 dark:to-indigo-700 dark:text-indigo-100",
];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const About: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSkill = (index: number) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <FadeInSection id="about" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-700">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed text-lg md:text-xl">
          I am an undergraduate student at <span className="font-semibold">UMKO</span>, majoring in Information Systems (STI). I specialize in frontend & backend development as well as UI/UX design. I create modern, interactive, and responsive websites using <span className="font-medium">React</span>, <span className="font-medium">TypeScript</span>, <span className="font-medium">Tailwind, CI 4, HTML</span>, while crafting intuitive interfaces with <span className="font-medium">Figma</span>. Passionate about IT, I’m open to freelance projects and collaborations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-3xl shadow-lg bg-white dark:bg-gray-800 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl transition-transform duration-500"
              onClick={() => toggleSkill(index)}
              whileHover={{ scale: 1.03 }}
              layout
            >
              <div className="flex flex-col items-center">
                {skill.icon}
                <h3 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{skill.description}</p>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="mt-4 flex flex-wrap gap-2 justify-center"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {skill.subSkills.map((sub, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className={`px-4 py-1 rounded-full text-xs font-medium shadow-sm ${getRandomColor()} hover:scale-110 transform transition-transform duration-300`}
                      >
                        {sub}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

export default About;
