import { Instagram, Smartphone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-base py-24 px-6 md:px-12 overflow-hidden relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-display mb-8">MyaNicole<br /><span className="text-accent font-childish normal-case">Nails</span></h2>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com" />
              <SocialIcon icon={<Smartphone size={20} />} href="tel:2158695717" />
              <SocialIcon icon={<MapPin size={20} />} href="#" />
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <h5 className="text-accent uppercase text-[10px] tracking-[0.2em] font-bold mb-6">Explore</h5>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-accent-soft transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-accent-soft transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-accent-soft transition-colors">Gallery</a></li>
            <li><a href="#book" className="hover:text-accent-soft transition-colors">Booking</a></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h5 className="text-accent uppercase text-[10px] tracking-[0.2em] font-bold mb-6">Contact</h5>
          <ul className="space-y-4 text-sm font-medium">
            <li>215-869-5717</li>
            <li>Levittown, PA 19054</li>
            <li>mya@nicole.nails</li>
          </ul>
        </div>

        <div className="md:col-span-1 flex flex-col justify-end items-start md:items-end">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 mb-2">© {currentYear} MN Nials</p>
          <p className="text-xs opacity-60">Handcrafted in Pennsylvania</p>
        </div>
      </div>

      <div className="absolute -bottom-12 right-0 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[30vw] leading-none mb-0 font-display italic">2026</h1>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
    >
      {icon}
    </a>
  );
}
