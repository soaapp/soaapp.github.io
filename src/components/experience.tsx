import React, { useState } from "react";

const WorkExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const companies = ["CIBC", "Train Fitness AI", "iReal.AI"];

  const experiences = [
    {
      role: "Application Engineer Consultant",
      company: "CIBC",
      duration: "May 2019 - Present",
      responsibilities: [
        "Developed event-based integration with Java, SpringBoot, and Quarkus, focusing on Token/Certificate Management and APIs, using Openshift and Azure.",
        "Implemented event-driven integration with Solace PubSub+ in banking applications.",
        "Built a full-stack API Marketplace with a Java backend and React/Redux frontend, sharing REST APIs, and used Jenkins and GitHub Actions for DevOps.",
        "Collaborated across multiple LOBs to ensure smooth integration, focusing on CIAM, authentication, and security.",
      ],
    },
    {
      role: "iOS Engineer",
      company: "Train Fitness - Startup",
      duration: "Jan 2024 - July 2024",
      responsibilities: [
        "Developed an AI-powered iOS and watchOS workout app, including key features like Heart Rate Zones and Muscle Recovery, now generating revenue on the AppStore.",
        "Focused on Swift, SwiftUI, Combine, and MVVM-C architecture, integrating third-party authentication, async network operations, and Core Data.",
        "Collaborated with designers to implement the app’s design system using Atomic Design, ensuring a high level of UI/UX, including Dark Mode and Typography.",
      ],
    },
    {
      role: "Fullstack Engineer",
      company: "iReal.AI - Startup",
      duration: "Apr 2018 - July 2019",
      responsibilities: [
        "Developed an app using Angular and TypeScript, deployed on Firebase/Firestore for real-time data management.",
        "Contributed to the app's marketing strategy and promotion.",
        "Attended industry conferences like Collision in Toronto to network and enhance the app's visibility.",
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center min-h-screen px-8 md:px-24 lg:px-48 space-y-6"
    >
      <h2 className="font-code text-white font-bold text-3xl mb-6">
        02. My Experiences
      </h2>
      <div className="flex w-full max-w-5xl">
        {/* Sidebar: Companies List */}
        <div className="font-code flex flex-col w-1/4">
          {companies.map((company, index) => (
            <button
              key={index}
              className={`text-left py-2 px-4 ${
                activeTab === index
                  ? "bg-sky-950 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {company}
            </button>
          ))}
        </div>

        {/* Content: Experience Details */}
        <div className="w-3/4 pl-8">
          <h3 className="font-code text-lg text-white">
            {experiences[activeTab].role} @{" "}
            <span className="text-sky-300">
              {experiences[activeTab].company}
            </span>
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            {experiences[activeTab].duration}
          </p>
          <ul className="space-y-2 text-gray-400">
            {experiences[activeTab].responsibilities.map((item, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-white">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
