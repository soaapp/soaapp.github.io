import React from 'react';
import { ExternalLink, Github, Award, Presentation } from 'lucide-react';

interface MediaItem {
  title: string;
  type: 'project' | 'publication' | 'talk' | 'award';
  description: string;
  image: string;
  technologies?: string[];
  links: { label: string; url: string; icon: React.ReactNode }[];
  metrics?: string[];
}

export default function Media() {
  const mediaItems: MediaItem[] = [
    {
      title: "DeepRecommend: Neural Collaborative Filtering at Scale",
      type: "project",
      description: "A production-ready recommendation system serving 10M+ users with real-time personalization. Built with distributed computing and advanced deep learning architectures.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["TensorFlow", "Kubernetes", "Redis", "PostgreSQL", "Apache Kafka"],
      links: [
        { label: "GitHub", url: "#", icon: <Github className="w-4 h-4" /> },
        { label: "Demo", url: "#", icon: <ExternalLink className="w-4 h-4" /> }
      ],
      metrics: ["35% ↑ Engagement", "60% ↓ Latency", "99.9% Uptime"]
    },
    {
      title: "Computer Vision for Industrial Quality Control",
      type: "publication",
      description: "Published research on automated defect detection in manufacturing using advanced CNN architectures. Achieved state-of-the-art results on multiple benchmarks.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PyTorch", "OpenCV", "Docker", "MLflow"],
      links: [
        { label: "Paper", url: "#", icon: <ExternalLink className="w-4 h-4" /> },
        { label: "Code", url: "#", icon: <Github className="w-4 h-4" /> }
      ],
      metrics: ["99.2% Accuracy", "45% ↓ False Positives", "$2M Annual Savings"]
    },
    {
      title: "ML in Production: Lessons from the Trenches",
      type: "talk",
      description: "Keynote presentation at ML Conf 2023 about building robust machine learning systems that actually work in production environments.",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
      links: [
        { label: "Slides", url: "#", icon: <Presentation className="w-4 h-4" /> },
        { label: "Video", url: "#", icon: <ExternalLink className="w-4 h-4" /> }
      ],
      metrics: ["500+ Attendees", "4.9/5 Rating", "Featured Talk"]
    },
    {
      title: "Best ML Innovation Award 2023",
      type: "award",
      description: "Recognized for pioneering work in automated ML pipeline optimization, reducing model deployment time from weeks to hours.",
      image: "https://images.pexels.com/photos/8386426/pexels-photo-8386426.jpeg?auto=compress&cs=tinysrgb&w=800",
      links: [
        { label: "Article", url: "#", icon: <ExternalLink className="w-4 h-4" /> }
      ],
      metrics: ["Industry Recognition", "90% ↓ Deployment Time", "Team Achievement"]
    },
    {
      title: "Predictive Maintenance AI Platform",
      type: "project",
      description: "End-to-end platform for predicting equipment failures using IoT sensor data and advanced time series forecasting models.",
      image: "https://images.pexels.com/photos/8386443/pexels-photo-8386443.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TimeSeries", "Apache Airflow", "AWS", "Grafana"],
      links: [
        { label: "Case Study", url: "#", icon: <ExternalLink className="w-4 h-4" /> },
        { label: "Demo", url: "#", icon: <ExternalLink className="w-4 h-4" /> }
      ],
      metrics: ["30% ↓ Downtime", "85% Prediction Accuracy", "Multi-Client Success"]
    },
    {
      title: "Open Source ML Toolkit",
      type: "project",
      description: "Created and maintain a popular open-source library for ML model interpretability, used by 1000+ data scientists worldwide.",
      image: "https://images.pexels.com/photos/8386454/pexels-photo-8386454.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Jupyter", "Scikit-learn", "Matplotlib", "Pytest"],
      links: [
        { label: "GitHub", url: "#", icon: <Github className="w-4 h-4" /> },
        { label: "PyPI", url: "#", icon: <ExternalLink className="w-4 h-4" /> }
      ],
      metrics: ["2K+ GitHub Stars", "50K+ Downloads", "Active Community"]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'project': return '🚀';
      case 'publication': return '📄';
      case 'talk': return '🎤';
      case 'award': return '🏆';
      default: return '💡';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'project': return 'bg-blue-100 text-blue-800';
      case 'publication': return 'bg-green-100 text-green-800';
      case 'talk': return 'bg-purple-100 text-purple-800';
      case 'award': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="media" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projects & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in machine learning, from production systems that scale 
            to research that pushes boundaries. Each project tells a story of turning complex problems into elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    <span className="mr-1">{getTypeIcon(item.type)}</span>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Technologies */}
                {item.technologies && (
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                        +{item.technologies.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Metrics */}
                {item.metrics && (
                  <div className="space-y-1">
                    {item.metrics.map((metric, i) => (
                      <div key={i} className="text-sm font-mono text-green-600 bg-green-50 px-2 py-1 rounded">
                        {metric}
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex space-x-3 pt-2">
                  {item.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className="inline-flex items-center px-3 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      {link.icon}
                      <span className="ml-2">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-200 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200">
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </div>
        </div>
      </div>
    </section>
  );
}