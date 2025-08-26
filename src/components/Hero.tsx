import React from 'react';
import { Phone, MapPin, Clock, Shield, Users, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 bg-grid-blue-100/25"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Modern Multi-Specialty Care in{' '}
                <span className="text-orange-500">Pithapuram</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Compassionate doctors, advanced facilities, and 24×7 Emergency services under one roof.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call for Appointment
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Get Directions
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24×7 Emergency & Trauma Care</h4>
                    <p className="text-sm text-gray-600">Round-the-clock emergency services</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Users className="w-6 h-6" style={{ color: '#00697d' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Experienced Multi-specialty Team</h4>
                    <p className="text-sm text-gray-600">Skilled specialists across departments</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">In-house Diagnostics & Pharmacy</h4>
                    <p className="text-sm text-gray-600">Complete medical services on-site</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Shield className="w-6 h-6" style={{ color: '#00697d' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Patient-first, Transparent Care</h4>
                    <p className="text-sm text-gray-600">Clear communication and ethical practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}