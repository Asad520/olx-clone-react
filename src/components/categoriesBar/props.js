import { bool } from 'prop-types';

export const propTypes = {
  // boolean to decide whether to display bottom shadow in categries bar
  shadow: bool,
};

export const defaultProps = {
  // default false for shadow i.e not displaying bottom shadow in categories bar
  shadow: false,
};
