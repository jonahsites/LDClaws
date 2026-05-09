import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Booking() {
  return (
    <section id="book" className="bg-[#D9D6D0] py-32 px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[8vw] md:text-[6vw] leading-[0.9] tracking-tighter"
          >
            Ready to <span className="text-accent italic font-childish normal-case">elevate</span> <br /> your expression?
          </motion.h2>
          
          <div className="mt-12 flex flex-wrap gap-6 items-center">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#D9D6D0] bg-primary/10 overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="avatar" 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              ))}
            </div>
            <p className="font-body text-sm font-medium">Joined by 150+ monthly clients</p>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between space-y-12">
          <div className="space-y-8">
            <BookingLink 
              title="View Schedule" 
              subtitle="May availability is now live in highlights."
              href="https://instagram.com" 
            />
            <BookingLink 
              title="Text to Book" 
              subtitle="Direct line for custom set inquiries."
              href="tel:2158695717" 
              extra="215-869-5717"
            />
            <BookingLink 
              title="Levittown, PA" 
              subtitle="Private studio sessions by appointment only."
              href="#" 
            />
          </div>
          
          <div className="pt-8 border-t border-primary/10">
            <p className="text-xs uppercase tracking-widest text-primary/60 mb-4 font-bold">Policy</p>
            <p className="text-sm font-medium">Deposits are required for all new sets. 24h cancellation notice strictly enforced.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingLink({ title, subtitle, href, extra }: { title: string, subtitle: string, href: string, extra?: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="group block"
    >
      <div className="flex items-center justify-between py-6 border-b border-primary/20 group-hover:border-accent transition-colors duration-300">
        <div>
          <h4 className="text-xl font-display group-hover:text-accent transition-colors">{title}</h4>
          <p className="text-xs text-primary/60 mt-1">{subtitle}</p>
          {extra && <p className="text-sm font-bold mt-2 text-accent">{extra}</p>}
        </div>
        <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </a>
  );
}
