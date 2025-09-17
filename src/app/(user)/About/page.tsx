"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hotel-room-1.jpg"
            alt="B Capital Hotel"
            fill
            className="object-cover scale-105 brightness-90"
          />
          <div className="absolute inset-0 bg-black/40 animate-pulse-slow" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white  animate-fade-in">
            About B Capital Hotel
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-sm animate-fade-in delay-200">
            Elegance, comfort, and unforgettable experiences in the heart of Addis Ababa
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Since our founding, B Capital Hotel has been a symbol of luxury and impeccable hospitality.
            We combine modern amenities with classic elegance, ensuring every guest feels at home.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our dedicated team ensures every stay is exceptional, with attention to detail,
            comfort, and service that exceeds expectations. From business travelers to vacationers,
            every experience is curated with sophistication and care.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 animate-fade-in">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Hospitality", desc: "Every guest is treated like family with warm, personalized service." },
              { icon: Award, title: "Excellence", desc: "We maintain the highest standards in every aspect of our service." },
              { icon: Clock, title: "Reliability", desc: "Dependable and consistent service that exceeds expectations." },
              { icon: Heart, title: "Care", desc: "Genuine concern for our guests’ comfort and satisfaction." },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-tr from-white via-gray-50 to-white border-0 text-center rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
                >
                  <CardContent className="p-8">
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                      <Icon className="h-10 w-10 text-blue-600 group-hover:text-blue-800 transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
              Our Commitment
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              At B Capital Hotel, we promise an exceptional experience, blending modern luxury,
              heartfelt hospitality, and meticulous attention to every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {[
                "Tailored service for every guest",
                "Modern amenities for comfort and convenience",
                "Prime city-center location",
                "Commitment to sustainability and excellence",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700">
              <Image
                src="/images/restaurant-2.jpg"
                alt="Hotel Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease forwards; }
        .animate-fade-in-up { animation: fade-in 1s ease forwards; }
        .animate-pulse-slow { animation: pulse 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
