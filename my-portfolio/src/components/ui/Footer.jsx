// src/components/ui/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Seção de Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-blue-400" />
                <span>Salvador - Bahia - Brasil</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a href="mailto:jorge.junlortwo@hotmail.com" className="hover:text-blue-400 transition">
                  jorge.junlortwo@hotmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-3 text-blue-400" />
                <a href="https://wa.me/5571992896908" className="hover:text-blue-400 transition">
                  (+55) 71 99289-6908
                </a>
              </li>
            </ul>
          </div>

          {/* Seção de Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-blue-400 transition">Sobre Mim</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition">Portfólio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition">Serviços</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">Contato</a>
              </li>
            </ul>
          </div>

          {/* Seção de Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com/in/seu-perfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
            <div className="mt-6">
              <a 
                href="/path-to-your-resume.pdf" 
                download
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Download Currículo
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jorge Oliveira. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvido com React e Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;