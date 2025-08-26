import React, { useState } from 'react';
import { Heart, Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="px-6">
              <img src="./logo.jpg" alt="logo" className='w-[80px]' />
            </div>
         
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2" style={{ backgroundColor: '#00697d' }}>
              <Phone className="w-4 h-4" />
              Emergency
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Directions
            </button>
          </div>
          
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <button className="text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2" style={{ backgroundColor: '#00697d' }}>
                  <Phone className="w-4 h-4" />
                  Emergency
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Directions
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}