"use client"

import React from 'react';
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cloud, Globe2, ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      icon: <Server className="h-12 w-12 mb-6" />,
      name: "VPS Hosting",
      description: "Virtual Private Servers with dedicated resources and full root access",
      href: "/products/vps",
      features: ["Full Root Access", "Dedicated Resources", "Custom OS Options"]
    },
    {
      icon: <Globe2 className="h-12 w-12 mb-6" />,
      name: "Web Hosting",
      description: "Reliable web hosting solutions for websites of all sizes",
      href: "/products/webhosting",
      features: ["One-Click Installers", "Free SSL Certificates", "24/7 Support"]
    },
    {
      icon: <Cloud className="h-12 w-12 mb-6" />,
      name: "Cloud Storage",
      description: "Secure and scalable cloud storage solutions for your data",
      href: "/products/cloud",
      features: ["Unlimited Bandwidth", "Automated Backups", "Global CDN"]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className={`${title({ size: "lg" })} text-white`}>Our Products</h1>
          <p className="mt-6 text-2xl text-zinc-400">
            Choose from our range of hosting solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <Link href={product.href} key={product.name} className="block">
              <Card className="h-full bg-[#111111] border-zinc-800 transition-all duration-300 hover:border-zinc-600 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center text-zinc-400">
                    {product.icon}
                  </div>
                  <CardTitle className="text-3xl font-bold text-white">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-8">
                  <p className="text-zinc-400 mb-8 text-lg">
                    {product.description}
                  </p>
                  <ul className="space-y-4 text-left mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-zinc-300">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}