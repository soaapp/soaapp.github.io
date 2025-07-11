# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript personal portfolio website for Jay Jahanzad (ML Engineer) built with Vite and deployed to GitHub Pages. The site is a single-page application with smooth scrolling navigation between sections.

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production (runs TypeScript compiler then Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run deploy` - Deploy to GitHub Pages using gh-pages

## Architecture

### Core Structure
- **Single Page App**: All content on one page with smooth scroll navigation
- **Section-based**: Four main sections (About, Experience, Media/Projects, Contact)
- **Active Section Tracking**: Custom hook `useActiveSection` monitors scroll position to highlight current section
- **Component Organization**: Each section is a separate component in `src/components/`

### Key Files
- `src/App.tsx` - Main app component with section imports and active section management
- `src/hooks/useActiveSection.ts` - Custom hook for scroll-based navigation and section highlighting
- `vite.config.ts` - Vite configuration with GitHub Pages base path `/soaapp.github.io/`
- `index.html` - Includes loading screen, fonts (Inter + JetBrains Mono), and SEO meta tags

### Technology Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS + PostCSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with gh-pages package
- **CI/CD**: GitHub Actions workflow deploys on push to main

### Navigation System
The site uses scroll-based navigation with:
- Fixed header with navigation links
- Smooth scrolling to sections via `navigateToSection()`
- Active section highlighting based on scroll position
- Dynamic page title updates per section

### GitHub Pages Configuration
- Base path configured as `/soaapp.github.io/` in vite.config.ts
- 404.html in public/ handles SPA client-side routing
- Deployment via GitHub Actions on main branch pushes
- Build output optimized with manual chunks for React and icons

### Development Notes
- Port 3000 configured for dev server with auto-open
- Source maps enabled for debugging
- ESLint configured with React hooks and refresh plugins
- TypeScript strict mode with separate configs for app and build tools