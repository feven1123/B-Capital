'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Dumbbell, Clock, Heart, Users, Calendar, Star } from "lucide-react";

const gymFeatures = [
  { icon: Dumbbell, title: "Modern Equipment", desc: "State-of-the-art gym machines and free weights for all fitness levels." },
  { icon: Clock, title: "Flexible Hours", desc: "Open 24/7 so you can train whenever it fits your schedule." },
  { icon: Heart, title: "Personal Training", desc: "Certified trainers to guide you in reaching your fitness goals." },
];

const gymClasses = [
  { icon: Users, title: "Group Classes", desc: "Yoga, Pilates, Zumba, and more for group motivation." },
  { icon: Calendar, title: "Scheduled Workouts", desc: "Structured workout plans to help you stay consistent." },
  { icon: Star, title: "Expert Trainers", desc: "Professional trainers with years of experience in fitness." },
];

export default function GymPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gym.jpg"
            alt="Gym"
            fill
            className="object-cover scale-105 brightness-90"
          />
          <div className="absolute inset-0 bg-black/40 animate-pulse-slow" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white animate-fade-in">
            Gym & Fitness Center
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-sm animate-fade-in delay-200">
            Stay fit and healthy with our modern gym facilities and professional guidance
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
            Gym Features
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in delay-200">
            Our gym is designed to provide the best fitness experience for all our guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gymFeatures.map((feature, index) => {
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

      {/* Classes & Trainers Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto bg-gray-100 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
            Classes & Trainers
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in delay-200">
            From group classes to personal coaching, our gym offers a complete fitness experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gymClasses.map((cls, index) => {
            const Icon = cls.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{cls.title}</h3>
                <p className="text-gray-600">{cls.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gym Image Section */}
      <section className="py-24 px-4">
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700 max-w-5xl mx-auto">
          <Image
            src="/images/gym.jpg"
            alt="Gym Interior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Membership Info */}
      <section className="py-24 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
          Membership Options
        </h2>
        <p className="text-lg text-gray-700 mb-12 animate-fade-in delay-200">
          Join our gym with flexible membership plans that suit your lifestyle. Enjoy unlimited access to all gym facilities, classes, and personal training sessions.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {["Monthly: $50", "Quarterly: $135", "Yearly: $500"].map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-500 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan}</h3>
              <p className="text-gray-600">Full access to gym, classes & training</p>
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
