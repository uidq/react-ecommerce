import { Button } from '@nextui-org/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Laptop, Lock, Zap, Shield, Star, Book, Activity, Users, Server } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/footer';
import AnimatedGradientText from '@/components/animated-text';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <nav className="border-b bg-[#0a0a0a]">
        <div className="bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-block animate-bounce mb-4">
                <Shield className="w-12 h-12 text-blue-500" />
              </div>
              <AnimatedGradientText as="h1" className="sm:text-6xl">Build something amazing</AnimatedGradientText>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Host your needs securely and anonymously with our cutting-edge VPS solutions and intuitive management tools, designed to make hosting faster and more reliable than ever.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/products">
                  <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                    Start Building <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="bordered" className="border-1 hover:bg-zinc-900">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-[#0a0a0a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Documentation',
                description: 'Explore our comprehensive guides and API references',
                icon: <Book className="w-6 h-6 text-blue-500" />,
                link: '/docs',
                color: 'from-blue-500 to-blue-700'
              },
              {
                title: 'System Status',
                description: 'Check our real-time system performance metrics',
                icon: <Activity className="w-6 h-6 text-green-500" />,
                link: '/status',
                color: 'from-green-500 to-green-700'
              },
              {
                title: 'About Us',
                description: 'Learn about our mission and values',
                icon: <Users className="w-6 h-6 text-purple-500" />,
                link: '/about',
                color: 'from-purple-500 to-purple-700'
              },
              {
                title: 'Products',
                description: 'Explore our VPS and hosting solutions',
                icon: <Server className="w-6 h-6 text-red-500" />,
                link: '/products',
                color: 'from-red-500 to-red-700'
              }
            ].map((item, index) => (
              <Link href={item.link} key={index}>
                <Card className="border-1 bg-[#111111] hover:bg-gradient-to-b hover:from-[#111111] hover:to-[#0a0a0a] shadow-lg hover:border-zinc-600 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <CardTitle className="text-gray-200">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-b border-zinc-800 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <AnimatedGradientText as="h2" className="text-4xl">Everything you need to secure and maintain anonymous hosting</AnimatedGradientText>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fast Development',
                description: 'Build and iterate quickly with our pre-built components and utilities.',
                icon: <Zap className="w-6 h-6 text-yellow-500" />
              },
              {
                title: 'Modern Design',
                description: 'Beautiful, responsive components that follow modern design principles.',
                icon: <Star className="w-6 h-6 text-purple-500" />
              },
              {
                title: 'Secure by Default',
                description: 'Enterprise-grade security built into every component.',
                icon: <Shield className="w-6 h-6 text-blue-500" />
              },
              {
                title: 'Developer Experience',
                description: 'Intuitive APIs and comprehensive documentation for the best DX.',
                icon: <Laptop className="w-6 h-6 text-green-500" />
              },
              {
                title: 'Type Safe',
                description: 'Full TypeScript support with automated type inference.',
                icon: <Lock className="w-6 h-6 text-red-500" />
              },
              {
                title: 'Customizable',
                description: 'Easily extend and customize components to match your brand.',
                icon: <Star className="w-6 h-6 text-orange-500" />
              }
            ].map((feature, index) => (
              <Card key={index} className="border-1 bg-[#111111] shadow-lg hover:border-zinc-600 hover:bg-[#0f0f0f] transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-gray-200">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-t from-[#111111] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <AnimatedGradientText as="h2" className="text-3xl">Ready to get started?</AnimatedGradientText>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of developers building amazing applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                Start Building <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" className="gap-2 border-1 border-zinc-700 bg-zinc-900 hover:bg-zinc-800">
                Read Documentation <Book className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}