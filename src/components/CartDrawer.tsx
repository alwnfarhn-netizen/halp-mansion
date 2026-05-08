'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-20 z-40 text-gray-100 mix-blend-difference hover:text-primary transition-colors"
      >
        <ShoppingBag size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#0a0a0a] z-50 border-l border-gray-800 flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-800">
                <h2 className="text-xl font-black text-gray-100 uppercase tracking-widest">Your Cart</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-100">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-center items-center text-gray-400">
                <ShoppingBag size={48} className="mb-4 opacity-50" />
                <p className="tracking-widest uppercase text-sm">Your cart is empty</p>
              </div>

              <div className="p-6 border-t border-gray-800 bg-[#050505]">
                <div className="flex justify-between text-gray-100 mb-6 font-bold">
                  <span>SUBTOTAL</span>
                  <span>IDR 0</span>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-xs text-gray-400 tracking-wider">PAYMENT METHODS:</p>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 border border-gray-700 rounded text-xs text-gray-300">QRIS</div>
                    <div className="px-3 py-1 border border-gray-700 rounded text-xs text-gray-300">Bank Transfer</div>
                  </div>
                </div>

                <button className="w-full py-4 bg-primary text-[#050505] font-bold uppercase tracking-wider text-sm hover:bg-primary-dark hover:text-gray-100 transition-colors">
                  Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
