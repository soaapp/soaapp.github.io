import React from 'react';
import { Mail, MessageSquare, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {


  const socialLinks = [
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/jayjahanzad', 
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50',
      description: 'Connect with me on LinkedIn'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      url: 'https://github.com/soaapp', 
      color: 'hover:text-gray-800',
      bgColor: 'hover:bg-gray-50',
      description: 'Check out my projects on GitHub'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      url: 'mailto:jjahanzad@gmail.com', 
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-50',
      description: 'Send me an email'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Got an interesting ML problem to solve? Want to discuss the future of AI? 
            Or just want to chat about why neural networks are basically magic? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Social Links */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200 ${social.bgColor}`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${social.color} ${social.bgColor.replace('hover:', '')} mr-4`}>
                    <social.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-lg">{social.label}</div>
                    <div className="text-gray-500">{social.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Note */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-100 rounded-2xl p-6">
            <h4 className="font-bold text-blue-800 mb-2 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Quick Note
            </h4>
            <p className="text-blue-700 text-sm leading-relaxed">
              I typically respond to emails within 24 hours. I'm always up for discussing new opportunities, collaboration, or just geeking out about the latest in ML and AI!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}