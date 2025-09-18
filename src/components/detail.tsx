"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Utensils, Calendar, Star } from "lucide-react";

export default function HotelPreviewsFancy() {
  const rooms = [
    {
      img: "/images/hotel-room-1.jpg",
      title: "Deluxe Rooms",
      desc: "Spacious rooms with modern amenities",
    },
    {
      img: "/images/hotel-room-2.jpg",
      title: "Executive Suites",
      desc: "Premium suites for business travelers",
    },
  ];

  const events = ["Wedding Receptions", "Corporate Events", "Private Parties"];

  return (
    <div className="space-y-36">
      {/* Rooms Preview */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 relative inline-block">
            Comfortable Accommodations
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-32 h-1 bg-blue-600 rounded-full animate-pulse"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-20">
            Modern rooms designed for your comfort and relaxation
          </p>

          {/* Floating Room Cards */}
          <div className="relative flex justify-center items-center gap-10 flex-wrap md:flex-nowrap">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`relative flex-1 min-w-[300px] h-96 rounded-3xl overflow-hidden shadow-2xl group transition-transform duration-500 hover:-translate-y-6 hover:scale-105 hover:shadow-3xl`}
                style={{ zIndex: index + 10 }}
              >
                <Image
                  src={room.img}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent flex items-end p-6 rounded-3xl">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{room.title}</h3>
                    <p className="text-lg">{room.desc}</p>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.5)] opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/Rooms">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Preview */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 relative inline-block">
              Exquisite Dining Experience
              <span className="absolute -bottom-2 left-0 w-28 h-1 bg-blue-600 rounded-full animate-pulse"></span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Indulge in our carefully crafted menu featuring local and international cuisine. Our elegant restaurant
              provides the perfect atmosphere for both business meals and romantic dinners.
            </p>

            <div className="flex items-center space-x-4 text-gray-800 mb-4">
              <Utensils className="h-6 w-6 text-blue-600" />
              <span>Fine Dining Restaurant</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-800 mb-6">
              <Calendar className="h-6 w-6 text-blue-600" />
              <span>Open Daily 6:00 AM - 11:00 PM</span>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link href="/Restaurant">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all">
                  View Restaurant
                </Button>
              </Link>
              <Link href="/Menu">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-all"
                >
                  See Menu
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/restaurant-1.jpg"
              alt="Restaurant Interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/event-hall.jpg"
              alt="Event Hall"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          <div className="space-y-6 relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 relative inline-block">
              Perfect Venue for Events
              <span className="absolute -bottom-2 left-0 w-28 h-1 bg-blue-600 rounded-full animate-pulse"></span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Host your special occasions in our elegant event spaces. From intimate gatherings to grand celebrations,
              we provide the perfect setting with professional service.
            </p>

            <div className="space-y-4">
              {events.map((event, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 text-gray-800 bg-white/50 backdrop-blur-md rounded-xl p-3 shadow-md hover:shadow-xl transition-shadow"
                >
                  <Star className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">{event}</span>
                </div>
              ))}
            </div>

            <Link href="/Events">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg mt-6 transition-all transform hover:-translate-y-1">
                Plan Your Event
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
