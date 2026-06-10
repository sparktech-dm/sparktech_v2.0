import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: MapPin, href: 'https://maps.app.goo.gl/4sYLYqWiS9KQRijP8', color: 'hover:text-[#f0c417]' },
    { icon: Instagram, href: 'https://www.instagram.com/sparktech.dm?igsh=MTA5dzFmNW9uYzVlMg==', color: 'hover:text-[#f0c417]' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/112620752/admin/dashboard/', color: 'hover:text-[#f0c417]' }
  ];

  return (
    <footer className="bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/Logo.png" alt="Sparktech Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#f0c417] to-lime-100 bg-clip-text text-transparent">
                Sparktech
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              At Spark Tech, we blend insight with imagination to create digital stories that matter.
              From SEO to branding, our work is rooted in clarity, action, and measurable growth.
              Your trusted digital marketing agency in Chennai.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-black rounded-lg text-white ${social.color} transition-all duration-300 transform hover:scale-110`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Other Pages */}
          <div className="mt-1">
            <h3
              className="text-[#f0c417] text-lg font-medium mb-6"
              style={{ fontFamily: "Unbounded" }}
            >
              Other Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-white/80 text-base font-normal hover:text-[#f0c417] transition-colors"
                  style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 text-base font-normal hover:text-[#f0c417] transition-colors"
                  style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 text-base font-normal hover:text-[#f0c417] transition-colors"
                  style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/Career"
                  className="text-white/80 text-base font-normal hover:text-[#f0c417] transition-colors"
                  style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/Blogs"
                  className="text-white/80 text-base font-normal hover:text-[#f0c417] transition-colors"
                  style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-1">
            <h3
              className="text-[#f0c417] text-lg font-medium mb-6"
              style={{ fontFamily: "Unbounded" }}
            >
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#f0c417] mt-1 flex-shrink-0" />
                <p className="text-gray-300">sparktechdm@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#f0c417] mt-1 flex-shrink-0" />
                <p className="text-gray-300">+91 8939892219</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#f0c417] mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  C1, <br />
                  Honey tone Apartments, <br />
                  shankarapuram 1st Street, <br />
                  Choolaimedu, Chennai 600094
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-sm">
            © 2025 Sparktech. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;