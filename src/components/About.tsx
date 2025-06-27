import React from 'react';
import { Brain, Code, Coffee, Zap } from 'lucide-react';

export default function About() {
  const currentTechStack = [
    'Python', 'LangChain', 'LangGraph','TypeScript', 'React', 'Node.js',
    'Azure', 'Docker', 'Git', 
  ];

  const previousTechStack = [
    'Java', 'Swift', 'SQL', 'Springboot',
    'Quarkus', 'Angular', 'Firebase',
    'Openshift', 'Postgres', 'Xcode', 'Figma', 'Adobe Suite'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Hi, I'm Jay Jahanzad{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  — Software Engineer
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                With <span className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">5+ years</span> in the industry, I've delivered ML-powered platforms, modernized legacy systems, and shipped mobile apps from concept to App Store. My journey includes leading teams, architecting RAG systems, and deploying scalable solutions for banks, startups, and research projects.
              </p>

              <p className="text-gray-700 leading-relaxed">
                I love collaborating across business, design, and engineering to create products that matter. Whether it's optimizing ML inference on OpenShift, designing beautiful iOS experiences, or building event-driven APIs, I bring a hands-on, creative approach to every project.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Outside of work, you'll find me practicing piano, playing hockey, stargazing, or exploring the latest in AI and computer vision.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-mono text-2xl font-bold text-blue-600">30+</div>
                <div className="text-sm text-gray-600">Applications Deployed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-mono text-2xl font-bold text-blue-600">100K+</div>
                <div className="text-sm text-gray-600">Lines of Code</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                <Coffee className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-mono text-2xl font-bold text-blue-600">∞</div>
                <div className="text-sm text-gray-600">Cups of Coffee</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-mono text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Learning Mode</div>
              </div>
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  <span className="font-mono text-amber-500">{"{"}</span> Core Stack <span className="font-mono text-amber-500">{"}"}</span>
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {currentTechStack.map((tech, index) => (
                    <div
                      key={`current-${tech}`}
                      className="px-2 py-1 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 rounded-md text-xs font-medium text-center hover:from-amber-100 hover:to-amber-200 transition-all duration-200 transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  <span className="font-mono text-blue-600">{"{"}</span> Experience in <span className="font-mono text-blue-600">{"}"}</span>
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {previousTechStack.map((tech, index) => (
                    <div
                      key={`prev-${tech}`}
                      className="px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-md text-xs font-medium text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-200 transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
              <h4 className="font-bold text-amber-800 text-sm mb-1 flex items-center">
                <span className="mr-1">🤖</span> Fun Fact
              </h4>
              <p className="text-amber-700 text-xs leading-snug">
                I once trained a model to predict my cat Pluto's mood based on his facial expression. He was "tired" with a 95% confidence 9 times out of 10. I proceeded to let him nap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}