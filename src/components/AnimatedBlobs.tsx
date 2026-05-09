import { motion } from "motion/react";

export default function AnimatedBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-accent-soft blur-[140px] opacity-60 mix-blend-multiply"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 60, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-accent-warm blur-[160px] opacity-50 mix-blend-multiply"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[40%] w-[60vw] h-[60vw] rounded-full bg-accent-pink blur-[120px] opacity-40 mix-blend-multiply"
      />
    </div>
  );
}
