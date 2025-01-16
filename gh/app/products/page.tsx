"use client"

import React from 'react';
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cloud, Globe2, ArrowRight, Check, Star, Shield, Zap } from "lucide-react";
import Link from 'next/link';

import AnimatedGradientText from '@/components/animated-text';

export default function ProductsPage() {
  const products = [
    {
      icon: <Server className="h-12 w-12" />,
      name: "VPS Hosting",
      description: "Virtual Private Servers with dedicated resources and full root access",
      href: "/products/vps",
      features: [
        "Full Root Access",
        "Dedicated Resources",
        "Custom OS Options",
        "DDoS Protection",
        "24/7 Support",
        "99.9% Uptime SLA"
      ],
      price: "10",
      popular: true,
      highlight: "Most Popular Choice",
      color: "text-blue-500",
      gradientFrom: "from-blue-500",
      gradientTo: "to-purple-500"
    },
    {
      icon: <Globe2 className="h-12 w-12" />,
      name: "Web Hosting",
      description: "Reliable web hosting solutions for websites of all sizes",
      href: "/products/webhosting",
      features: [
        "One-Click Installers",
        "Free SSL Certificates",
        "24/7 Support",
        "Daily Backups",
        "Unlimited Bandwidth",
        "5 Databases"
      ],
      price: "2.50",
      popular: false,
      highlight: "Great for Startups",
      color: "text-green-500",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500"
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      name: "Cloud Storage",
      description: "Secure and scalable cloud storage solutions for your data",
      href: "/products/cloud",
      features: [
        "Unlimited Bandwidth",
        "Automated Backups",
        "Global CDN",
        "File Versioning",
        "End-to-end Encryption",
        "API Access"
      ],
      price: "3",
      popular: false,
      highlight: "Enterprise Ready",
      color: "text-purple-500",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-transparent">
        <div className="max-w-[1400px] mx-auto px-4 py-24">
          <div className="text-center mb-20">
            <div className="flex justify-center gap-4 mb-6">
              <Server className="h-8 w-8 text-blue-500 animate-pulse" />
              <Globe2 className="h-8 w-8 text-purple-500 animate-pulse delay-75" />
              <Cloud className="h-8 w-8 text-green-500 animate-pulse delay-150" />
            </div>
              <AnimatedGradientText as="h1" className="text-6xl">Our Products</AnimatedGradientText>
            <p className="mt-6 text-2xl text-zinc-400">
              Choose from our range of premium hosting solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {products.map((product) => (
              <div key={product.name} className="relative group">
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <Link href={product.href}>
                  <Card className="h-full bg-[#111111] border-zinc-800 transition-all duration-300 hover:border-zinc-600 hover:shadow-xl hover:transform hover:-translate-y-1">
                    <CardHeader className="text-center pb-4">
                      <div className={`flex justify-center ${product.color} transition-all duration-300 group-hover:scale-110`}>
                        {product.icon}
                      </div>
                      <div className="mt-4">
                        <span className={`text-sm font-medium ${product.color}`}>
                          {product.highlight}
                        </span>
                      </div>
                      <CardTitle className="text-3xl font-bold text-white mt-2">
                        {product.name}
                      </CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-white">Starting at ${product.price}</span>
                        <span className="text-zinc-400">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-center px-8">
                      <p className="text-zinc-400 mb-8 text-lg">
                        {product.description}
                      </p>
                      <ul className="space-y-4 text-left mb-8">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-zinc-300">
                            <Check className={`h-5 w-5 ${product.color}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-zinc-400 mb-6">
              Not sure which plan is right for you? Contact our sales team for a personalized recommendation.
            </p>
            <Link href="/contact">
              <Button 
                className="bg-zinc-800 hover:bg-zinc-700 text-white transition-all duration-300"
                size="lg"
              >
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}