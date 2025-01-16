import React from 'react';
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Lightbulb, Target, ArrowRight } from "lucide-react";
import Link from 'next/link';

import Footer from '@/components/footer';

export default function AboutPage() {
  const companyFeatures = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Our Team",
      description: "Meet our passionate team of experts dedicated to delivering excellence in every project.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Our Mission",
      description: "Empowering businesses through innovative solutions and cutting-edge technology.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Vision",
      description: "Leading the industry in digital transformation and technological advancement.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className={`${title({ size: "lg" })} text-white`}>About Us</h1>
          <p className="mt-6 text-2xl text-zinc-400">
            Discover our story and what drives us forward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {companyFeatures.map((feature) => (
            <Card key={feature.title} className="bg-[#111111] border-zinc-800 transition-all duration-300 hover:border-zinc-600 hover:shadow-lg">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-zinc-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-[#111111] border-zinc-800 mb-20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white text-center">
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-zinc-400">
            <p>
              Founded with a vision to revolutionize the digital landscape, we've been at the forefront of technological innovation since our inception. Our journey began with a simple idea: to make technology more accessible and impactful for businesses of all sizes.
            </p>
            <p>
              Today, we're proud to serve clients worldwide, delivering cutting-edge solutions that drive real business results. Our team of experts brings together decades of combined experience in software development, design, and digital strategy.
            </p>
            <p>
              We believe in the power of technology to transform businesses and improve lives. This belief drives everything we do, from our innovative product development to our commitment to exceptional customer service.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <section className="border-t border-zinc-800 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can help transform your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2 border-1 border-zinc-700 bg-zinc-900 hover:bg-zinc-800">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}