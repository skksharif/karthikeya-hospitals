import React from 'react';
import { Award, MapPin } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Mogili Karthikeya Naidu',
    qualification: 'MS Ortho, AADO Fellow (Hong Kong), MMR Fellow (Australia)',
    department: 'Orthopedics',
    focus: 'Trauma, fractures, joint care',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Dr. Rajesh Kumar',
    qualification: 'MD General Medicine',
    department: 'General Medicine',
    focus: 'Diabetes, hypertension, infections',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Dr. Priya Sharma',
    qualification: 'DNB (ENT)',
    department: 'ENT',
    focus: 'Sinus, ear & throat conditions',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Dr. Suresh Reddy',
    qualification: 'MD (Pediatrics)',
    department: 'Pediatrics',
    focus: 'Newborn & child care',
    image: 'https://images.pexels.com/photos/6749771/pexels-photo-6749771.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Dr. Lakshmi Devi',
    qualification: 'MD (Cardiology)',
    department: 'Cardiology',
    focus: 'Heart disease, cardiac interventions',
    image: 'https://images.pexels.com/photos/5407204/pexels-photo-5407204.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Dr. Anil Kumar',
    qualification: 'MD (Gastroenterology)',
    department: 'Gastroenterology',
    focus: 'Digestive disorders, endoscopy',
    image: 'https://images.pexels.com/photos/6749765/pexels-photo-6749765.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function Doctors() {
  return (
    <section className="py-20 bg-gray-50" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced specialists dedicated to providing you with the best possible care
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-600 font-medium">
                    {doctor.qualification}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: '#00697d' }} />
                    <span className="text-sm font-semibold" style={{ color: '#00697d' }}>
                      {doctor.department}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Focus: {doctor.focus}
                  </p>
                </div>
                
                {/* FIXED BUTTON */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
