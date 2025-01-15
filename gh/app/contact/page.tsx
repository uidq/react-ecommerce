import React from 'react';
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from 'next/link';

import Footer from '@/components/footer';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone",
      description: "Talk to our team",
      value: "Phone number",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      description: "Send us a message",
      value: "Email",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Office",
      description: "Come visit us",
      value: "Street name",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className={`${title({ size: "lg" })} text-white`}>Contact Us</h1>
          <p className="mt-6 text-2xl text-zinc-400">
            Get in touch with our team today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method) => (
            <Card key={method.title} className="bg-[#111111] border-zinc-800 transition-all duration-300 hover:border-zinc-600 hover:shadow-lg">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                  {method.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-zinc-400 mb-4">{method.description}</p>
                <p className="text-white text-lg">{method.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto bg-[#111111] border-zinc-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white text-center">
              Send us a message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-zinc-600 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-zinc-600 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Message</label>
                <textarea 
                  className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-zinc-600 focus:outline-none min-h-32"
                  placeholder="How can we help?"
                />
              </div>
              <Button 
                className="w-full gap-2 border-1 border-zinc-700 bg-zinc-900 hover:bg-zinc-800"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      
      
      <section className="border-t border-zinc-800 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Contact our support team for personalized assistance with any concerns.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2 border-1 border-zinc-700 bg-zinc-900">
              Contact Support <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}