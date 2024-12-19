import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactBanner } from "@/components/ContactBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import {
  Drill,
  Filter,
  Cpu,
  Search,
  MapPin,
  Clock,
  Phone,
  Mail,
  Users2,
  CheckCircle2,
} from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Borewell Drilling",
      description:
        "Professional borewell drilling services with advanced equipment and experienced team.",
      icon: <Drill className="w-6 h-6" />,
      image: "public/lovable-uploads/0f9f913b-167c-43a5-b550-53db7663cbff.JPG",
    },
    {
      title: "Filter Borewell",
      description:
        "High-quality filter installation for clean and safe water supply.",
      icon: <Filter className="w-6 h-6" />,
      image: "public/lovable-uploads/PHOTO-2024-12-18-23-00-52.jpg",
    },
    {
      title: "Motor & Pump",
      description:
        "Installation and maintenance of motors and pumps for optimal performance.",
      icon: <Cpu className="w-6 h-6" />,
      image: "public/lovable-uploads/c5aa1413-86f1-4a7e-8a3c-03501af3b251.JPG",
    },
    {
      title: "Borewell Scanning",
      description:
        "Advanced scanning technology to assess borewell conditions and identify issues.",
      icon: <Search className="w-6 h-6" />,
      image: "public/lovable-uploads/borewellscanning.jpeg",
    },
  ];

  const testimonials = [
    {
      content:
        "SSS Borwell provided excellent service for our borewell installation. Their team was professional and efficient.",
      author: "Rajesh Kumar",
      role: "Property Owner",
    },
    {
      content:
        "The scanning service helped us identify and fix issues with our old borewell. Highly recommended!",
      author: "Priya Sharma",
      role: "Homeowner",
    },
    {
      content:
        "We are thrilled with our new home! SSS Construction was professional, reliable, and delivered our dream house right on time. The attention to detail was remarkable. Highly recommend their services!",
      author: "Rajesh & Meena Gupta",
      role: "Homeowner",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            Comprehensive borewell solutions for all your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-15 py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">15+ Years of Excellence</h2>
          <p className="text-gray-600 mb-6">
            SSS Borwell: Your Trusted Groundwater Solutions Expert in Karnataka
            Serving the dynamic regions of Chikkaballapur and Bengaluru since
            2008, SSS Borwell stands as a premier borewell drilling and
            groundwater management specialist. With over 15 years of
            comprehensive experience, we deliver innovative, reliable, and
            sustainable water solutions that address the critical groundwater
            needs of residential, agricultural, and commercial clients across
            Chikkaballapur and Bengaluru.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">15+ Years</h3>
              <p className="text-sm text-gray-600">Industry Experience</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Wide Coverage</h3>
              <p className="text-sm text-gray-600">
                Chikkaballapur & Bengaluru
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <Users2 className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">1000+</h3>
              <p className="text-sm text-gray-600">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container px-10 py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Trusted by homeowners and businesses alike
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      <section id="contact" className="container px-20 py-20">
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
              <a
                href="tel:+919606158125"
                className="text-primary hover:underline"
              >
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
              <a
                href="mailto:contact@sssborwell.com"
                className="text-primary hover:underline"
              >
                sssborewellservice@gmail.com
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
