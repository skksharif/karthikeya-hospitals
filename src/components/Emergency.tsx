import React from 'react';
import { Clock, Phone, Ambulance, AlertTriangle } from 'lucide-react';

export default function Emergency() {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: '#00697d' }} id="emergency">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Clock className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">24×7 Emergency Care</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed opacity-90">
              Our Emergency Department operates round the clock with rapid triage, experienced 
              clinicians, and immediate access to imaging, lab services, and operating theatres.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              For accidents, injuries, chest pain, breathing difficulty, or any urgent illness — we're ready.
            </p>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Ambulance className="w-8 h-8" />
                <h3 className="text-2xl font-semibold">Ambulance & Helpline</h3>
              </div>
              <p className="text-lg opacity-90 mb-4">24/7 Emergency Services Available</p>
              <div className="flex flex-col sm:flex-row gap-4">
                
                {/* Emergency Call Button */}
                <button className="bg-white text-[#00697d] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Emergency
                </button>
                
                {/* Ambulance Request Button */}
                <button className="border-2 border-white hover:bg-white hover:text-[#00697d] px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Ambulance className="w-5 h-5" />
                  Request Ambulance
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Rapid Triage</h4>
                  <p className="opacity-90">Quick assessment and priority-based treatment</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Immediate Access</h4>
                  <p className="opacity-90">Direct access to imaging, labs, and operating theatres</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">24/7 Support</h4>
                  <p className="opacity-90">Round-the-clock emergency medical support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
