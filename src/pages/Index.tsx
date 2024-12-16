import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactBanner } from "@/components/ContactBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Drill, Filter, Cpu, Search, MapPin, Clock, Phone, Mail, Users2, CheckCircle2 } from "lucide-react";

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

  const whyChooseUs = [
    {
      title: "Experienced Team",
      description: "Our skilled professionals bring 15+ years of expertise in borewell services.",
      icon: <Users2 className="w-6 h-6" />,
    },
    {
      title: "Advanced Technology",
      description: "We use state-of-the-art equipment for precise and efficient borewell solutions.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for emergency services.",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: "Quality Assurance",
      description: "Commitment to delivering high-quality services and customer satisfaction.",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      {/* Services Section */}
      <section id="services" className="container px-4 py-20">
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
      <section id="about" className="container px-4 py-20 bg-secondary/20">
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

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="container px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose SSS Borwell?</h2>
          <p className="text-gray-600">Experience excellence in borewell services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className="bg-white shadow-lg hover:shadow-xl"
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container px-4 py-20 bg-secondary/20">
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
      <section id="contact" className="container px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 rounded-lg bg-white shadow-lg"
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:+919606158125" className="text-primary hover:underline">
                +91 9606158125
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 rounded-lg bg-white shadow-lg"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a href="mailto:contact@sssborwell.com" className="text-primary hover:underline">
                contact@sssborwell.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactBanner />
    </div>
  );
};

export default Index;
