import React from 'react';
import { Building, Stethoscope, Microscope, Pill, Zap, Activity } from 'lucide-react';

const facilities = [
  {
    icon: Building,
    title: 'Modular Operating Theatres',
    description: 'State-of-the-art surgical suites with advanced technology',
    color: 'blue'
  },
  {
    icon: Activity,
    title: 'ICU & Critical Care',
    description: 'Intensive care with 24/7 monitoring and life support systems',
    color: 'red'
  },
  {
    icon: Zap,
    title: 'Digital X-ray, Ultrasound, ECG',
    description: 'Modern imaging technology for accurate diagnosis',
    color: 'green'
  },
  {
    icon: Microscope,
    title: 'Pathology Lab',
    description: 'Routine & emergency panels with quick turnaround times',
    color: 'purple'
  },
  {
    icon: Pill,
    title: 'Pharmacy & Emergency Medicine',
    description: 'On-site pharmacy with emergency medications available 24/7',
    color: 'orange'
  },
  {
    icon: Stethoscope,
    title: 'Day-care Procedures',
    description: 'Minor surgeries and procedures with same-day discharge',
    color: 'teal'
  }
];

const colorClasses = {
  blue: { bg: 'bg-teal-50', iconBg: 'bg-teal-100', icon: '', border: 'border-teal-200' },
  red: { bg: 'bg-red-50', iconBg: 'bg-red-100', icon: 'text-red-600', border: 'border-red-200' },
  green: { bg: 'bg-green-50', iconBg: 'bg-green-100', icon: 'text-green-600', border: 'border-green-200' },
  purple: { bg: 'bg-orange-50', iconBg: 'bg-orange-100', icon: 'text-orange-500', border: 'border-orange-200' },
  orange: { bg: 'bg-orange-50', iconBg: 'bg-orange-100', icon: 'text-orange-600', border: 'border-orange-200' },
  teal: { bg: 'bg-teal-50', iconBg: 'bg-teal-100', icon: '', border: 'border-teal-200' }
};

export default function Facilities() {
  return (
    <section className="py-20 bg-white" id="facilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern infrastructure and advanced medical equipment to support exceptional healthcare delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            const colors = colorClasses[facility.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <div className={`w-16 h-16 ${colors.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.icon || ''}`} style={!colors.icon ? { color: '#00697d' } : {}} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}