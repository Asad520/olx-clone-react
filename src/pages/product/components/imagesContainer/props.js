import { bool, string, array } from 'prop-types';

export const propTypes = {
  // boolean to show if ad is featured
  featured: bool.isRequired,

  // main image url for product
  img: string.isRequired,

  // array of all images urls for product
  productImages: array.isRequired,
};

export const defaultProps = {};
