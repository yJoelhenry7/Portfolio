import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      aria-label="Scroll to top"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      style={{
        pointerEvents: isVisible ? "auto" : "none",
        background: "linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)",
      }}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-lg text-white shadow-xl border border-white/20"
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default ScrollToTopButton;
