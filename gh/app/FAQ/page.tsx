import { Button } from '@nextui-org/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Footer from '@/components/footer';

export default function FAQ() {
  const faqs = [
    {
      question: "What hosting solutions do you offer?",
      answer: "We provide a range of VPS solutions optimized for different needs, from basic hosting to enterprise-grade deployments. All our solutions come with built-in security features and anonymous hosting capabilities."
    },
    {
      question: "How secure is your platform?",
      answer: "Our platform implements enterprise-grade security measures including end-to-end encryption, regular security audits, and advanced threat detection. We prioritize your privacy and data security at every level."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support through multiple channels, including live chat, email, and a comprehensive knowledge base. Our expert team is always ready to help with any issues or questions."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can easily upgrade or downgrade your plan at any time through our intuitive dashboard. Changes take effect immediately, and billing is prorated accordingly."
    },
    {
      question: "How does anonymous hosting work?",
      answer: "Our anonymous hosting service ensures your privacy through multiple layers of protection, including encrypted connections, anonymous payment options, and no-logs policy. Your identity and data remain completely private."
    },
    {
      question: "What's your uptime guarantee?",
      answer: "We maintain a 99.9% uptime guarantee for all our hosting services. Our infrastructure is built on redundant systems with automatic failover to ensure maximum reliability."
    },
    {
      question: "Do you follow KYC processes?",
      answer: "No, we do not follow traditional KYC processes. We have designed our service to operate without requiring personal identification or sensitive user information."
    }
  ];

  return (
    <div className="bg-[#0a0a0a] flex flex-col">
      <section className="border-b border-zinc-800 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Find answers to common questions about our hosting solutions, security features, and platform capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index + 1} 
                value={`item-${index + 1}`}
                className="border border-zinc-800 rounded-lg bg-[#111111] px-4"
              >
                <AccordionTrigger className="text-gray-200 hover:text-gray-200 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-[#111111]">
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