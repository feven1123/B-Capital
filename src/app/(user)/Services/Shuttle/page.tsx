'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Car, Clock, Users, Calendar, MapPin } from "lucide-react";

const shuttleFeatures = [
  { icon: Car, title: "Comfortable Vehicles", desc: "Modern and spacious shuttles with air conditioning for a smooth ride." },
  { icon: Clock, title: "Flexible Schedule", desc: "Multiple daily departures to fit your travel plans." },
  { icon: Users, title: "Group Services", desc: "Shuttles for small and large groups with comfortable seating arrangements." },
];

const shuttleRoutes = [
  { icon: MapPin, title: "Addis Ababa – Bole Airport", desc: "Frequent trips connecting the city center to the airport." },
  { icon: Calendar, title: "City Tours", desc: "Customizable routes for sightseeing and corporate events." },
  { icon: MapPin, title: "Hotel Pickups & Drop-offs", desc: "Convenient hotel transfers for guests staying at B Capital Hotel." },
];

export default function ShuttlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/airport-shuttle.png"
            alt="Shuttle Service"
            fill
            className="object-cover scale-105 brightness-90"
          />
          <div className="absolute inset-0 bg-black/40 animate-pulse-slow" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white animate-fade-in">
            Shuttle Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-sm animate-fade-in delay-200">
            Reliable and comfortable shuttle services to connect you across the city
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
            Shuttle Features
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in delay-200">
            Our shuttle service ensures safe, timely, and comfortable transportation for all guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shuttleFeatures.map((feature, index) => {
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

      {/* Routes Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto bg-gray-100 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
            Shuttle Routes
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in delay-200">
            Choose from a variety of routes designed to make your travel seamless and convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shuttleRoutes.map((route, index) => {
            const Icon = route.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{route.title}</h3>
                <p className="text-gray-600">{route.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Booking Info Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
          How to Book
        </h2>
        <p className="text-lg text-gray-700 mb-12 animate-fade-in delay-200">
          Reserve your shuttle seat easily. Call us or book online to ensure a guaranteed ride.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {["Call: 251911123456", "Online Booking", "Hotel Front Desk"].map((method, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-500 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{method}</h3>
              <p className="text-gray-600">Quick and convenient for every guest</p>
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
