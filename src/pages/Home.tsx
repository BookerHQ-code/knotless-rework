import { ChartBarIcon, CogIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useAppStore } from '@/stores/useAppStore';

const Home = () => {
  const { user } = useAppStore();

  const features = [
    {
      name: 'Modern Stack',
      description: 'Built with React 18, TypeScript, and Vite for lightning-fast development.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Smart State Management',
      description: 'React Query for server state and Zustand for client state management.',
      icon: CogIcon,
    },
    {
      name: 'Production Ready',
      description: 'Optimized builds with TypeScript, ESLint, and comprehensive tooling.',
      icon: ChartBarIcon,
    },
  ];

  return (
    <div className='space-y-12'>
      {/* Hero Section */}
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-900 sm:text-6xl'>
          Welcome to <span className='text-blue-600'>Knotless</span>
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto'>
          A modern React application template built with TypeScript, React Query, Zustand, and
          Supabase for rapid development.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <button className='btn btn-primary'>Get Started</button>
          <button className='btn btn-outline'>Learn More</button>
        </div>
      </div>

      {/* Example of loading state */}
      <div className='flex justify-center'>
        <div className='flex items-center space-x-2 text-gray-600'>
          <LoadingSpinner size='sm' />
          <span>Loading example...</span>
        </div>
      </div>

      {/* Features Section */}
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>
        <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Everything you need for modern development
        </h2>
        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature) => (
            <div key={feature.name} className='card hover:shadow-xl transition-shadow'>
              <div>
                <feature.icon className='h-8 w-8 text-blue-600' />
                <h3 className='mt-4 text-lg font-semibold text-gray-900'>{feature.name}</h3>
                <p className='mt-2 text-gray-600'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User state example */}
      {user && (
        <div className='card max-w-md mx-auto'>
          <h3 className='text-lg font-semibold mb-2'>User State</h3>
          <p className='text-gray-600'>Welcome back, {user.name || user.email}!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
