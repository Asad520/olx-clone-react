import { bool, string } from 'prop-types';

export const propTypes = {
  // boolean for featured ads
  featured: bool.isRequired,

  // main image url for product
  img: string.isRequired,

  // ad description
  descr: string.isRequired,

  // product price
  price: string.isRequired,

  // product selling location
  location: string.isRequired,

  // timestamp when ad was posted
  timeStamp: string.isRequired,

  // unique id for each post
  id: string.isRequired,
};

export const defaultProps = {};
