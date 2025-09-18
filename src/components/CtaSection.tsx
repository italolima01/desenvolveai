'use client';

import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section id="cta" className="bg-white text-gray-800 py-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Pronto para transformar seu negócio com <span className="text-[rgb(var(--color-primary))]">IA</span>?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Vamos conversar sobre como nossas soluções de inteligência artificial podem impulsionar seus resultados!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 30px rgba(59, 130, 246, 0.7)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[rgb(var(--color-primary))] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            Começar Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
