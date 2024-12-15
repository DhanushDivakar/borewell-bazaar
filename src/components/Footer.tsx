import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About SSS Borwell</h3>
            <p className="text-white/80">
              With over 15 years of excellence in borewell services, we are committed to providing quality solutions for all your water needs in Chikkaballapur and Bengaluru regions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a href="tel:+919606158125" className="flex items-center gap-2 text-white/80 hover:text-white">
                <Phone className="w-5 h-5" />
                +91 9606158125
              </a>
              <a href="mailto:contact@sssborwell.com" className="flex items-center gap-2 text-white/80 hover:text-white">
                <Mail className="w-5 h-5" />
                contact@sssborwell.com
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5" />
                Chikkaballapur, Bengaluru, Karnataka
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <p className="text-white/80">Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-white/80">Sunday: By Appointment</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/80">© 2024 SSS Borwell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};