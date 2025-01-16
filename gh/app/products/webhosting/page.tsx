"use client"

import React, { useState, useEffect } from 'react';
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
import { Check, CreditCard, Building2, User, Globe, Globe2, Sparkles, Shield } from "lucide-react";
import Link from 'next/link';

interface GlobeProps {
  id: number;
  left: number;
  duration: number;
  size: number;
  opacity: number;
}

const FallingGlobes = () => {
  const [globes, setGlobes] = useState<GlobeProps[]>([]);
  
  useEffect(() => {
    const createGlobe = () => {
      const newGlobe: GlobeProps = {
        id: Math.random(),
        left: Math.random() * 100,
        duration: 7 + Math.random() * 7,
        size: 16 + Math.random() * 24,
        opacity: 0.1 + Math.random() * 0.2,
      };
      
      setGlobes(prev => [...prev, newGlobe]);
      setTimeout(() => {
        setGlobes(prev => prev.filter(globe => globe.id !== newGlobe.id));
      }, newGlobe.duration * 1000);
    };

    const interval = setInterval(createGlobe, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {globes.map(globe => (
        <div
          key={globe.id}
          className="absolute text-zinc-400"
          style={{
            left: `${globe.left}%`,
            top: '-48px',
            animation: `fall ${globe.duration}s linear`,
            fontSize: `${globe.size}px`,
            opacity: globe.opacity,
          }}
        >
          <Globe2 />
        </div>
      ))}
    </div>
  );
};

interface WebTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}

const WebTier = ({ name, price, description, features, buttonText, isPopular }: WebTierProps) => {
  return (
    <div className="relative group">
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
          Most Popular
        </div>
      )}
      <Card className="flex flex-col h-full bg-[#111111] border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            {isPopular ? (
              <Sparkles className="h-12 w-12 text-purple-500 animate-pulse" />
            ) : name === "Enterprise" ? (
              <Building2 className="h-12 w-12 text-blue-500" />
            ) : (
              <Shield className="h-12 w-12 text-green-500" />
            )}
          </div>
          <CardTitle className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {name}
          </CardTitle>
          <CardDescription className="text-3xl font-bold text-white">
            ${price} <span className="text-lg text-zinc-400">per month</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow px-8">
          <p className="text-zinc-500 mb-12 text-center text-lg">{description}</p>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-lg text-zinc-300">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="px-8 pb-8">
          <WebDialog buttonText={buttonText} tier={name} price={price} />
        </CardFooter>
      </Card>
    </div>
  );
};

interface WebDialogProps {
  buttonText: string;
  tier: string;
  price: string;
}

const WebDialog = ({ buttonText, tier, price }: WebDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity">
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-[#111111] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Subscribe to {tier} Plan
          </DialogTitle>
          <DialogDescription className="text-lg text-zinc-400">
            Get started with our {tier} plan for ${price} per month
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Payment Methods</h3>
            <div className="grid grid-cols-1 gap-4">
              <Button 
                variant="bordered" 
                className="w-full h-[50px] justify-start border-1 border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <CreditCard className="mr-3 h-5 w-5" />
                Credit Card
              </Button>
              <Button 
                variant="bordered" 
                className="w-full h-[50px] justify-start border-1 border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <Globe className="mr-3 h-5 w-5" />
                Paypal
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Additional Information</h3>
            <ul className="space-y-3 text-lg text-zinc-400">
              {[
                "30-day money-back guarantee",
                "24/7 customer support",
                "Instant access to all features",
                "No hidden fees"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <Button className="w-full gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity">
            Complete Subscription
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function WebPage() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "2.50",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "24/7 support",
        "1GB storage"
      ],
      buttonText: "Get Started",
      isPopular: false
    },
    {
      name: "Professional",
      price: "5",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom domain"
      ],
      buttonText: "Get Started",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "9",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited everything",
        "White-label solution",
        "Dedicated support",
        "100GB storage",
        "API access",
        "Custom integrations"
      ],
      buttonText: "Get Started",
      isPopular: false
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <FallingGlobes />
      <div className="max-w-[1400px] mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-20">
          <h1 className={`${title({ size: "lg" })} bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500`}>
            Pricing
          </h1>
          <p className="mt-6 text-2xl text-zinc-400">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier) => (
            <WebTier key={tier.name} {...tier} />
          ))}
        </div>
        
        <div className="text-center relative">
          <div className="absolute inset-0 blur-xl -z-10" />
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Need something different?
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Contact our sales team for a custom plan tailored to your needs.
          </p>
          <Link href={"/"}>
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity"
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

const styles = `
  @keyframes fall {
    from {
      transform: translateY(-48px) rotate(0deg);
    }
    to {
      transform: translateY(100vh) rotate(360deg);
    }
  }
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}