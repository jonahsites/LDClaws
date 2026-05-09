import { motion } from "motion/react";

const PRODUCTS = [
  {
    id: 1,
    name: "Ceramic Minimalist",
    price: "$85",
    image: "https://images.unsplash.com/photo-1629190875141-944208d13264?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Chrome Fusion",
    price: "$110",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Architectural Gel",
    price: "$95",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Ethereal Blush",
    price: "$120",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Onyx Brutalism",
    price: "$105",
    image: "https://images.unsplash.com/photo-1632345034870-179a5957018c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Liquid Gold",
    price: "$130",
    image: "https://images.unsplash.com/photo-1610992015732-2449b0deec5e?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-transparent px-6 md:px-12 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-16">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden mb-6 bg-primary/5">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body font-bold text-sm tracking-[0.15em] group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-primary/60 text-xs mt-1 uppercase tracking-widest">{product.price}</p>
              </div>
              <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
