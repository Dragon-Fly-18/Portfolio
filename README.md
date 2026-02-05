# Advanced 3D Portfolio Website

A stunning, interactive 3D portfolio website built with React, Three.js, and modern animations. Features an immersive 3D scene with interactive elements, smooth scroll animations, and a professional design.

## 🚀 Features

- **Interactive 3D Scene** - Powered by Three.js with rotating torus knots, floating spheres, and particle effects
- **Smooth Animations** - Built with Framer Motion for beautiful page transitions
- **Responsive Design** - Fully responsive layout that works on all devices
- **Modern UI** - Gradient backgrounds, glassmorphism effects, and glowing elements
- **Portfolio Showcase** - Display your projects with custom styling
- **Contact Form** - Functional contact section with form handling
- **Scroll Effects** - Parallax scrolling and scroll-triggered animations

## 🛠️ Technologies Used

- **React** - UI framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

## 🎨 Quick Start

Simply run the development server and the 3D portfolio will be live in your browser. The scene features:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
