import type { ServiceType } from '@/types';

// Brand colors
export const BRAND_COLORS = {
  coral: '#E9887E',
  gold: '#F4B637',
  cream: '#FFE8C9',
  brown: '#773800',
  white: '#FFFFFF',
} as const;

// Hair services with icons
export const HAIR_SERVICES: ServiceType[] = [
  { name: 'Cornrows', icon: '🌾' },
  { name: 'Wigs', icon: '👑' },
  { name: 'Haircuts', icon: '✂️' },
  { name: 'Braids', icon: '🪢' },
  { name: 'Weaves', icon: '💫' },
  { name: 'Locs', icon: '🔒' },
  { name: 'Heat Styling', icon: '🔥' },
];
