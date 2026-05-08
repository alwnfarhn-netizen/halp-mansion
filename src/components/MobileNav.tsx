'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Collection', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Journal', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 text-gray-100 mix-blend-difference hover:text-primary transition-colors"
      >
        <Menu size={32} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease: 'easeOut' }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl md:text-6xl font-black text-gray-100 uppercase tracking-widest hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-12 text-sm text-gray-400 tracking-widest"
            >
              HALP MANSION &copy; {new Date().getFullYear()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
