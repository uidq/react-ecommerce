"use client"

import { Button } from '@nextui-org/button';
import { ArrowRight, HelpCircle, MessageCircle, Search, Shield, Check, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Footer from '@/components/footer';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: "What hosting solutions do you offer?",
      answer: "We provide a range of VPS solutions optimized for different needs, from basic hosting to enterprise-grade deployments. All our solutions come with built-in security features and anonymous hosting capabilities.",
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      category: "services"
    },
    {
      question: "How secure is your platform?",
      answer: "Our platform implements enterprise-grade security measures including end-to-end encryption, regular security audits, and advanced threat detection. We prioritize your privacy and data security at every level.",
      icon: <Shield className="w-5 h-5 text-green-500" />,
      category: "security"
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support through multiple channels, including live chat, email, and a comprehensive knowledge base. Our expert team is always ready to help with any issues or questions.",
      icon: <MessageCircle className="w-5 h-5 text-purple-500" />,
      category: "support"
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can easily upgrade or downgrade your plan at any time through our intuitive dashboard. Changes take effect immediately, and billing is prorated accordingly.",
      icon: <Check className="w-5 h-5 text-blue-500" />,
      category: "billing"
    },
    {
      question: "How does anonymous hosting work?",
      answer: "Our anonymous hosting service ensures your privacy through multiple layers of protection, including encrypted connections, anonymous payment options, and no-logs policy. Your identity and data remain completely private.",
      icon: <Shield className="w-5 h-5 text-orange-500" />,
      category: "security"
    },
    {
      question: "What's your uptime guarantee?",
      answer: "We maintain a 99.9% uptime guarantee for all our hosting services. Our infrastructure is built on redundant systems with automatic failover to ensure maximum reliability.",
      icon: <Check className="w-5 h-5 text-green-500" />,
      category: "services"
    },
    {
      question: "Do you follow KYC processes?",
      answer: "No, we do not follow traditional KYC processes. We have designed our service to operate without requiring personal identification or sensitive user information.",
      icon: <AlertCircle className="w-5 h-5 text-purple-500" />,
      category: "security"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#0a0a0a] flex flex-col min-h-screen">
      <section className="relative border-b border-zinc-800 bg-gradient-to-b from-[#111111] to-[#0a0a0a] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <HelpCircle className="w-16 h-16 text-blue-500 animate-bounce" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Find answers to common questions about our hosting solutions, security features, and platform capabilities.
            </p>
            
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur group-hover:opacity-75 transition-opacity" />
              <div className="relative flex items-center bg-[#111111] border border-zinc-800 rounded-lg px-4 py-2 hover:border-zinc-700 transition-colors">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  className="w-full bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem 
                key={index + 1} 
                value={`item-${index + 1}`}
                className="border border-zinc-800 rounded-lg bg-[#111111] px-4 hover:border-zinc-700 transition-all duration-300 group"
              >
                <AccordionTrigger className="text-gray-200 hover:text-gray-200 text-lg group-hover:text-blue-500 transition-colors">
                  <div className="flex items-center gap-3">
                    {faq.icon}
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative border-b border-zinc-800 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Contact our support team for personalized assistance with any concerns.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity"
            >
              Contact Support <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}