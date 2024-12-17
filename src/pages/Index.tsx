import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactBanner } from "@/components/ContactBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { MapPin, Clock, Phone, Mail, Users2 } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Borewell Drilling",
      description: "Professional borewell drilling services with advanced equipment and experienced team.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=500&auto=format&fit=crop",
    },
    {
      title: "Filter Borewell",
      description: "High-quality filter installation for clean and safe water supply.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=500&auto=format&fit=crop",
    },
    {
      title: "Motor & Pump",
      description: "Installation and maintenance of motors and pumps for optimal performance.",
      image: "https://images.unsplash.com/photo-1581092334247-ddef2a41a4f7?q=80&w=500&auto=format&fit=crop",
    },
    {
      title: "Borewell Scanning",
      description: "Advanced scanning technology to assess borewell conditions and identify issues.",
      image: "https://images.unsplash.com/photo-1581092160607-ee67df11c6d0?q=80&w=500&auto=format&fit=crop",
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
    {
      content: "Outstanding service! The team was punctual, professional, and completed the work within the promised timeframe.",
      author: "Suresh Patel",
      role: "Business Owner",
    },
    {
      content: "Very satisfied with their motor installation service. The team's expertise is commendable.",
      author: "Anita Reddy",
      role: "Apartment Complex Manager",
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
          <p className="text-gray-600">Comprehensive borewell solutions for all your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">15+ Years of Excellence</h2>
          <p className="text-gray-600 mb-6">
            SSS Borwell has been serving the communities of Chikkaballapur and Bengaluru, Karnataka with exceptional borewell services since 2008. Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
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
              <p className="text-sm text-gray-600">Chikkaballapur & Bengaluru</p>
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
      <section className="container px-4 py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Trusted by homeowners and businesses alike</p>
        </div>
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
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
