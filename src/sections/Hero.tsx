import React from "react";
import FadeInSection from "../components/FadeInSection";
import profileImg from "../assets/puji.jpg";
import viewCV from "../assets/CV_puji_barata.pdf";
import ImagePreview from "../components/ImagePreview";


const Hero: React.FC = () => {
  return (
    <FadeInSection
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center px-6
                 bg-gradient-to-b from-indigo-50 via-white to-indigo-100
                 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
                 transition-colors duration-500 overflow-hidden relative"
    >
      {/* Animated background circles */}
      <div className="absolute -z-10 w-full h-full top-0 left-0 animate-pulse-slow bg-gradient-radial from-indigo-100 via-indigo-50 to-transparent dark:from-gray-700 dark:via-gray-900 opacity-20"></div>

      <ImagePreview
        src={profileImg}
        alt="My Profile"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-indigo-600 hover:scale-110 transform transition-all duration-500"
      />

      {/* Glitch header */}
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-800 dark:text-gray-100 relative glitch" data-text="Hi, I’m Puji Barata">
        Hi, I’m <span className="text-indigo-600">Puji Barata</span>
      </h2>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-6 tracking-wide glitch-subtext" data-text="Undergraduated | Frontend/Backend Dev | UI/UX Designer | Programmer">
        Undergraduated | Frontend/Backend Dev | UI/UX Designer Web/Android Mobile Enthusiast | Programmer
      </p>

      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <a
          href={viewCV}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 hover:scale-110 transform transition-all duration-300"
        >
          View CV
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 dark:text-indigo-400 hover:scale-110 transform transition-all duration-300"
        >
          Contact Me
        </a>
        <a
          href="https://www.linkedin.com/in/barata-puji/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 dark:text-indigo-400 hover:scale-110 transform transition-all duration-300"
        >
          My Linkedin
        </a>
      </div>
    </FadeInSection>
  );
};

export default Hero;
