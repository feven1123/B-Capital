'use client';

import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Car, Coffee, Tv, Bath, AirVent } from "lucide-react";
import Image from "next/image";

const roomTypes = [
  {
    name: "Standard Room",
    price: "$120",
    image: "/images/hotel-room-1.jpg",
    features: ["Free WiFi", "Air Conditioning", "Flat Screen TV", "Private Bathroom"],
    description: "Comfortable and modern standard room perfect for business or leisure travelers.",
  },
  {
    name: "Deluxe Room",
    price: "$180",
    image: "/images/hotel-room-2.jpg",
    features: ["Free WiFi", "Air Conditioning", "Flat Screen TV", "Private Bathroom", "Mini Bar", "City View"],
    description: "Spacious deluxe room with premium amenities and stunning city views.",
  },
  {
    name: "Executive Suite",
    price: "$280",
    image: "/images/hotel-room-1.jpg",
    features: [
      "Free WiFi",
      "Air Conditioning",
      "Flat Screen TV",
      "Private Bathroom",
      "Mini Bar",
      "Living Area",
      "Work Desk",
    ],
    description: "Luxurious executive suite with separate living area, perfect for extended stays.",
  },
];

const amenities = [
  { icon: Wifi, name: "Free WiFi" },
  { icon: Car, name: "Free Parking" },
  { icon: Coffee, name: "Coffee Maker" },
  { icon: Tv, name: "Flat Screen TV" },
  { icon: Bath, name: "Private Bathroom" },
  { icon: AirVent, name: "Air Conditioning" },
];

export default function RoomPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/hotel-room-1.jpg" alt="Hotel Room Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white animate-fadeUp mb-4 drop-shadow-lg">
            Our Rooms & Suites
          </h1>
          <p className="text-xl md:text-2xl text-pretty max-w-2xl mx-auto animate-fadeUp-delay">
            Experience comfort and luxury in our thoughtfully designed accommodations
          </p>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Perfect Room</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From comfortable standard rooms to luxurious suites, we have the perfect accommodation for every guest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {roomTypes.map((room, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-xl"
              >
                <div className="aspect-video relative overflow-hidden rounded-t-xl">
                  <img
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-xl" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{room.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{room.price}</div>
                      <div className="text-sm text-muted-foreground">per night</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-pretty">{room.description}</p>

                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-foreground animate-fadeIn delay-[${featureIndex * 100}ms]"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300">
                    Book This Room
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Room Amenities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Every room comes equipped with modern amenities to ensure your comfort
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 text-balance animate-fadeIn">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 text-pretty animate-fadeIn delay-200">
            Experience the comfort and luxury of B Capital Hotel. Book your room today and enjoy our exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Check Availability
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Call Us: 251911123456
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
