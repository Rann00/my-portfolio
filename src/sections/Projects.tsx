import React from "react";
import FadeInSection from "../components/FadeInSection";
import ILS from "../assets/beranda.png";

const projects = [
  {
    title: "E-commerce Website Assignment",
    desc: "Modern landing page for a startup company using React + Tailwind.",
    image: "https://via.placeholder.com/600x400",
    demo: "null",
    code: "null",
  },
  {
    title: "Inisiatif Lampung Sehat Web",
    desc: "Interactive dashboard for an online store with real-time data.",
    image: ILS,
    demo: "null",
    code: "null",
  },
  {
    title: "Secret Project - ContactOnly",
    desc: "Personal project demonstrating skills and expertise.",
    image: "https://via.placeholder.com/600x400",
    demo: "null",
    code: "null",
  },
];

const Projects: React.FC = () => {
  return (
    <FadeInSection id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here are some of the projects I have worked on.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.desc}</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href={project.demo}
                    className={`px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300${
                      project.demo === "null"
                        ? " opacity-50 pointer-events-none cursor-not-allowed"
                        : ""
                    }`}
                    tabIndex={project.demo === "null" ? -1 : undefined}
                    aria-disabled={project.demo === "null" ? "true" : undefined}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className={`px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300${
                      project.code === "null"
                        ? " opacity-50 pointer-events-none cursor-not-allowed"
                        : ""
                    }`}
                    tabIndex={project.code === "null" ? -1 : undefined}
                    aria-disabled={project.code === "null" ? "true" : undefined}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

export default Projects;
