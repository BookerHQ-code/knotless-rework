import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '@/components/ui/SearchBar';
import StylistCard from '@/components/ui/StylistCard';
import { HAIR_SERVICES } from '@/utils/constants';
import type { Stylist, BlogPost } from '@/types';

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  // Mock data
  const featuredStylists: Stylist[] = [
    {
      id: '1',
      name: 'Maya Johnson',
      location: 'Toronto, ON',
      rating: 4.9,
      reviewCount: 127,
      specialties: ['Braids', 'Cornrows', 'Locs'],
      priceRange: '$$',
      verified: true,
      featured: true,
      bio: 'Specializing in natural hair care and protective styles for over 8 years.',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop',
    },
    {
      id: '2',
      name: 'Zara Williams',
      location: 'Mississauga, ON',
      rating: 4.8,
      reviewCount: 89,
      specialties: ['Weaves', 'Wigs', 'Heat Styling'],
      priceRange: '$$$',
      verified: true,
      featured: true,
      bio: 'Expert in protective styling and hair extensions with a passion for healthy hair.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop',
    },
    {
      id: '3',
      name: 'Amara Davis',
      location: 'North York, ON',
      rating: 4.7,
      reviewCount: 156,
      specialties: ['Haircuts', 'Natural Styles', 'Braids'],
      priceRange: '$$',
      verified: true,
      featured: true,
      bio: 'Celebrating natural texture and creating custom looks for every client.',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop',
    },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Ultimate Guide to Protective Styles',
      excerpt: 'Discover the best protective styles for your hair type and lifestyle.',
      publishedDate: '2024-12-15',
      slug: 'ultimate-guide-protective-styles',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=250&fit=crop',
    },
    {
      id: '2',
      title: 'Maintaining Healthy Locs: Expert Tips',
      excerpt: 'Professional advice on keeping your locs healthy and beautiful.',
      publishedDate: '2024-12-10',
      slug: 'maintaining-healthy-locs',
      image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=250&fit=crop',
    },
    {
      id: '3',
      title: 'Finding the Right Stylist for You',
      excerpt: 'What to look for when choosing a hairstylist for your specific needs.',
      publishedDate: '2024-12-05',
      slug: 'finding-right-stylist',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=250&fit=crop',
    },
  ];

  const handleSearch = (query: string, location: string) => {
    console.log('Search:', query, location);
    // Navigate to search page when implemented
  };

  const handleStylistClick = (stylist: Stylist) => {
    console.log('Stylist clicked:', stylist.name);
    // Navigate to stylist profile when implemented
  };

  return (
    <div className='bg-[#FFE8C9]'>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-[#773800] mb-6'>
              Find Your Perfect{' '}
              <span className='bg-gradient-to-r from-[#E9887E] to-[#F4B637] bg-clip-text text-transparent'>
                Hair Stylist
              </span>
            </h1>
            <p className='text-lg sm:text-xl text-[#773800] mb-8 max-w-3xl mx-auto'>
              At Knotless, Black hair, in all its textures and styles, is at the center of our
              platform. We help you connect with local, skilled professionals who can meet your
              unique haircare and styling needs.
            </p>
            <div className='mb-12'>
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>

      {/* Style Icons Section */}
      <div className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-[#773800] mb-4'>
              What Style Are You Looking For?
            </h2>
            <p className='text-lg text-gray-600'>
              Browse by hair service to find specialists in your area
            </p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6'>
            {HAIR_SERVICES.map((service, index) => (
              <div
                key={service.name}
                onClick={() => setSelectedServiceIndex(index)}
                className={`text-center p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                  selectedServiceIndex === index
                    ? 'bg-gradient-to-br from-[#E9887E] to-[#F4B637] text-white shadow-xl'
                    : 'bg-[#FFE8C9] text-[#773800] hover:bg-gradient-to-br hover:from-[#E9887E] hover:to-[#F4B637] hover:text-white shadow-md'
                }`}
              >
                <div className='text-3xl mb-3'>{service.icon}</div>
                <div className='text-sm font-semibold'>{service.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Stylists Section */}
      <div className='bg-[#FFE8C9] py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-[#773800] mb-4'>Featured Stylists</h2>
            <p className='text-lg text-gray-600'>Top-rated professionals in your area</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredStylists.map((stylist) => (
              <StylistCard key={stylist.id} stylist={stylist} onClick={handleStylistClick} />
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between mb-12'>
            <div>
              <h2 className='text-3xl font-bold text-[#773800] mb-4'>Knotless Blog</h2>
              <p className='text-lg text-gray-600'>
                Tips, trends, and inspiration for your hair journey
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className='bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer'
              >
                <div className='h-48 bg-gradient-to-br from-[#FFE8C9] to-[#E9887E]'>
                  {post.image ? (
                    <img src={post.image} alt={post.title} className='w-full h-full object-cover' />
                  ) : (
                    <div className='flex items-center justify-center h-full'>
                      <div className='text-4xl text-[#773800] opacity-50'>📝</div>
                    </div>
                  )}
                </div>
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>{post.title}</h3>
                  <p className='text-gray-600 text-sm mb-4'>{post.excerpt}</p>
                  <time className='text-xs text-gray-500'>
                    {new Date(post.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
