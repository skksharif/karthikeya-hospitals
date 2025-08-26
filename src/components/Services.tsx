import React from 'react';
import { Stethoscope, Bone, Heart, Ear, Atom as Stomach, Pin as Skin, Brain, LucideKey as Kidney, Baby, Zap, Microscope, Pill, Activity } from 'lucide-react';

const services = [
  { name: 'Emergency & Trauma (24×7)', icon: Zap, color: 'red' },
  { name: 'General Medicine', icon: Stethoscope, color: 'blue' },
  { name: 'Orthopedics', icon: Bone, color: 'orange' },
  { name: 'Cardiology', icon: Heart, color: 'red' },
  { name: 'ENT (Ear, Nose & Throat)', icon: Ear, color: 'purple' },
  { name: 'Gastroenterology', icon: Stomach, color: 'green' },
  { name: 'Dermatology', icon: Skin, color: 'pink' },
  { name: 'Neurology', icon: Brain, color: 'indigo' },
  { name: 'Nephrology', icon: Kidney, color: 'teal' },
  { name: 'Obstetrics & Gynecology', icon: Baby, color: 'rose' },
  { name: 'Pediatrics', icon: Baby, color: 'cyan' },
  { name: 'Physiotherapy & Rehabilitation', icon: Activity, color: 'lime' },
  { name: 'Anesthesiology & Critical Care', icon: Stethoscope, color: 'amber' },
  { name: 'Radiology & Imaging', icon: Microscope, color: 'violet' },
  { name: 'Lab/Diagnostics', icon: Microscope, color: 'emerald' },
  { name: 'Pharmacy (In-house)', icon: Pill, color: 'blue' }
];

const colorClasses = {
  red: { bg: 'bg-red-100', icon: 'text-red-600', hover: 'hover:bg-red-200' },
  blue: { bg: 'bg-teal-100', icon: '', hover: 'hover:bg-teal-200' },
  orange: { bg: 'bg-orange-100', icon: 'text-orange-600', hover: 'hover:bg-orange-200' },
  purple: { bg: 'bg-orange-100', icon: 'text-orange-600', hover: 'hover:bg-orange-200' },
  green: { bg: 'bg-green-100', icon: 'text-green-600', hover: 'hover:bg-green-200' },
  pink: { bg: 'bg-orange-100', icon: 'text-orange-600', hover: 'hover:bg-orange-200' },
  indigo: { bg: 'bg-teal-100', icon: '', hover: 'hover:bg-teal-200' },
  teal: { bg: 'bg-teal-100', icon: '', hover: 'hover:bg-teal-200' },
  rose: { bg: 'bg-orange-100', icon: 'text-orange-600', hover: 'hover:bg-orange-200' },
  cyan: { bg: 'bg-teal-100', icon: '', hover: 'hover:bg-teal-200' },
  lime: { bg: 'bg-orange-100', icon: 'text-orange-600', hover: 'hover:bg-orange-200' },
  amber: { bg: 'bg-orange-100', icon: 'text-orange-600', hover: 'hover:bg-orange-200' },
  violet: { bg: 'bg-teal-100', icon: '', hover: 'hover:bg-teal-200' },
  emerald: { bg: 'bg-teal-100', icon: '', hover: 'hover:bg-teal-200' }
};

export default function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services & Specialties</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive care across key departments with experienced specialists and modern facilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md ${colors.hover} transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.icon || ''}`} style={!colors.icon ? { color: '#00697d' } : {}} />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                  {service.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}