# My Personal Website

Welcome to my personal portfolio website! This is a modern, responsive website built with Vue 3 and TypeScript.

## 🚀 Tech Stack

### Frontend
- **Vue 3** with Composition API
- **TypeScript** for type safety
- **Vite** for fast build tooling
- **SCSS** for styling
- **Vue Router** for navigation

### Development Tools
- **Bun** as package manager
- **Husky** for git hooks
- **ESLint** and **Prettier** for code quality

### Deployment
- **Cloudflare Pages** for hosting
- **Automated CI/CD** with GitHub Actions

## 🏗️ Project Architecture

```
src/
├── assets/           # Static assets
├── components/       # Reusable Vue components
│   ├── About/
│   ├── Contact/
│   ├── Footer/
│   ├── Header/
│   ├── Home/
│   ├── Project/
│   └── Shared/      # Common components and utilities
├── router/          # Vue Router configuration
├── views/           # Page-level components
└── main.ts         # App entry point
```

### Key Features
- Responsive design that works on all device sizes
- Dark/light mode based on system preference
- Smooth animations and transitions
- Optimized performance with Vite
- SEO-friendly structure

## 🛠️ Development

### Prerequisites
- [Bun](https://bun.sh/) (package manager)

### Setup
```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### Git Hooks
Pre-push hooks with Husky ensure the code builds successfully before pushing to the repository.

## 🚀 Deployment

The website is automatically deployed to Cloudflare Pages whenever changes are pushed to the main branch. The deployment process includes:

1. Building the project with `bun run build`
2. Deploying the built assets to Cloudflare Pages
3. Automatic SSL provisioning and CDN distribution

## 📁 Project Structure

- `public/` - Static assets served directly
- `src/` - Main source code
- `src/components/` - Vue components organized by section
- `src/views/` - Page-level components
- `src/assets/` - Images and other media files
- `fonts/` - Custom font files
