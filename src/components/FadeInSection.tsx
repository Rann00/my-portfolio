import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Warisi semua props bawaan <motion.section>, jadi bisa pakai id, style, onClick, dll.
type FadeInSectionProps = React.ComponentProps<typeof motion.section> & {
  children: React.ReactNode;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className, ...rest }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // biar bisa in & out
  });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6 }}
      {...rest} // <- penting supaya id & props lain ikut terset
    >
      {children}
    </motion.section>
  );
};

export default FadeInSection;
