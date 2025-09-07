import React from "react";
import { Award, MapPin } from "lucide-react";

const doctors = [
  {
    name: "Dr. Mogali Kasi Viswanatham",
    qualification: "MS.Ortho",
    department: "Orthopedics",
    focus: "Full time",
    image: "/doctors/kaasi.jpg",
  },
  {
    name: "Dr. Kommuri Govindu Babu",
    qualification: "DNB General medicine",
    department: "General Medicine",
    focus: "Full time",
    image: "/doctors/govindhu.jpg",
  },
  {
    name: "Dr. Karri Divya",
    qualification: "MS OBG",
    department: "Obstetrics & Gynecology",
    focus: "Full time",
    image: "/doctors/divya.jpg",
  },
  {
    name: "Dr. Vatturi Satish Kummar",
    qualification: "DNB Anastesia",
    department: "Anesthesia",
    focus: "Full time",
    image: "/doctors/satish.jpg",
  },
  {
    name: "Dr. Unnagiri Adhinarayana",
    qualification: "MD-Cardiology",
    department: "Cardiology",
    focus: "Every Monday & Wednesday",
    image: "/doctors/adinarayna.jpg",
  },
  {
    name: "Dr. T. Venkateswara Rao",
    qualification: "MD-Cardiology",
    department: "Cardiology",
    focus: "Every Tuesday & Thursday",
    image: "/doctors",
  },
  {
    name: "Dr. Adabala Gopi Krishna",
    qualification: "MD DM",
    department: "Neurology",
    focus: "Every Thursday",
    image: "/doctors/gopikrishna.jpg",
  },
  {
    name: "Dr. A. Aditya Satya Prasanna",
    qualification: "MD DM",
    department: "Gastrologist & Hepatologist",
    focus: "Every Friday",
    image: "/doctors/satya.png",
  },
  {
    name: "Dr. Penmatcha Tejo Krishna",
    qualification: "MD DM",
    department: "Nephrology",
    focus: "Every Tuesday",
    image: "/doctors/tejo.jpg",
  },
  {
    name: "Dr. Lingolu Chandu",
    qualification: "MD.MCH",
    department: "Neuro Surgeon",
    focus: "Every Wednesday",
    image: "/doctors/chandu.jpg",
  },
  {
    name: "Dr. Battula Venkatesh",
    qualification: "M.B.B.S MS",
    department: "E.N.T",
    focus: "Every Wednesday",
    image: "/doctors/vekatesh.jpg",
  },
  {
    name: "Dr. Alice Y Elenor",
    qualification: "MD DVL",
    department: "COSMETIC Dermatologist",
    focus: "Every Friday",
    image: "/doctors/elice.jpg",
  },
  {
    name: "Dr. Ganta Praveen Nath",
    qualification: "M.B.B.S DNB",
    department: "Pulomonology",
    focus: "Visiting Doctors",
    image: "/doctors/praveen.jpg",
  },
  {
    name: "Dr. T. Abilash",
    qualification: "MS",
    department: "General Surgeon",
    focus: "Visiting Doctors",
    image: "/doctors/abhilash.jpg",
  },
  {
    name: "Dr. P.S. Subash",
    qualification: "MS MCH",
    department: "Plastic & Cosmetic Surgeon",
    focus: "Visiting Doctors",
    image: "/doctors/subash.jpg",
  },
  {
    name: "Dr. Saladi Naga Nithin",
    qualification: "MS",
    department: "General Surgeon",
    focus: "Visiting Doctors",
    image: "/doctors/naga.jpg",
  },
  {
    name: "Dr. A.N. Murthy",
    qualification: "BDS MDS",
    department: "Facial Surgeon",
    focus: "Visiting Doctors",
    image: "/doctors/moorthy.jpg",
  },
  {
    name: "Dr. Pulla Prasad",
    qualification: "M.S MCH",
    department: "Urology",
    focus: "Visiting Doctors",
    image: "/doctors/prasad.jpg",
  },
];

export default function Doctors() {
  return (
    <section className="py-20 bg-gray-50" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Expert Team
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced specialists dedicated to providing you with the
            best possible care
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
                  className="w-full h-full object-contain"
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
                    <MapPin className="w-4 h-4" style={{ color: "#00697d" }} />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#00697d" }}
                    >
                      {doctor.department}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Focus: {doctor.focus}</p>
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
