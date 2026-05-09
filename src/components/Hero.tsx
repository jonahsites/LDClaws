import { motion } from "motion/react";
import InteractiveButton from "./InteractiveButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1440px] mx-auto w-full"
      >
        <div className="font-childish text-2xl md:text-3xl mb-4 ml-8 md:ml-12 text-accent rotate-[-2deg]">
          nail artist ⭒
        </div>

        <h1 className="text-[18vw] md:text-[14vw] leading-[0.75] mb-8 font-display">
          Mya<br />
          <motion.span 
            initial={{ x: 0 }}
            animate={{ x: "15vw" }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="block text-accent font-childish normal-case italic"
          >
            Nicole
          </motion.span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mt-12">
          <p className="max-w-[320px] text-lg font-body font-medium leading-relaxed text-primary/80">
            Specializing in artistic aesthetics and premium nail care. Book your seasonal slot now.
          </p>
          
          <div className="flex flex-col gap-6">
            <InteractiveButton>
              Secure Your Set
            </InteractiveButton>
            <a href="#portfolio" className="group flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm transition-all hover:gap-4">
              View Collection
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
