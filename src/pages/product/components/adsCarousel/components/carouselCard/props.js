import { string } from 'prop-types';

export const propTypes = {
  // main image url for card
  img: string.isRequired,

  // ad description for card
  descr: string.isRequired,

  // item price for card
  price: string.isRequired,

  // item selling location for card
  location: string.isRequired,

  // timestamp when ad was posted
  timeStamp: string.isRequired,

  // unique id for each ad
  id: string.isRequired,
};

export const defaultProps = {};
