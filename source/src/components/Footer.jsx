import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-blue-500 rounded-full opacity-5"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-blue-400 rounded-full opacity-5"></div>
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        
        <div className="pt-16 pb-12">
          
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <img
                src="/images/logo-header.png?v=3.0"
                alt="New York Center for Spinal Disorders"
                width={200}
                height={50}
                className="brightness-0 invert opacity-90"
              />
              <div className="absolute -inset-4 border border-blue-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            <div className="relative flex">
              <div className="flex items-start space-x-4 bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800 w-full">
                <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-gray-100 font-medium">Upper East Side</h3>
                  <a
                    href="https://www.google.com/maps?q=425+East+79th+Street,+Suite+1H,+New+York,+NY+10075"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 leading-relaxed hover:text-blue-400 transition-colors block"
                  >
                    425 East 79th Street, Suite 1H<br />
                    <span className="text-gray-400 text-sm">New York, NY 10075</span>
                  </a>
                </div>
              </div>
            </div>

            
            <div className="relative flex">
              <div className="flex items-start space-x-4 bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800 w-full">
                <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-gray-100 font-medium">Flatiron District</h3>
                  <a
                    href="https://www.google.com/maps?q=19+West+21st+Street,+Suite+801,+New+York,+NY+10010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 leading-relaxed hover:text-blue-400 transition-colors block"
                  >
                    19 West 21st Street, Suite 801<br />
                    <span className="text-gray-400 text-sm">New York, NY 10010</span>
                  </a>
                </div>
              </div>
            </div>

            
            <div className="relative flex">
              <div className="flex items-start space-x-4 bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800 w-full">
                <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-gray-100 font-medium">Contact Us</h3>
                  <a
                    href="tel:+12122493840"
                    className="text-gray-300 text-lg tracking-wide hover:text-blue-400 transition-colors"
                  >
                    (212) 249-3840
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <Link
                to="/appointment"
                className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>Schedule Appointment</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/insurance-and-forms"
                className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>Insurance & Forms</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/privacy-policy"
                className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>Privacy Policy</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/privacy-practice"
                className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>Privacy Practice</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/accessibility-statement"
                className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>Accessibility Statement</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/section1557-statement"
                className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>Section 1557 Statement</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/no-surprises-act"
                className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>No Surprises Act</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/legal-disclaimer"
                className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>Terms of Use</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/files/NYCSD_BAA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>Business Associate Agreement</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>Sitemap</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 py-6">
          <div className="text-center space-y-2">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} New York Center for Spinal Disorders. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built & Powered by <a href="https://hexapoint.com" className="text-blue-400 hover:text-blue-300 transition-colors">Hexapoint</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;