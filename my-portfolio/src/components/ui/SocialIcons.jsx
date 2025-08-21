import { Github, Linkedin, Instagram } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="flex gap-6 pt-6">
      <a
        href="https://github.com/Jorgejuniorr24"
        target="_blank"
        rel="noreferrer"
        className="text-gray-700 dark:text-blue-400 
                   hover:text-blue-600 dark:hover:text-blue-300 
                   transition-colors"
      >
        <Github size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/dev-jorge-oliveira/"
        target="_blank"
        rel="noreferrer"
        className="text-gray-700 dark:text-blue-400 
                   hover:text-blue-600 dark:hover:text-blue-300 
                   transition-colors"
      >
        <Linkedin size={28} />
      </a>
      <a
        href="https://www.instagram.com/jorgejuniorr24/"
        target="_blank"
        rel="noreferrer"
        className="text-gray-700 dark:text-blue-400 
                   hover:text-blue-600 dark:hover:text-blue-300 
                   transition-colors"
      >
        <Instagram size={28} />
      </a>
    </div>
  );
};

export default SocialIcons;
