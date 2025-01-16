"use client"

import React from 'react';
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from 'next/link';
import Footer from '@/components/footer';
import AnimatedGradientText from '@/components/animated-text';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="h-12 w-12" />,
      title: "Phone",
      description: "Talk to our team",
      value: "Phone number",
      color: "text-blue-500",
      gradientFrom: "from-blue-500",
      gradientTo: "to-purple-500"
    },
    {
      icon: <Mail className="h-12 w-12" />,
      title: "Email",
      description: "Send us a message",
      value: "Email",
      color: "text-purple-500",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500"
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Office",
      description: "Come visit us",
      value: "Street name",
      color: "text-green-500",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500"
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-transparent">
        <div className="max-w-[1400px] mx-auto px-4 py-24">
          <div className="text-center mb-20">
            <div className="flex justify-center gap-4 mb-6">
              <Phone className="h-8 w-8 text-blue-500 animate-pulse" />
              <Mail className="h-8 w-8 text-purple-500 animate-pulse delay-75" />
              <MapPin className="h-8 w-8 text-green-500 animate-pulse delay-150" />
            </div>
            <AnimatedGradientText as="h1" className="text-6xl">Contact Us</AnimatedGradientText>
            <p className="mt-6 text-2xl text-zinc-400">
              Get in touch with our team today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method) => (
              <div key={method.title} className="relative group">
                <Card className="h-full bg-[#111111] border-zinc-800 transition-all duration-300 hover:border-zinc-600 hover:shadow-xl hover:transform hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className={`flex justify-center ${method.color} transition-all duration-300 group-hover:scale-110`}>
                      {method.icon}
                    </div>
                    <CardTitle className="text-3xl font-bold text-white mt-6">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-8">
                    <p className="text-zinc-400 mb-4 text-lg">
                      {method.description}
                    </p>
                    <p className="text-white text-xl font-semibold">
                      {method.value}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto bg-[#111111] border-zinc-800 transition-all duration-300 hover:border-zinc-600">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white">
                <AnimatedGradientText as="h1" className="text-4xl">Send us a message</AnimatedGradientText>
              </CardTitle>
              <p className="text-zinc-400 mt-2">
                We'll get back to you as soon as possible
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-zinc-600 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-zinc-600 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-zinc-600 focus:outline-none transition-colors duration-300 min-h-32"
                    placeholder="How can we help?"
                  />
                </div>
                <Button 
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white transition-all duration-300"
                  size="lg"
                >
                  Send Message <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="border-t border-zinc-800 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <AnimatedGradientText as="h1" className="text-5xl">Still have questions?</AnimatedGradientText>
          <p className="text-xl text-zinc-400 mb-8">
            Check out our frequently asked questions or reach out to our support team.
          </p>
          <Link href="/faq">
            <Button 
              size="lg" 
              className="bg-zinc-800 hover:bg-zinc-700 text-white transition-all duration-300"
            >
              View FAQ <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}