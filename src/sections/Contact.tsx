import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import FadeInSection from "../components/FadeInSection";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const text = `Hi Puji,%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.open(`https://wa.me/6289563690722?text=${text}`, "_blank");
  };

  return (
    <FadeInSection
      id="contact"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
          Contact Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
          Have a project or want to collaborate? Reach out via the form or contact info below.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              sendWhatsApp();
            }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg space-y-4 text-left transition-colors duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:ring focus:ring-indigo-300 dark:focus:ring-indigo-500 outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:ring focus:ring-indigo-300 dark:focus:ring-indigo-500 outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 transition-colors duration-300"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:ring focus:ring-indigo-300 dark:focus:ring-indigo-500 outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 transition-colors duration-300"
            ></textarea>
            <motion.button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl shadow-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message via WhatsApp
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            className="flex flex-col justify-center gap-8 text-gray-700 dark:text-gray-300 text-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <Mail className="text-indigo-600" size={22} /> baratapuji@gmail.com
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-indigo-600" size={22} /> 0895 6369 07227
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-600" size={22} /> Kotabumi, Lampung, Indonesia
            </div>
          </motion.div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Contact;
