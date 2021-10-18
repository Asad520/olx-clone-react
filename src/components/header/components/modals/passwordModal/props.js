import { bool, func } from 'prop-types';

export const propTypes = {
  // boolean to display and hide login modal
  show: bool.isRequired,

  // function to close modal when clicked offscreen
  handleClose: func.isRequired,
};

export const defaultProps = {};
