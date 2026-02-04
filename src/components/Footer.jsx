import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Arpit Agarwal</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Full Stack Engineer with 4+ years of experience building scalable backend systems and distributed applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 text-left"
              >
                Experience
              </button>
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 text-left"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:arpit.agarwal67@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
              >
                <Mail size={16} />
                <span>arpit.agarwal67@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/arpitagarwal30"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
              >
                <Linkedin size={16} />
                <span>linkedin.com/in/arpitagarwal30</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} />
                <span>Bareilly, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Arpit Agarwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
