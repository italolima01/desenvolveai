'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function CtaSection() {
  return (
    <section id="cta" className="relative bg-white py-20 text-center pb-48">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold mb-6 text-gray-900"
        >
          Pronto para transformar seu negócio com IA?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-600"
        >
          Entre em contato conosco e descubra como nossas soluções personalizadas podem impulsionar sua empresa.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link
            to="contact" // Assuming a contact section exists or will be created
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn-primary inline-block cursor-pointer"
          >
            Fale Conosco
          </Link>
        </motion.div>
      </div>
      {/* Wave divider to next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0,60 C240,0 360,120 600,60 C840,0 960,120 1200,60 C1320,30 1440,90 1440,60 L1440,120 L0,120 Z" 
            fill="#030712" 
            fillOpacity="1" 
          />
          <path 
            d="M0,80 C200,40 400,120 600,80 C800,40 1000,120 1200,80 C1320,60 1440,100 1440,80 L1440,120 L0,120 Z" 
            fill="#000000" 
            fillOpacity="0.8" 
          />
        </svg>
      </div>
    </section>
  );
}
