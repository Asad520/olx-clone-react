import { string } from 'prop-types';

export const propTypes = {
  // product price
  price: string.isRequired,

  // ad description
  descr: string.isRequired,

  // product selling location
  location: string.isRequired,

  // timestamp when ad was posted
  timeStamp: string.isRequired,
};

export const defaultProps = {};
