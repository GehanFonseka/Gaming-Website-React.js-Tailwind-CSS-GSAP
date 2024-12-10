import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#5542ff] to-[#42aaff] text-white py-8">
      <div className="container mx-auto flex flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        {/* Branding Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Gehan Fonseka</h2>
          <p className="mt-2 text-sm">
            Empowering development, one line of code at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-4 md:flex-row">
          <a
            href="#privacy-policy"
            className="text-sm transition hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#terms-of-service"
            className="text-sm transition hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#contact-us"
            className="text-sm transition hover:underline"
          >
            Contact Us
          </a>
        </nav>

        {/* Social Media Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg transition transform hover:scale-110 hover:text-gray-200"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm text-gray-200">
        © Gehan Fonseka 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
