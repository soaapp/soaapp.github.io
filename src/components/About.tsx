import React from 'react';
import { Brain, Code, Coffee, Zap } from 'lucide-react';

export default function About() {
  const techStack = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy',
    'Docker', 'Kubernetes', 'AWS', 'GCP', 'MLflow', 'Git'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Hey there! 👋 I'm a{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Machine Learning Engineer
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I turn coffee into algorithms and data into insights. When I'm not training models 
                that are smarter than me (which happens more often than I'd like to admit), 
                you'll find me debugging why my neural network thinks a chihuahua is a muffin.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                With <span className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">5+ years</span> in 
                the field, I've built everything from recommendation systems that actually recommend 
                good movies to computer vision models that can spot a defect from a mile away. 
                I believe the best ML solutions are the ones that make people's lives easier, 
                not more complicated.
              </p>

              <p className="text-gray-700 leading-relaxed">
                My superpower? Making machine learning accessible to humans (ironic, I know). 
                Whether it's explaining why your model thinks every cat is a dog or building 
                production systems that don't crash at 3 AM, I've got you covered.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-mono text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Models Deployed</div>
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
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="font-mono text-blue-600">{`{`}</span> Tech Stack <span className="font-mono text-blue-600">{`}`}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {techStack.map((tech, index) => (
                  <div
                    key={tech}
                    className="px-3 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-200 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
              <h4 className="font-bold text-amber-800 mb-2 flex items-center">
                <span className="text-lg mr-2">🤖</span> Fun Fact
              </h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                I once trained a model to predict my coffee consumption based on my commit frequency. 
                It achieved 94% accuracy and immediately recommended I switch to decaf. 
                I promptly deleted that model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}