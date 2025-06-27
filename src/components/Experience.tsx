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
      title: "Senior Machine Learning Engineer",
      company: "TechCorp AI",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Lead a team of 5 ML engineers building next-gen recommendation systems",
        "Architected and deployed MLOps pipelines serving 10M+ users daily",
        "Reduced model inference time by 60% through optimization and model compression"
      ],
      technologies: ["Python", "TensorFlow", "Kubernetes", "AWS", "MLflow"],
      achievements: [
        "Increased user engagement by 35% with personalized recommendations",
        "Built automated A/B testing framework for ML models",
        "Mentored 3 junior engineers who were promoted within the year"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "DataDriven Solutions",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: [
        "Developed computer vision models for quality control in manufacturing",
        "Built real-time anomaly detection systems for IoT sensor data",
        "Collaborated with product teams to integrate ML into customer-facing features"
      ],
      technologies: ["PyTorch", "OpenCV", "Docker", "GCP", "Apache Kafka"],
      achievements: [
        "Achieved 99.2% accuracy in defect detection, saving $2M annually",
        "Reduced false positive rate by 45% in anomaly detection",
        "Published 2 papers on industrial computer vision applications"
      ]
    },
    {
      title: "Data Scientist",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      description: [
        "Built predictive models for customer churn and lifetime value",
        "Designed and implemented data pipelines for ML model training",
        "Created interactive dashboards for business stakeholders"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "PostgreSQL", "Tableau"],
      achievements: [
        "Reduced customer churn by 25% through predictive interventions",
        "Increased marketing ROI by 40% with targeted campaigns",
        "Established company's first ML engineering best practices"
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