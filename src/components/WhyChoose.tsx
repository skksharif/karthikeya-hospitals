import React from 'react';
import { Users, Building, FileText, Heart, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Experienced Specialists',
    description: 'Multi-disciplinary team for coordinated care with years of experience.',
    color: 'blue'
  },
  {
    icon: Building,
    title: 'Advanced Facilities',
    description: 'Imaging, labs, ICU, OT, and day-care procedures with modern equipment.',
    color: 'green'
  },
  {
    icon: FileText,
    title: 'Transparent Processes',
    description: 'Clear communication, treatment plans, and upfront costs with no hidden fees.',
    color: 'purple'
  },
  {
    icon: Heart,
    title: 'Patient Comfort',
    description: 'Clean wards, attentive nursing, and family-friendly spaces for healing.',
    color: 'red'
  },
  {
    icon: MapPin,
    title: 'Community Focus',
    description: 'Health camps, awareness sessions, and preventive screenings for all.',
    color: 'orange'
  }
];

const colorClasses = {
  blue: { bg: 'bg-teal-50', iconBg: 'bg-teal-100', icon: '', hover: 'hover:bg-teal-100' },
  green: { bg: 'bg-green-50', iconBg: 'bg-green-100', icon: 'text-green-600', hover: 'hover:bg-green-100' },
  purple: { bg: 'bg-orange-50', iconBg: 'bg-orange-100', icon: 'text-orange-500', hover: 'hover:bg-orange-100' },
  red: { bg: 'bg-red-50', iconBg: 'bg-red-100', icon: 'text-red-600', hover: 'hover:bg-red-100' },
  orange: { bg: 'bg-orange-50', iconBg: 'bg-orange-100', icon: 'text-orange-600', hover: 'hover:bg-orange-100' }
};

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Karthikeya</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional healthcare with compassion, expertise, and modern facilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const colors = colorClasses[reason.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`${colors.bg} p-8 rounded-2xl ${colors.hover} transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}
              >
                <div className={`w-16 h-16 ${colors.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.icon || ''}`} style={!colors.icon ? { color: '#00697d' } : {}} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}