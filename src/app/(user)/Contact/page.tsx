"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/hotel-exterior-3.jpg"
          alt="Contact Hero Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Contact B Capital Hotel
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/90 leading-relaxed"
          >
            Reach out for reservations, inquiries, or any assistance. We&apos;re here to make your stay extraordinary.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We&apos;re available to answer questions, take reservations, or provide any help you need. Reach us through any of the methods below.
            </p>

            <div className="space-y-6">
              {[{
                icon: <Phone className="h-8 w-8 text-primary" />,
                title: "Phone",
                details: ["+251 911 123 456", "Available 24/7"]
              }, {
                icon: <Mail className="h-8 w-8 text-primary" />,
                title: "Email",
                details: ["info@bcapitalhotel.com", "Response within 24 hours"]
              }, {
                icon: <MapPin className="h-8 w-8 text-primary" />,
                title: "Address",
                details: ["123 Capital Street", "Dire City Center, State 12345"]
              }, {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Front Desk Hours",
                details: ["24 hours a day", "Always here to help"]
              }].map((item, idx) => (
                <Card
                  key={idx}
                  className="bg-card border-border hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    {item.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      {item.details.map((d, i) => (
                        <p key={i} className="text-muted-foreground text-sm">{d}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-input border-border" />
                  <Input placeholder="Last Name" className="bg-input border-border" />
                </div>
                <Input type="email" placeholder="Email Address" className="bg-input border-border" />
                <Input type="tel" placeholder="Phone Number" className="bg-input border-border" />
                <Input placeholder="Subject" className="bg-input border-border" />
                <Textarea placeholder="Your Message" rows={5} className="bg-input border-border" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
  Send Message
</Button>

              </CardContent>
            </Card>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
