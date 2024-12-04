import { FaDiscord, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black lg:ps-6 lg:pe-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4">
        <p className="text-center text-sm font-light md:text-left">
          ©{new Date().getFullYear()} - Yvan junior Blanchette - Tous droits réservés
        </p>

        <div className="justify-center gap-4 hidden md:flex">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="text-sm font-light hover:underline hidden md:block text-right"
        >
          Politique de confidentialité
        </a>
      </div>
    </footer>
  );
};

export default Footer;