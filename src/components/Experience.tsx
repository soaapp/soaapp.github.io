import React from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Machine Learning Engineer - Team Lead, Sr. Application Developer",
      company: "CIBC",
      location: "Toronto, ON (Remote)",
      period: "June 2020 - Present (Currently ML Eng Team Lead)",
      description: [
        "Led development of ML-powered solutions including RAG systems with custom chunking, prompt engineering, and architecture design using open-source models (LLaMA, Mistral, Granite) and LangChain/LangGraph; benchmarked embedding models and retrieval strategies like MMR.",
        "Deployed and optimized LLaMA models on OpenShift using vLLM and RHOAI, building scalable inference pipelines and integrating with vector stores (Qdrant).",
        "Translated legacy COBOL into Angular frontends and business logic using LLM-based tooling; designed modernization workflows across backend and UI layers.",
        "Built full-stack platforms and event-driven systems with Java, Quarkus, and Solace PubSub+, focusing on token management, CIAM, and API ecosystems, deployed on OpenShift and Azure.",
        "Collaborated across business units to align ML initiatives and backend systems, leveraging Databricks, Jenkins, and GitHub Actions for data processing and DevOps."
      ],
      technologies: ["Python", "Java", "Angular", "LangChain", "OpenShift", "Azure", "LLMs", "Qdrant", "vLLM", "RHOAI"],
      achievements: [
        "Delivered modernization of legacy banking workflows using LLMs and Angular.",
        "Benchmarked and deployed multiple open-source LLMs in production.",
        "Built scalable ML inference pipelines for critical banking applications."
      ]
    },
    {
      title: "iOS Engineer",
      company: "Train Fitness (Startup)",
      location: "Remote",
      period: "Jan 2024 - July 2024",
      description: [
        "Contributed as 1 of 5 iOS engineers to an AI-powered iOS and watchOS workout app, published to the App Store and generating revenue, with key features like Heart Rate Zones and Muscle Recovery.",
        "Worked with Swift, SwiftUI, Combine, and advanced MVVM architecture, integrating network services such as third-party authentication, async operations, REST API calls, and local data persistence using Core Data and User Defaults.",
        "Collaborated closely with the design team to ensure seamless UI/UX, building and maintaining the app’s design system using Atomic Design Pattern, including Dark Mode, Typography, and Asset Management.",
        "Conducted end-to-end QA, including unit, domain, and view layer testing."
      ],
      technologies: ["Swift", "SwiftUI", "Combine", "MVVM", "Core Data", "User Defaults", "REST APIs", "Xcode"],
      achievements: [
        "App successfully launched and generating revenue on the App Store.",
        "Developed key features for workout analysis and user engagement.",
        "Built and maintained a robust design system for mobile platforms."
      ]
    },
    {
      title: "Software Engineer",
      company: "iReal.AI (Startup)",
      location: "Toronto, ON",
      period: "Apr 2018 - July 2019",
      description: [
        "Developed a real estate web app using Angular and TypeScript, deployed on Firebase/Firestore for real-time data management.",
        "Used Google LLM libraries to create AI powered assistant for real estate appraisals.",
        "Attended industry conferences like Collision in Toronto to network and enhance the app's visibility."
      ],
      technologies: ["Angular", "TypeScript", "Firebase", "Firestore", "Google LLM APIs"],
      achievements: [
        "Launched a real estate platform with AI-powered features.",
        "Represented company at major industry events.",
        "Integrated AI assistant for property appraisals."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From turning data into insights to building AI that actually works in production. 
            Here's how I've been making machines smarter (and occasionally outsmarting myself).
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Basic Info */}
                <div className="lg:col-span-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</div>
                    <div className="flex items-center text-gray-600 text-sm mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-blue-600" />
                      What I Did
                    </h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="text-blue-600 mr-2 mt-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 text-amber-500" />
                      Key Wins
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="text-amber-500 mr-2 mt-2">★</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to see what we can build together?
          </h3>
          <p className="text-gray-700 mb-6">
            I'm always excited to tackle new challenges and push the boundaries of what's possible with ML.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Let's Talk <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}