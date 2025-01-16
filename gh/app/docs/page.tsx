"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Book, Code, Terminal, Settings, Shield, Database, Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

interface ContentMap {
  [section: string]: {
    [item: string]: React.ReactNode;
  };
}

interface DocContentProps {
  section: string;
  item: string;
}

const DocContent: React.FC<DocContentProps> = ({ section, item }) => {
  const content: ContentMap = {
    'Getting Started': {
      'Introduction': (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Introduction
          </h1>
          <div className="relative p-6 rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-800 mb-6 border border-zinc-700">
            <p className="text-gray-300 mb-4 leading-relaxed">
              Welcome to our next-generation e-commerce template, crafted with passion by <strong className="text-blue-400">uid</strong>. 
              Let's transform your ideas into extraordinary digital experiences.
            </p>
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>
        </motion.div>
      ),
      'Installation': (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Installation Guide
          </h1>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your development environment into a powerhouse with our simple setup process.
            </p>
          </div>
          <motion.div 
            className="bg-zinc-900/80 p-6 rounded-lg my-6 border border-zinc-800 relative overflow-hidden group"
            whileHover={{ scale: 1.0 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <pre className="text-gray-300 overflow-x-auto">
              <code className="block mb-4"># Clone the repository</code>
              <code className="block mb-10 text-green-400">git clone https://github.com/uidq/react-ecommerce</code>
              <code className="block mb-4"># Install dependencies</code>
              <code className="block mb-10 text-blue-400">npm install</code>
              <code className="block mb-4"># Start development server</code>
              <code className="block text-purple-400">npm run dev</code>
            </pre>
            <Button 
              className="mt-4 text-white border-1 border-zinc-600 bg-zinc-900 hover:border-zinc-500"
              onClick={() => navigator.clipboard.writeText('git clone https://github.com/uidq/react-ecommerce\nnpm install\nnpm run dev')}
            >
              Copy Commands
            </Button>
          </motion.div>
          <div className="mt-8 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <h3 className="text-lg font-medium text-blue-400 mb-2 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Next Steps
            </h3>
            <p className="text-gray-300">
              After installation, leave the github repo a star. <span className='text-pink-500'>{"<3"}</span>
            </p>
          </div>
        </motion.div>
      ),
    }
  };

  return content[section]?.[item] || (
    <div className="text-gray-400 text-center p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Documentation for {section} - {item} is coming soon...
      </motion.div>
    </div>
  );
};

const Doc: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Getting Started');
  const [activeItem, setActiveItem] = useState<string>('Introduction');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections: Section[] = [
    {
      title: 'Getting Started',
      icon: <Book className="w-4 h-4" />,
      items: ['Introduction', 'Installation']
    },
  ];

  const handleNavigation = (section: string, item: string) => {
    setActiveSection(section);
    setActiveItem(item);
    setIsMobileMenuOpen(false);
  };

  const Sidebar = () => (
    <nav className="p-4">
      {sections.map((section, index) => (
        <motion.div 
          key={index} 
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center gap-2 text-gray-200 mb-2">
            {section.icon}
            <h3 className="font-medium">{section.title}</h3>
          </div>
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <motion.li 
                key={itemIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (index * 0.1) + (itemIndex * 0.1) }}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 ${
                    activeSection === section.title && activeItem === item
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50'
                      : 'text-gray-400 hover:text-white hover:bg-zinc-800/50 hover:border-blue-500/30'
                  }`}
                  onClick={() => handleNavigation(section.title, item)}
                >
                  <ChevronRight className={`w-4 h-4 mr-2 transition-transform duration-300 ${
                    activeSection === section.title && activeItem === item ? 'rotate-90' : ''
                  }`} />
                  {item}
                </Button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </nav>
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#0a0a0a] flex flex-col md:flex-row overflow-hidden">
      <div className="md:hidden fixed top-16 left-0 right-0 z-40 backdrop-blur-md bg-zinc-900/80 flex items-center p-4 border-b border-zinc-800">
        <Button
          variant="ghost"
          className="text-gray-200 hover:bg-zinc-800/50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          <span className="ml-2">Menu</span>
        </Button>
      </div>

      <div className="md:hidden h-16" />

      <div className="hidden md:block w-64 border-r border-zinc-800 bg-[#111111]/90 backdrop-blur-md overflow-y-auto">
        <Sidebar />
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 z-30 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 left-0 w-64 bg-[#111111]/90 backdrop-blur-md overflow-y-auto"
              style={{ top: '64px' }}
            >
              <Sidebar />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 overflow-hidden bg-[#0a0a0a]">
        <div className="h-full p-4 md:p-8 overflow-y-auto">
          <Card className="border-zinc-800 bg-[#111111]/90 backdrop-blur-md">
            <CardContent className="p-4 md:p-6">
              <div className="prose prose-invert max-w-none">
                <DocContent section={activeSection} item={activeItem} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Doc;