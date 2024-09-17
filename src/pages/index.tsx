import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="min-h-screen bg-sky-700 text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-end items-center p-8">
        <nav className="flex space-x-8 font-code text-white-300 text-sm items-center">
          <a href="#about" className="hover:text-sky-950">
            01. About
          </a>
          <a href="#experience" className="hover:text-sky-950">
            02. Experience
          </a>
          <a href="#work" className="hover:text-sky-950">
            03. Work
          </a>
          <a href="#contact" className="hover:text-sky-950">
            04. Contact
          </a>
          <a
            href="/resume.pdf"
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-sky-950"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-col justify-center items-start px-8 md:px-24 lg:px-48 mt-16 space-y-6">
        <h3 className="font-code text-white-400 text-md">Hi, my name is</h3>
        <h1 className="text-6xl md:text-7xl font-bold">Jay Jahanzad.</h1>
        <h2 className="text-4xl md:text-5xl text-sky-950 font-semibold">
          I am a big fan of building solutions.
        </h2>
        <p className="text-white max-w-xl">
          I'm a software engineer specializing in designing and creating digital
          solutions to help ideas come to life.
        </p>

        {/* Call-to-action button */}
        <a
          href="#"
          className="border font-code border-white-300 px-6 py-3 rounded-md text-white-300 hover:bg-white hover:text-black"
        >
          Checkout some of my favourites
        </a>
      </main>

      {/* Social Icons on the Left */}
      <aside className="fixed bottom-0 left-8 hidden md:flex flex-col items-center space-y-6">
        <a href="https://github.com/soaapp" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-white hover:fill-sky-950 transition-colors duration-300"
          >
            <path
              fillRule="evenodd"
              d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.799 8.207 11.387.6.111.793-.261.793-.577v-2.257c-3.338.727-4.042-1.611-4.042-1.611-.546-1.389-1.333-1.758-1.333-1.758-1.089-.744.082-.729.082-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.494.997.108-.774.419-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.311.469-2.382 1.236-3.223-.123-.302-.536-1.521.118-3.168 0 0 1.008-.323 3.303 1.23.957-.266 1.983-.399 3.003-.404 1.021.005 2.048.138 3.006.404 2.292-1.553 3.298-1.23 3.298-1.23.656 1.647.244 2.866.12 3.168.77.841 1.233 1.912 1.233 3.223 0 4.609-2.807 5.625-5.478 5.921.43.372.816 1.102.816 2.222v3.293c0 .32.192.694.8.575C20.565 21.796 24 17.303 24 12 24 5.371 18.627 0 12 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href="linkedin.com/in/jayjahanzad" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-white hover:fill-sky-950 transition-colors duration-300"
          >
            <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.225.79 24 1.77 24h20.46C23.21 24 24 23.225 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.09 20.454H3.58V9H7.09v11.454zM5.34 7.545a2.054 2.054 0 1 1 0-4.109 2.054 2.054 0 0 1 0 4.109zM20.454 20.454h-3.509v-5.702c0-1.359-.028-3.106-1.892-3.106-1.895 0-2.185 1.482-2.185 3.009v5.799h-3.508V9h3.368v1.566h.048c.469-.888 1.616-1.823 3.325-1.823 3.554 0 4.209 2.34 4.209 5.383v6.328z" />
          </svg>
        </a>
        <div className="h-32 w-px bg-white"></div>
      </aside>

      {/* Email on the Right */}
      <aside className="fixed bottom-0 right-8 hidden md:block">
        <div className="flex flex-col items-center space-y-6">
          <a
            href="mailto:jayjahanzad@gmail.com"
            className="text-white-400 hover:text-sky-950"
          >
            jayjahanzad@gmail.com
          </a>
          <div className="h-32 w-px bg-white"></div>
        </div>
      </aside>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center px-8 md:px-24 lg:px-48 space-y-6"
      >
        <div className="w-full md:w-1/2">
          <h2 className="font-code text-white font-bold text-3xl mb-6">
            01. About Me
          </h2>
          <p className="text-white text-lg leading-relaxed">
            Hello! My name is Jay and I enjoy building things with detail and
            care. I personally believe every line of code should be written and
            regarded as art. I want to create products and services that clients
            and users are genuinely passionate about.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            I’ve had the privilege of working with{" "}
            <span className="text-sky-300">enterprises</span>,{" "}
            <span className="text-sky-300">startups</span>, and{" "}
            <span className="text-sky-300">personal clients</span>.
          </p>
          <div className="mt-8">
            <h3 className="text-white text-lg mb-4">
              Here are a few technologies I’ve been working with recently:
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-white">
              <li className="font-code flex items-center space-x-2">
                <span className="text-sky-950">▸</span>
                <span>Java</span>
              </li>
              <li className="font-code flex items-center space-x-2">
                <span className="text-sky-950">▸</span>
                <span>TypeScript</span>
              </li>
              <li className="font-code flex items-center space-x-2">
                <span className="text-sky-950">▸</span>
                <span>React</span>
              </li>
              <li className="font-code flex items-center space-x-2">
                <span className="text-sky-950">▸</span>
                <span>Python</span>
              </li>
              <li className="font-code flex items-center space-x-2">
                <span className="text-sky-950">▸</span>
                <span>Node.js</span>
              </li>
              <li className="font-code flex items-center space-x-2">
                <span className="text-sky-950">▸</span>
                <span>Angular</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <img
            src="/images/headshot1.jpg"
            alt="Profile"
            className="rounded-md border-2 bg-sky-950 shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
