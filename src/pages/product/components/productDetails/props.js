import { string } from 'prop-types';

export const propTypes = {
  //  product price
  price: string.isRequired,

  // product category type
  type: string,

  // ad descr
  descr: string.isRequired,
};

export const defaultProps = {};
