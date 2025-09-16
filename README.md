# knotless-app

Modern React application built with TypeScript, React Query, Zustand, and Supabase.

## 🚀 Features

- ⚡ **Vite** - Lightning fast development and builds
- ⚛️ **React 18** with **TypeScript** - Type-safe React development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧭 **React Router** - Declarative routing
- 🔄 **React Query** - Server state management and caching
- 🐻 **Zustand** - Simple client state management
- 🗄️ **Supabase** - Database and authentication
- 📧 **Loops** - Email integration
- 🔍 **ESLint** - Code linting and quality
- 💅 **Prettier** - Code formatting
- 🐕 **Husky** - Git hooks for quality assurance
- 🌍 **Netlify** - Deployment ready with dev server support

## 🛠️ Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase and Loops credentials

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes TypeScript check)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🌍 Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Netlify Dev (Local Development)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Start local dev server with Netlify Functions support
netlify dev
```

### Other Platforms
- **Vercel**: Framework preset: Vite, Build command: `npm run build`, Output directory: `dist`
- **Static Hosting**: Build and deploy the `dist` folder

## 🔐 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Loops Email Configuration  
VITE_LOOPS_API_KEY=your_loops_api_key

# Development Environment
VITE_APP_ENV=development
```

## 🏗️ Project Structure

```
knotless-app/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   └── layout/     # Layout components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # External library configurations
│   ├── stores/         # Zustand stores
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── styles/         # Additional styles
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── .eslintrc.cjs       # ESLint configuration
├── .prettierrc         # Prettier configuration
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## 🎯 Key Concepts

### State Management
- **React Query** handles server state (API calls, caching, synchronization)
- **Zustand** handles client state (UI state, user preferences, app state)

### API Integration
- Supabase client configured in `src/lib/supabase.ts`
- React Query hooks in `src/hooks/` for data fetching
- TypeScript types in `src/types/` for type safety

### Styling
- Tailwind CSS with custom utility classes
- Component-specific styles in CSS modules when needed
- Responsive design patterns built-in

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details.
