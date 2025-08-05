import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-8 right-8 z-50 cursor-pointer"
      onClick={scrollToTop}
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 p-2 rounded-full shadow-lg text-3xl"
      >
        <FaArrowCircleUp />
      </motion.div>
    </motion.div>
  );
};

export default ScrollToTopButton;
