import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-sm py-4 fixed w-full top-0 z-50"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="/lovable-uploads/c883835c-c727-4869-821e-5454ebb93c94.png"
            alt="SSS Borwell Logo"
            className="h-12 object-contain"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a>
          <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="tel:+919606158125" className="flex items-center gap-2 text-primary">
            <Phone className="w-5 h-5" />
            <span className="hidden md:inline">+91 9606158125</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};