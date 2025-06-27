import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const codeSnippet = 'while(learning) { code(); }';

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              <span className="font-mono">&lt;</span>JayJ<span className="font-mono">/&gt;</span>
            </h1>
          </div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-lg text-gray-300 italic">
              "The best machine learning models are the ones that make people's lives better, 
              not the ones that just look impressive on paper."
            </blockquote>
          </div>

          {/* Made with love */}
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <Code className="w-4 h-4 text-blue-400" />
            <span>and lots of</span>
            <Coffee className="w-4 h-4 text-amber-500" />
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jay Jahanzad. All rights reserved. 
              <span className="mx-2">|</span>
              <span className="font-mono">{codeSnippet}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}