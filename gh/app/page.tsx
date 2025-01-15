import { Button } from '@nextui-org/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Laptop, Lock, Zap, Shield, Star } from 'lucide-react';
import Link from 'next/link';

import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <nav className="border-b bg-[#0a0a0a]">
        <div className="bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                Build something amazing
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Host your needs securely and anonymously with our cutting-edge VPS solutions and intuitive management tools, designed to make hosting faster and more reliable than ever.
              </p>
              <div className="flex justify-center gap-4">
                <Link href={"/products"}>
                  <Button size="lg" className="gap-2 border-1 border-zinc-700 bg-zinc-900">
                    Start Building <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="bordered" className='border-1'>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="border-b bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to secure and maintain anonymous hosting
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fast Development',
                description: 'Build and iterate quickly with our pre-built components and utilities.',
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: 'Modern Design',
                description: 'Beautiful, responsive components that follow modern design principles.',
                icon: <Star className="w-6 h-6" />
              },
              {
                title: 'Secure by Default',
                description: 'Enterprise-grade security built into every component.',
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: 'Developer Experience',
                description: 'Intuitive APIs and comprehensive documentation for the best DX.',
                icon: <Laptop className="w-6 h-6" />
              },
              {
                title: 'Type Safe',
                description: 'Full TypeScript support with automated type inference.',
                icon: <Lock className="w-6 h-6" />
              },
              {
                title: 'Customizable',
              description: 'Easily extend and customize components to match your brand.',
                icon: <Star className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <Card key={index} className="border-1 bg-[#111111] shadow-lg hover:border-zinc-600 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className='text-gray-200'>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </nav>

      <div className="bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of developers building amazing applications.
          </p>
          <Link href={"/products"}>
            <Button size="lg" className="gap-2 border-1 border-zinc-700 bg-zinc-900">
              Start Building <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
