import React from "react";
import { Heart, Phone, MapPin, Mail, Instagram, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#fff] p-2 rounded-lg">
                <img src="./logo.jpg" alt="logo" className="w-[80px]" />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Caring for you, every day. Trusted multi-specialty healthcare with
              compassion and excellence.
            </p>
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: "#00697d" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Emergency 24×7</span>
              </div>
              <p className="text-sm opacity-90">+91 XXXX-XXXXXX</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Doctors
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#emergency"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Emergency Care
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Specialties</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">General Medicine</li>
              <li className="text-gray-400">Orthopedics</li>
              <li className="text-gray-400">Cardiology</li>
              <li className="text-gray-400">ENT</li>
              <li className="text-gray-400">Pediatrics</li>
              <li className="text-gray-400">Emergency Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div className="text-sm text-gray-400">
                  5-1-3, Seethayyagari Thota
                  <br />
                  Pithapuram, Kakinada District
                  <br />
                  533450
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400">
                  info@karthikeyahospitals.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400">Emergency: 24×7</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-gray-400" />
                <a
                  href="https://www.instagram.com/karthikeya_hospitals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  @karthikeya_hospitals
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Karthikeya Hospitals. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
