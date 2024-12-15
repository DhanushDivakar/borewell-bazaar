import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactBanner } from "@/components/ContactBanner";
import { Drill, Filter, Cpu, Search, MapPin, Clock, Phone, Mail, Users2 } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Borewell Drilling",
      description: "Professional borewell drilling services with advanced equipment and experienced team.",
      icon: <Drill className="w-6 h-6" />,
    },
    {
      title: "Filter Borewell",
      description: "High-quality filter installation for clean and safe water supply.",
      icon: <Filter className="w-6 h-6" />,
    },
    {
      title: "Motor & Pump",
      description: "Installation and maintenance of motors and pumps for optimal performance.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      title: "Borewell Scanning",
      description: "Advanced scanning technology to assess borewell conditions and identify issues.",
      icon: <Search className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      content: "SSS Borwell provided excellent service for our borewell installation. Their team was professional and efficient.",
      author: "Rajesh Kumar",
      role: "Property Owner",
    },
    {
      content: "The scanning service helped us identify and fix issues with our old borewell. Highly recommended!",
      author: "Priya Sharma",
      role: "Homeowner",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary text-white">
      <ContactBanner />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container px-4 py-20 text-center"
      >
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/lovable-uploads/4be88929-b61c-44c9-8d4a-8531b5c0ff2a.png"
          alt="SSS Borwell Logo"
          className="mx-auto mb-8 h-24 object-contain"
        />
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          One Stop Solution for All
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Your trusted partner in borewell solutions for over 15 years
        </motion.p>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          href="tel:+919606158125"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent rounded-full text-white font-semibold hover:bg-accent/90 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Contact Us Now
        </motion.a>
      </motion.section>

      {/* Services Section */}
      <section className="container px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-300">Comprehensive borewell solutions for all your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="container px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">15+ Years of Excellence</h2>
          <p className="text-gray-300 mb-6">
            SSS Borwell has been serving the communities of Chikkaballapur and Bengaluru, Karnataka with exceptional borewell services since 2008. Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">15+ Years</h3>
              <p className="text-sm text-gray-300">Industry Experience</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Wide Coverage</h3>
              <p className="text-sm text-gray-300">Chikkaballapur & Bengaluru</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <Users2 className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">1000+</h3>
              <p className="text-sm text-gray-300">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300">Trusted by homeowners and businesses alike</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="space-y-6">
            <a href="tel:+919606158125" className="flex items-center justify-center gap-2 text-xl hover:text-accent transition-colors">
              <Phone className="w-6 h-6" />
              +91 9606158125
            </a>
            <div className="flex items-center justify-center gap-2 text-xl">
              <MapPin className="w-6 h-6" />
              Chikkaballapur, Bengaluru, Karnataka
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container px-4 py-8 text-center border-t border-white/10">
        <p className="text-gray-300">© 2024 SSS Borwell. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;