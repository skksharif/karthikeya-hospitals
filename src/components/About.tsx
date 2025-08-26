import React from 'react';
import { Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Karthikeya Hospitals
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Karthikeya Hospitals is a patient-centric, multi-specialty hospital
              serving families across Pithapuram and the Kakinada region. Our
              goal is simple: deliver timely, accurate, and affordable care with
              empathy.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From emergencies to routine checkups, we combine skilled
              specialists with modern infrastructure to ensure you receive the
              right treatment at the right time.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Mission */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Quality care that's accessible, ethical, and delivered with
                    dignity.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: '#00697d' }}
                >
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 mt-1">
                    To be the most trusted healthcare destination in Pithapuram.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
