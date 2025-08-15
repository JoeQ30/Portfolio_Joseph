import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { href: "https://github.com/JoeQ30", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/joseph-quir%C3%B3s-calvo-288a87310/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:jquirscalvo@email.com", icon: Mail, label: "Email" }
  ];

  return (
    <div className="social-links">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          className="social-link"
          aria-label={label}
        >
          <Icon size={28} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;