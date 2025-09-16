'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black via-[#030712] to-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.35)_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      </div>

      {/* Bottom gradient to transition from blue to white */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-28 bg-gradient-to-b from-transparent to-white/95" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          Soluções de IA sob medida para sua empresa
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-gray-300"
        >
          Desenvolvemos softwares inteligentes e agentes de IA personalizados para otimizar processos e automatizar tarefas.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
        >
          Saiba Mais
        </motion.button>
      </div>
    </div>
  );
}
