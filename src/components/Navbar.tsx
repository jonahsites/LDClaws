import { Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-12 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
          <img 
            src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/474231328_1991424857998699_7424419528790916906_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43ODUuYzIifQ&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2gEjSIgA5A01K_tq2Pf-po9MZ1myQHk6GqfOtmwiTTFk3IN_VldwUHvX4Sez-KKylkFg9xPdLonQpfVTTebjotD-&_nc_ohc=z-jME8NFixkQ7kNvwEDE7ap&_nc_gid=dE5lDvPNCEtnniuauwJe8g&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af7L6Ha-BeNcOjqrWI66-yXHEe3EVArU64-qgMvurq16gg&oe=6A05453B&_nc_sid=22de04" 
            alt="MyaNicole Nails Logo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <a href="#" className="font-display font-bold text-2xl uppercase mix-blend-difference text-primary leading-[0.8]">
          MyaNicole <br /> <span className="text-xl font-childish tracking-normal normal-case text-accent-soft block mt-1">Nails</span>
        </a>
      </div>
      
      <div className="hidden md:flex items-center gap-12 pointer-events-auto">
        {["Services", "Portfolio", "Book", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-body font-medium text-[14px] uppercase tracking-[0.1em] hover:text-accent transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6 pointer-events-auto">
        <button className="hover:scale-110 transition-transform">
          <Search className="w-5 h-5 text-primary" />
        </button>
        <button className="relative hover:scale-110 transition-transform">
          <ShoppingBag className="w-5 h-5 text-primary" />
          <span className="absolute -top-1 -right-1 bg-accent text-white text-[8px] w-3 h-3 flex items-center justify-center rounded-full">
            0
          </span>
        </button>
      </div>
    </nav>
  );
}
