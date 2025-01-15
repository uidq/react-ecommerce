"use client"

import React, { useState } from 'react';
import { Button } from '@nextui-org/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Book, Code, Terminal, Settings, Shield, Database } from 'lucide-react';

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
        <>
          <h1 className="text-3xl font-bold mb-6">Introduction</h1>
          <p className="text-gray-400 mb-4">
            We are delighted to present this e-commerce template, thoughtfully designed by <strong>uid</strong>. This template aims to inspire you to build exceptional websites with ease and efficiency.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">Getting Started</h2>
          <p className="text-gray-400 mb-4">
            This guide will walk you through the process of installing and running the e-commerce template. By following these steps, you will be able to seamlessly set up and begin leveraging the full potential of this robust and versatile template.
          </p>
        </>
      ),
      'Installation': (
        <>
          <h1 className="text-3xl font-bold mb-6">Installation Guide</h1>
          <p className="text-gray-400 mb-4">
            Get up and running with our template in minutes. Follow these simple steps to create your first project.
          </p>
          <div className="bg-zinc-900 p-4 rounded-lg my-6">
            <pre className="text-gray-300">
              <code>{`# Downloading template
https://github.com/uidq/react-ecommerce

# Open a CMD
Go to the folder you installed the template at, open a command prompt (CMD) and do the following commands.

# Installing Necessary modules
npm install

# Running dev server
npm run dev
`}</code>
            </pre>
          </div>
        </>
      ),
    }
  };

  return content[section]?.[item] || (
    <div className="text-gray-400">
      Documentation for {section} - {item} is coming soon...
    </div>
  );
};

const DocPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Getting Started');
  const [activeItem, setActiveItem] = useState<string>('Introduction');

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
  };

  return (
    <div className="h-screen bg-[#0a0a0a] flex overflow-hidden">
      <div className="w-64 border-r border-zinc-800 bg-[#111111] overflow-y-auto">
        <nav className="p-4">
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center gap-2 text-gray-200 mb-2">
                {section.icon}
                <h3 className="font-medium">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start gap-2 border-1 border-zinc-700 bg-zinc-900 ${
                        activeSection === section.title && activeItem === item
                          ? 'text-white bg-zinc-800'
                          : 'text-gray-400 hover:text-white hover:bg-zinc-800'
                      }`}
                      onClick={() => handleNavigation(section.title, item)}
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="h-full p-8 overflow-y-auto">
          <Card className="border-zinc-800 bg-[#111111]">
            <CardContent className="p-6">
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

export default DocPage;