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
    <footer className="bg-[#efeadd] border-t border-[#dfdacd] text-[#395c7a]">
      <div className="max-w-7xl lg:max-w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-2 pr-8">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/Logo.png" alt="Sparktech Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold text-[#c9742a]">
                Spark Tech
              </span>
            </div>
            <p className="text-[#395c7a] mb-6 max-w-md leading-relaxed text-[15px]">
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
                  className={`p-2 text-[#c9742a] hover:text-[#a05a1d] transition-all duration-300 transform hover:scale-110`}
                >
                  <social.icon className="h-6 w-6" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Other Pages */}
          <div className="mt-1">
            <h3
              className="text-[#c9742a] text-xl font-bold mb-6"
              style={{ fontFamily: "Unbounded" }}
            >
              Other Pages
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-[#395c7a] text-[15px] font-medium hover:text-[#c9742a] transition-colors"
                  style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#395c7a] text-[15px] font-medium hover:text-[#c9742a] transition-colors"
                  style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#395c7a] text-[15px] font-medium hover:text-[#c9742a] transition-colors"
                  style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/Career"
                  className="text-[#395c7a] text-[15px] font-medium hover:text-[#c9742a] transition-colors"
                  style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/Blogs"
                  className="text-[#395c7a] text-[15px] font-medium hover:text-[#c9742a] transition-colors"
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
              className="text-[#c9742a] text-xl font-bold mb-6"
              style={{ fontFamily: "Unbounded" }}
            >
              Contact info
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#c9742a] mt-0.5 flex-shrink-0" strokeWidth={2} />
                <p className="text-[#395c7a] text-[15px]">sparktechdm@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#c9742a] mt-0.5 flex-shrink-0" strokeWidth={2} />
                <p className="text-[#395c7a] text-[15px]">+91 8939892219</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#c9742a] mt-0.5 flex-shrink-0" strokeWidth={2} />
                <p className="text-[#395c7a] text-[15px] leading-relaxed">
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
        <div className="border-t border-[#ca9e72] mt-12 pt-8 text-left">
          <p className="text-[#395c7a] text-sm">
            © 2025 Sparktech. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;