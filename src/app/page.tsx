import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MobileNav />
      <CartDrawer />
      <HeroSection />
      <ProductGrid />
      
      {/* Footer Placeholder */}
      <footer className="w-full bg-[#050505] border-t border-gray-900 py-12 px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-widest uppercase">
        <p>HALP MANSION &copy; 2026</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-200 transition-colors">Instagram</a>
          <a href="#" className="hover:text-gray-200 transition-colors">Twitter</a>
        </div>
      </footer>
    </main>
  );
}
