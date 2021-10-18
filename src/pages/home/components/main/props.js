import { bool, string } from 'prop-types';

export const propTypes = {
  // boolean for featured posts
  featured: bool.isRequired,

  // main img url for post
  img: string.isRequired,

  // post descr
  descr: string.isRequired,

  // item's price
  price: string.isRequired,

  // item's selling location
  location: string.isRequired,

  // timestamp when ad was posted
  timeStamp: string.isRequired,

  // unique id of each post
  id: string.isRequired,
};

export const defaultProps = {};
