'use client';

import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Para rolagem suave
import NextLink from 'next/link'; // Para links externos ou para outras páginas

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
  <footer id="contact" className="bg-gray-950 text-gray-300 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Coluna 1: Logo e Slogan */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">DESENROLA.AI</h3>
          <p className="text-gray-400">Descomplicamos a tecnologia para você focar no que importa.</p>
          <p className="text-gray-500 text-sm">&copy; {currentYear} Desenrola.AI. Todos os direitos reservados.</p>
        </div>

        {/* Coluna 2: Links de Navegação */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Menu</h4>
          <ul className="space-y-2">
            <li>
              <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-blue-400 transition-colors cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-blue-400 transition-colors cursor-pointer">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-blue-400 transition-colors cursor-pointer">
                Sobre
              </Link>
            </li>
            <li>
              <NextLink href="/terms" className="hover:text-blue-400 transition-colors">
                Termos de Serviço
              </NextLink>
            </li>
            <li>
              <NextLink href="/privacy" className="hover:text-blue-400 transition-colors">
                Política de Privacidade
              </NextLink>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Redes Sociais</h4>
          <div className="flex space-x-4">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://www.instagram.com/de_senrola_ai?igsh=MTR2aTluOWQ5NXo4YQ==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
              <FaInstagram size={24} />
            </a>
            
          </div>
        </div>

        {/* Coluna 4: Contato */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Contato</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <a href="mailto:contato@desenrola.ai" className="hover:text-blue-400 transition-colors">contato@desenrola.ai</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone />
              <a href="tel:+5511999999999" className="hover:text-blue-400 transition-colors">+55 (11) 99999-9999</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
