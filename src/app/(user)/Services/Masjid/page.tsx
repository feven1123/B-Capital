'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Clock, Users, Heart, BookOpen } from "lucide-react";

const masjidFeatures = [
  { icon: BookOpen, title: "Spacious Prayer Hall", desc: "Comfortable and serene environment for daily prayers and congregational gatherings." },
  { icon: Clock, title: "Flexible Prayer Times", desc: "Open from early morning to late evening to accommodate all worshippers." },
  { icon: Users, title: "Community Services", desc: "Spaces for religious classes, meetings, and community events." },
];

const masjidAmenities = [
  { icon: Heart, title: "Clean & Safe", desc: "Regular cleaning and safety measures ensure a welcoming space for all." },
  { icon: BookOpen, title: "Learning Facilities", desc: "Dedicated areas for Quranic and religious education." },
];

export default function MasjidPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/prying room.jpg"
            alt="Indoor Masjid"
            fill
            className="object-cover scale-105 brightness-90"
          />
          <div className="absolute inset-0 bg-black/40 animate-pulse-slow" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white animate-fade-in">
            Indoor Masjid
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-sm animate-fade-in delay-200">
            A peaceful and serene space for prayers, reflection, and community activities
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
            Masjid Features
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in delay-200">
            Our masjid provides a welcoming environment with modern facilities for worship and learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {masjidFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto bg-gray-100 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
            Amenities
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in delay-200">
            Facilities available to enhance your experience and comfort while visiting the masjid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {masjidAmenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Visit Info Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
          Visit Information
        </h2>
        <p className="text-lg text-gray-700 mb-12 animate-fade-in delay-200">
          Open daily for prayers, community events, and educational programs. Everyone is welcome.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {["Daily Prayer: 5 AM - 9 PM", "Community Classes", "Guided Tours Available"].map((info, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-500 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{info}</h3>
              <p className="text-gray-600">Welcoming all visitors</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in 1s ease-out forwards;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
