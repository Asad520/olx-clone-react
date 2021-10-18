import { string } from 'prop-types';

export const propTypes = {
  // seller name
  name: string.isRequired,

  // joining date of seller
  memberSince: string.isRequired,
};

export const defaultProps = {};
