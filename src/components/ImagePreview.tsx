import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImagePreviewProps {
  src: string;
  alt: string;
  className?: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src, alt, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <motion.img
        src={src}
        alt={alt}
        className={`cursor-pointer rounded-xl shadow-lg border border-gray-200 
                   transition-transform duration-500 hover:scale-105 ${className}`}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
      />

      {/* Modal Preview */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={src}
              alt={alt}
              className="max-w-3xl max-h-[90vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // biar ga close pas klik gambar
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImagePreview;
