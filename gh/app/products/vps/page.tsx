"use client"

import React, { useState } from 'react';
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, CreditCard, Building2, User, Globe } from "lucide-react";
import Link from 'next/link';

const VPSTier = ({ name, price, description, features, buttonText }: any) => {
  return (
    <Card className="flex flex-col h-full bg-[#111111] border-zinc-800 hover:border-zinc-600 transition-all duration-300">
      <CardHeader className="text-center space-y-4">
        <CardTitle className="text-4xl font-bold text-white">{name}</CardTitle>
        <CardDescription className="text-2xl text-zinc-400">${price} per month</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow px-8">
        <p className="text-zinc-500 mb-12 text-center text-lg">{description}</p>
        <ul className="space-y-6">
          {features.map((feature: any, index: any) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-lg text-zinc-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-8 pb-8">
        <VPSDialog buttonText={buttonText} tier={name} price={price} />
      </CardFooter>
    </Card>
  );
};

const VPSDialog = ({ buttonText, tier, price }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full gap-2 border-1 border-zinc-700 bg-zinc-900">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-[#111111] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">Subscribe to {tier} Plan</DialogTitle>
          <DialogDescription className="text-lg text-zinc-400">
            Get started with our {tier} plan for ${price} per month
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Payment Methods</h3>
            <div className="grid grid-cols-1 gap-4">
              <Button variant="bordered" className="w-full h-[50px] justify-start border-1 border-zinc-700 bg-zinc-900">
                <CreditCard className="mr-3 h-5 w-5" />
                Credit Card
              </Button>
              <Button variant="bordered" className="w-full h-[50px] justify-start border-1 border-zinc-700 bg-zinc-900">
                <Globe className="mr-3 h-5 w-5" />
                Paypal
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Additional Information</h3>
            <ul className="list-disc pl-6 space-y-3 text-lg text-zinc-400">
              <li>30-day money-back guarantee</li>
              <li>24/7 customer support</li>
              <li>Instant access to all features</li>
              <li>No hidden fees</li>
            </ul>
          </div>
          
          <Button className="w-full gap-2 border-1 border-zinc-700 bg-zinc-900">Complete Subscription</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function VPSPage() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "24/7 support",
        "1GB storage"
      ],
      buttonText: "Purchase"
    },
    {
      name: "Professional",
      price: "79",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom domain"
      ],
      buttonText: "Purchase"
    },
    {
      name: "Enterprise",
      price: "199",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited everything",
        "White-label solution",
        "Dedicated support",
        "100GB storage",
        "API access",
        "Custom integrations"
      ],
      buttonText: "Purchase"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className={`${title({ size: "lg" })} text-white`}>Pricing</h1>
          <p className="mt-6 text-2xl text-zinc-400">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier) => (
            <VPSTier key={tier.name} {...tier} />
          ))}
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Need something different?</h2>
          <p className="text-xl text-zinc-400 mb-8">
            Contact our sales team for a custom plan tailored to your needs.
          </p>
          <Link href={"/"}>
            <Button 
              variant="bordered" 
              size="lg" 
              className="gap-2 border-1 border-zinc-700 bg-zinc-900"
            >
            <User className="mr-2 h-5 w-5" />
              Contact us!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}