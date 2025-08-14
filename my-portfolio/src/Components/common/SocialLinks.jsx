import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = ({ className = "", size = 28 }) => {
  const socialLinks = [
    { href: "#", icon: Github, label: "GitHub" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Mail, label: "Email" }
  ];

  return (
    <div className={`flex justify-center space-x-6 ${className}`}>
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          aria-label={label}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;