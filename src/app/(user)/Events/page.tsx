"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Clock, Star, Heart, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const eventTypes = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Create magical moments with our elegant wedding packages",
    features: [
      "Bridal suite preparation",
      "Customized decorations",
      "Professional photography coordination",
      "Wedding cake service",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional venues for meetings, conferences, and corporate gatherings",
    features: ["Audio-visual equipment", "Business center access", "Catering services", "High-speed internet"],
  },
  {
    icon: Star,
    title: "Private Parties",
    description: "Celebrate special occasions in our beautifully appointed spaces",
    features: [
      "Flexible seating arrangements",
      "Custom menu options",
      "Entertainment coordination",
      "Dedicated event staff",
    ],
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/event-hall.jpg" alt="Event Hall" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 opacity-0 animate-fadeInSlide">
            Exceptional Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed opacity-0 animate-fadeInSlide delay-200">
            Create unforgettable memories in our elegant event spaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeInSlide delay-400">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300"
            >
              Plan Your Event
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Perfect for Every Occasion</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              From intimate gatherings to grand celebrations, we have the perfect space for your event
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eventTypes.map((eventType, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <eventType.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-foreground">{eventType.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center leading-relaxed">{eventType.description}</p>
                  <div className="space-y-2">
                    {eventType.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Facilities */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Event Facilities</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              State-of-the-art facilities to make your event a success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Capacity", desc: "Up to 200 guests" },
              { icon: Calendar, title: "Flexible Booking", desc: "7 days a week availability" },
              { icon: Clock, title: "Extended Hours", desc: "Events until midnight" },
              { icon: Star, title: "Full Service", desc: "Complete event planning" },
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-background border-border text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Ready to Plan Your Event?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Let our experienced event planning team help you create an unforgettable experience. Contact us today to
            discuss your requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300"
              >
                Contact Event Planner
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes fadeInSlide {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInSlide {
          animation: fadeInSlide 1s ease forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}
