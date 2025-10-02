import nexbid from '../assets/nexbid.png';
import blink from '../assets/blink.png';
import evergreen from '../assets/evergreen.png';

export const projects = [
  {
    title: 'NexBid',
    image: nexbid,
    description:
      'NexBid is a React-based auction marketplace that allows users to create listings, place bids, and manage their profiles. It features an intuitive UI, real-time bidding updates, and a seamless user experience for both buyers and sellers.',
    features: [
      'User Authentication - Sign up, log in, and manage your profile',
      'Bidding System - Place bids on auctions in real-time',
      'Auction Listings - View and filter auctions based on categories',
      'Favorites System - Save auctions for later',
      'Mobile Responsive Design - Optimized for all devices',
      'Secure API Requests - Uses authentication tokens for protected routes',
    ],
    techStack: [
      'React',
      'Vite',
      'Chakra UI',
      'Axios',
      'React Router',
      'Date-fns',
    ],
    live: 'https://sp2-ihlonne.netlify.app/',
    github:
      'https://github.com/ihlonne/SP2-ihlonne',
    tags: ['react', 'chakra ui', 'api'],
  },
  {
    title: 'BliNK',
    image: blink,
    description:
      'This is a fully functional online shop built using Next.js, React, TypeScript, and Tailwind CSS, as part of the JavaScript Frameworks course assignment at Noroff.',
    features: [
      'Search and sort functionality',
      'Shopping cart with add/remove/adjust',
      'Checkout with confirmation page',
      'Product detail pages with reviews and tags',
      'Contact form with TypeScript validation',
      'REST API integration (Noroff API)',
      'Toast notifications for user actions',
      'Responsive design using Tailwind CSS',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS v4',
      'React Icons',
      'React Hot Toast',
    ],
    live: 'https://jsfw-2025-v1-ihlonne.vercel.app/',
    github:
      'https://github.com/NoroffFEU/jsfw-2025-v1-ihlonne',
    tags: ['next.js', 'tailwind', 'api'],
  },
  {
    title: 'Evergreen',
    image: evergreen,
    description:
      'A basic e-commerce site where I was introduced to Next.js and TypeScript.',
    live: 'https://jsfw-2025-v1-ihlonne.vercel.app/',
    github:
      'https://github.com/NoroffFEU/jsfw-2025-v1-ihlonne',
    tags: ['html', 'tailwind', 'javascript'],
  },
];
