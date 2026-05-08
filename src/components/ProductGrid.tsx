'use client';

import { motion } from 'framer-motion';

const products = [
  { id: 1, title: 'ONYX HOODIE', price: 'IDR 850.000', span: 'col-span-2 md:col-span-2 row-span-2', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'VOID TEE', price: 'IDR 450.000', span: 'col-span-1 md:col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'BASEMENT CARGO', price: 'IDR 1.200.000', span: 'col-span-1 md:col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'SILENT BEANIE', price: 'IDR 250.000', span: 'col-span-1 md:col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'ECHO JACKET', price: 'IDR 1.850.000', span: 'col-span-2 md:col-span-2 row-span-2', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop' },
];

export default function ProductGrid() {
  return (
    <section className="w-full bg-background py-24 px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-100 uppercase tracking-widest">
            Collection <br/> 001
          </h2>
          <button className="text-xs text-gray-400 uppercase tracking-widest hover:text-gray-100 transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {products.map((product) => (
            <div key={product.id} className={`group relative flex flex-col ${product.span} overflow-hidden`}>
              <div className="relative w-full h-full overflow-hidden bg-[#111]">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-gray-100 font-bold uppercase tracking-widest text-sm md:text-base">{product.title}</h3>
                <p className="text-gray-400 text-xs mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
