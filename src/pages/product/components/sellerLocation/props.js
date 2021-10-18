import { string } from 'prop-types';

export const propTypes = {
  // seller location
  location: string.isRequired,

  // unique ad id
  id: string.isRequired,
};

export const defaultProps = {};
