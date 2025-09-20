import { useState } from 'react';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  onSearch?: (query: string, location: string) => void;
  placeholder?: string;
  size?: 'small' | 'large';
}

const SearchBar = ({
  onSearch,
  placeholder = 'Search for stylists...',
  size = 'large',
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query, location);
  };

  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    large: 'py-4 px-6 text-lg',
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-4xl mx-auto'>
      <div className='flex flex-col md:flex-row gap-2 bg-white rounded-2xl shadow-lg p-2'>
        <div className='flex-1 relative'>
          <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
            <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
          </div>
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className={`w-full pl-12 pr-4 border-0 rounded-xl focus:ring-2 focus:ring-[#E9887E] focus:outline-none ${sizeClasses[size]}`}
          />
        </div>

        <div className='flex-1 relative'>
          <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
            <MapPinIcon className='h-5 w-5 text-gray-400' />
          </div>
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='Location'
            className={`w-full pl-12 pr-4 border-0 rounded-xl focus:ring-2 focus:ring-[#E9887E] focus:outline-none ${sizeClasses[size]}`}
          />
        </div>

        <button
          type='submit'
          className={`bg-gradient-to-r from-[#E9887E] to-[#F4B637] text-white font-semibold rounded-xl hover:from-[#d77a6e] hover:to-[#e0a52e] transition-all duration-200 px-8 ${sizeClasses[size]}`}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
