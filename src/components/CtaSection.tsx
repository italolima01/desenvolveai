'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function CtaSection() {
  return (
    <section id="cta" className="py-20 bg-white text-center">
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
    </section>
  );
}
