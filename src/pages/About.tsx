const About = () => {
  return (
    <div className='space-y-8'>
      <div className='card max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>About This Project</h1>

        <div className='prose prose-lg max-w-none'>
          <p>
            This Knotless project template includes everything you need for modern React
            development:
          </p>

          <h3>Frontend Stack</h3>
          <ul>
            <li>
              <strong>React 18</strong> with TypeScript for type safety
            </li>
            <li>
              <strong>Vite</strong> for lightning-fast development and builds
            </li>
            <li>
              <strong>Tailwind CSS</strong> for utility-first styling
            </li>
            <li>
              <strong>React Router</strong> for client-side routing
            </li>
          </ul>

          <h3>State Management</h3>
          <ul>
            <li>
              <strong>React Query</strong> for server state and caching
            </li>
            <li>
              <strong>Zustand</strong> for client-side state management
            </li>
          </ul>

          <h3>Backend & Services</h3>
          <ul>
            <li>
              <strong>Supabase</strong> for database and authentication
            </li>
            <li>
              <strong>Loops</strong> for email integration
            </li>
          </ul>

          <h3>Development Tools</h3>
          <ul>
            <li>
              <strong>ESLint & Prettier</strong> for code quality
            </li>
            <li>
              <strong>Husky & lint-staged</strong> for Git hooks
            </li>
            <li>
              <strong>Netlify</strong> configuration for deployment
            </li>
          </ul>

          <p>
            The template is configured with modern best practices and is ready for deployment to
            Netlify with full development server support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
