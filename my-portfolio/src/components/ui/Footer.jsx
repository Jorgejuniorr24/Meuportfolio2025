import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">

          {/* Frase de convite com destaque */}
          <div className="text-center max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Vamos trabalhar juntos?</h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Transforme suas ideias em soluções digitais que realmente se conectam com seu público.
            </p>
          </div>

          {/* Redes Sociais discretas */}
          <div className="text-center">
            <div className="flex justify-center space-x-4 mt-2">
              <a 
                href="https://github.com/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-blue-400 transition"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com/in/seu-perfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>

          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800 text-center text-gray-400 text-sm w-full">
            <p>&copy; {new Date().getFullYear()} Jorge Oliveira. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
