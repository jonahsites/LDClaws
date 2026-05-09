import { motion } from "motion/react";

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-accent-soft/10 blur-[100px] pointer-events-none" />
      
      <div className="relative border-y border-primary/10 py-32">
        <div className="flex flex-col gap-0">
          <motion.h2 
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] font-display whitespace-nowrap"
          >
            Architectural <span className="text-outline font-brutalist">Builder</span>
          </motion.h2>
          
          <motion.div 
            initial={{ x: "100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-end mt-[-2vw]"
          >
            <h2 className="text-[12vw] tracking-tighter leading-[0.75] text-accent font-childish normal-case">
              Bespoke Design
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 mt-32">
        <div className="space-y-12">
          <ServiceItem 
            number="01" 
            title="The Structure Set" 
            description="Our signature builder gel application focusing on apex placement and structural integrity for long-wear performance."
          />
          <ServiceItem 
            number="02" 
            title="Custom Handpaint" 
            description="From minimalist lines to complex abstract masterpieces. Every set is a unique canvas of expression."
          />
        </div>
        <div className="space-y-12 md:mt-24">
          <ServiceItem 
            number="03" 
            title="Sculpted Extensions" 
            description="Achieving perfect shapes through paper forms. No tips, just pure sculpted architecture tailored to your beds."
          />
          <ServiceItem 
            number="04" 
            title="Maintenance & Care" 
            description="Dedicated removal and health sessions to ensure your natural nails remain pristine between artistic cycles."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group border-l border-primary/20 pl-8 pt-4 pb-8 hover:border-accent transition-colors duration-500"
    >
      <span className="font-display text-4xl leading-none opacity-20 group-hover:opacity-100 group-hover:text-accent transition-all duration-500">{number}</span>
      <h3 className="text-2xl mt-4 mb-4">{title}</h3>
      <p className="text-primary/70 leading-relaxed font-body max-w-md">{description}</p>
    </motion.div>
  );
}
