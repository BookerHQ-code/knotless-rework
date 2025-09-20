import { StarIcon, MapPinIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import type { Stylist } from '@/types';

interface StylistCardProps {
  stylist: Stylist;
  onClick?: (stylist: Stylist) => void;
}

const StylistCard = ({ stylist, onClick }: StylistCardProps) => {
  const handleClick = () => {
    onClick?.(stylist);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <StarIcon key={i} className='h-4 w-4 text-[#F4B637]' />
        ) : (
          <StarOutlineIcon key={i} className='h-4 w-4 text-gray-300' />
        )
      );
    }
    return stars;
  };

  return (
    <div
      onClick={handleClick}
      className='bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1'
    >
      <div className='relative h-64 bg-gradient-to-br from-[#FFE8C9] to-[#E9887E]'>
        {stylist.image ? (
          <img src={stylist.image} alt={stylist.name} className='w-full h-full object-cover' />
        ) : (
          <div className='flex items-center justify-center h-full'>
            <div className='text-6xl text-[#773800] opacity-50'>👤</div>
          </div>
        )}

        {stylist.verified && (
          <div className='absolute top-3 right-3'>
            <CheckBadgeIcon className='h-6 w-6 text-[#F4B637]' />
          </div>
        )}

        {stylist.featured && (
          <div className='absolute top-3 left-3'>
            <span className='bg-[#773800] text-white px-2 py-1 rounded-full text-xs font-semibold'>
              Featured
            </span>
          </div>
        )}
      </div>

      <div className='p-6'>
        <div className='flex items-start justify-between mb-2'>
          <h3 className='text-lg font-semibold text-gray-900 truncate'>{stylist.name}</h3>
          {stylist.priceRange && (
            <span className='text-sm text-[#773800] font-medium'>{stylist.priceRange}</span>
          )}
        </div>

        <div className='flex items-center text-gray-600 mb-3'>
          <MapPinIcon className='h-4 w-4 mr-1' />
          <span className='text-sm'>{stylist.location}</span>
        </div>

        {stylist.rating && (
          <div className='flex items-center mb-3'>
            <div className='flex mr-2'>{renderStars(stylist.rating)}</div>
            <span className='text-sm text-gray-600'>
              {stylist.rating} {stylist.reviewCount && `(${stylist.reviewCount} reviews)`}
            </span>
          </div>
        )}

        <div className='flex flex-wrap gap-2 mb-4'>
          {stylist.specialties.slice(0, 3).map((specialty, index) => (
            <span
              key={index}
              className='px-3 py-1 bg-[#FFE8C9] text-[#773800] text-xs font-medium rounded-full'
            >
              {specialty}
            </span>
          ))}
          {stylist.specialties.length > 3 && (
            <span className='px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full'>
              +{stylist.specialties.length - 3} more
            </span>
          )}
        </div>

        {stylist.bio && <p className='text-sm text-gray-600 line-clamp-2'>{stylist.bio}</p>}
      </div>
    </div>
  );
};

export default StylistCard;
