const SEARCH_LOCATIONS = [
  { location: 'Azad Kashmir, Pakistan', id: '1' },
  { location: 'Balochistan, Pakistan', id: '2' },
  { location: 'Azad Kashmir, Pakistan', id: '3' },
  { location: 'Islamabad Capital Territory, Pakistan', id: '4' },
  { location: 'Khyber PakhtunKhwa, Pakistan', id: '5' },
  { location: 'Northern Areas, Pakistan', id: '6' },
  { location: 'Punjab, Pakistan', id: '7' },
  { location: 'Sindh, Pakistan', id: '8' },
];

const MAIN_CATEGORIES = [
  { name: 'Mobile Phones', id: '1' },
  { name: 'Cars', id: '2' },
  { name: 'Motocycles', id: '3' },
  { name: 'Houses', id: '4' },
  { name: 'TV - Video - Audio', id: '5' },
  { name: 'Tablets', id: '6' },
  { name: 'Land & Plots', id: '7' },
];

const ALL_CATEGORIES = [
  { name: 'Action', id: '1' },
  { name: 'Another Action', id: '2' },
  { name: 'And Another Action', id: '3' },
  { name: 'Action', id: '4' },
];

const POPULAR_CATEGORIES = [
  { name: 'Cars', id: '1' },
  { name: 'Flats for rent', id: '2' },
  { name: 'Mobile Phones', id: '3' },
  { name: 'Jobs', id: '4' },
];

const TRENDING_SEARCHES = [
  { name: 'Bikes', id: '1' },
  { name: 'Watches', id: '2' },
  { name: 'Books', id: '3' },
  { name: 'Dogs', id: '4' },
];

const ABOUT_US = [
  { name: 'About EMPG', id: '1' },
  { name: 'OLX Blog', id: '2' },
  { name: 'Contact Us', id: '3' },
  { name: 'OLX for businesses', id: '4' },
];

const OLX_INFO = [
  { name: 'Help', id: '1' },
  { name: 'Sitemap', id: '2' },
  { name: 'Legacy and Privacy information', id: '3' },
];

const POSTS = [
  {
    img: 'https://images.olx.com.pk/thumbnails/182804345-240x180.jpeg',
    productImages: [
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
    ],
    price: '110,000',
    descr: 'Husky puppies',
    location: 'BAHRIA TOWN, LAHORE',
    timeStamp: '1 WEEK AGO',
    featured: false,
    id: '1',
    seller: { name: 'ali', memberSince: 'Jan 2014', phone: '92 123 4567' },
  },
  {
    img: 'https://images.olx.com.pk/thumbnails/182804345-240x180.jpeg',
    productImages: [
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
    ],
    price: '110,000',
    descr: 'Husky puppies',
    location: 'BAHRIA TOWN, LAHORE',
    timeStamp: '1 WEEK AGO',
    featured: false,
    id: '2',
    seller: { name: 'ali', memberSince: 'Jan 2014', phone: '92 123 4567' },
  },
  {
    img: 'https://images.olx.com.pk/thumbnails/182804345-240x180.jpeg',
    productImages: [
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
    ],
    price: '110,000',
    descr: 'Husky puppies',
    location: 'BAHRIA TOWN, LAHORE',
    timeStamp: '1 WEEK AGO',
    featured: true,
    id: '3',
    seller: { name: 'ali', memberSince: 'Jan 2014', phone: '92 123 4567' },
  },
  {
    img: 'https://images.olx.com.pk/thumbnails/182804345-240x180.jpeg',
    productImages: [
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
    ],
    price: '110,000',
    descr: 'Husky puppies',
    location: 'BAHRIA TOWN, LAHORE',
    timeStamp: '1 WEEK AGO',
    featured: false,
    id: '4',
    seller: { name: 'ali', memberSince: 'Jan 2014', phone: '92 123 4567' },
  },
  {
    img: 'https://images.olx.com.pk/thumbnails/182804345-240x180.jpeg',
    productImages: [
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
    ],
    price: '110,000',
    descr: 'Husky puppies',
    location: 'BAHRIA TOWN, LAHORE',
    timeStamp: '1 WEEK AGO',
    featured: true,
    id: '5',
    seller: { name: 'ali', memberSince: 'Jan 2014', phone: '92 123 4567' },
  },
  {
    img: 'https://images.olx.com.pk/thumbnails/182804345-240x180.jpeg',
    productImages: [
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
    ],
    price: '110,000',
    descr: 'Husky puppies',
    location: 'BAHRIA TOWN, LAHORE',
    timeStamp: '1 WEEK AGO',
    featured: false,
    id: '6',
    seller: { name: 'ali', memberSince: 'Jan 2014', phone: '92 123 4567' },
  },
  {
    img: 'https://images.olx.com.pk/thumbnails/182804345-240x180.jpeg',
    productImages: [
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
    ],
    price: '110,000',
    descr: 'Husky puppies',
    location: 'BAHRIA TOWN, LAHORE',
    timeStamp: '1 WEEK AGO',
    featured: false,
    id: '7',
    seller: { name: 'ali', memberSince: 'Jan 2014', phone: '92 123 4567' },
  },
  {
    img: 'https://images.olx.com.pk/thumbnails/182804345-240x180.jpeg',
    productImages: [
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
      'https://images.olx.com.pk/thumbnails/182804345-400x300.webp',
    ],
    price: '110,000',
    descr: 'Husky puppies',
    location: 'BAHRIA TOWN, LAHORE',
    timeStamp: '1 WEEK AGO',
    featured: true,
    id: '8',
    seller: { name: 'ali', memberSince: 'Jan 2014', phone: '92 123 4567' },
  },
];

const PRODUCT_BREADCRUMBS = [
  { name: 'Home', id: '1' },
  { name: 'Animals', id: '2' },
  { name: 'Dogs', id: '3' },
  { name: 'Dogs in Punjab', id: '4' },
  { name: 'Dogs in Lahore', id: '5' },
  { name: 'Dogs in Bahria Town', id: '6' },
];

const SEARCH_BREADCRUMBS = [
  { name: 'Home', id: '1' },
  { name: 'Mobiles', id: '2' },
];

export {
  SEARCH_LOCATIONS,
  MAIN_CATEGORIES,
  ALL_CATEGORIES,
  POPULAR_CATEGORIES,
  TRENDING_SEARCHES,
  ABOUT_US,
  OLX_INFO,
  POSTS,
  PRODUCT_BREADCRUMBS,
  SEARCH_BREADCRUMBS,
};
