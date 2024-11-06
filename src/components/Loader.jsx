import { motion } from "framer-motion";

const Loader = () => (
    <div style={{ height: "100vh" }} className="flex justify-center items-center text-white" >
    <motion.div 
    animate={
       {
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
       }
    }
    transition={{
        duration: 200,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    >
        Joel Henry
    </motion.div>
  </div>
);

export default Loader;
