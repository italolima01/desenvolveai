'use client';

// Navbar component - Desktop and Mobile menus
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-4 py-4">
      <div className="container mx-auto">
        <div className="glass-effect rounded-xl px-6 py-4 shadow-2xl border border-[rgba(59,130,246,0.35)]">
          <div className="flex justify-between items-center relative">
            <div className="w-1/4">
              <Link href="/" className="text-2xl font-bold text-white hover:text-[rgb(var(--color-primary))] transition-all duration-300 hover:scale-105 transform">
                DESENROLA.AI
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center items-center space-x-8 flex-1">
              <Link href="/" className="text-white hover:text-[rgb(var(--color-primary))] transition-all duration-300 hover:scale-105 transform">
                Home
              </Link>
              <Link href="#services" className="text-white hover:text-[rgb(var(--color-primary))] transition-all duration-300 hover:scale-105 transform">
                Serviços
              </Link>
              <Link href="/careers" className="text-white hover:text-[rgb(var(--color-primary))] transition-all duration-300 hover:scale-105 transform">
                Cases
              </Link>
              <Link href="#about" className="text-white hover:text-[rgb(var(--color-primary))] transition-all duration-300 hover:scale-105 transform">
                Sobre
              </Link>
            </div>
            
            {/* Contact Button */}
            <div className="hidden md:block w-1/4 text-right">
              <button className="btn-primary">
                Fale Conosco
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white absolute right-0 top-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Mobile Menu */}
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-16 left-0 right-0 glass-effect rounded-xl mt-2 md:hidden"
              >
                <div className="flex flex-col items-center py-4 space-y-4">
                  <Link href="/" className="text-white hover:text-[rgb(var(--color-secondary))] transition-all duration-300 hover:scale-105 transform">
                    Home
                  </Link>
                  <Link href="#services" className="text-white hover:text-[rgb(var(--color-secondary))] transition-all duration-300 hover:scale-105 transform">
                    Serviços
                  </Link>
                  <Link href="#about" className="text-white hover:text-[rgb(var(--color-secondary))] transition-all duration-300 hover:scale-105 transform">
                    Sobre
                  </Link>
                  <Link href="/careers" className="text-white hover:text-[rgb(var(--color-secondary))] transition-all duration-300 hover:scale-105 transform">
                    Cases
                  </Link>
                </div>
                <div className="flex justify-center py-4">
                  <button className="btn-primary">
                    Fale Conosco
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
