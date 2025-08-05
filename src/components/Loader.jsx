import { motion } from "framer-motion";

const cursiveStyle = {
  fontFamily: "'Great Vibes', cursive",
  fontSize: "4rem",
  lineHeight: 1,
};

const Loader = () => (
  <div className="h-screen flex justify-center items-center bg-black text-white">
    <motion.div
      style={cursiveStyle}
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      Joel Henry
    </motion.div>
  </div>
);

export default Loader;
