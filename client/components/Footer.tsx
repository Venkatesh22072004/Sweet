import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">🍰</span>
              Sweet Crumbs
            </h3>
            <p className="text-gray-300">
              Authentic Indian bakery crafted with love and traditional recipes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@sweetcrumbs.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Baker Street, Mumbai, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Sweet Crumbs. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
