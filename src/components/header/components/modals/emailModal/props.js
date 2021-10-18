import { bool, func } from 'prop-types';

export const propTypes = {
  // boolean to display and hide email modal
  show: bool.isRequired,

  // function to close modal when clicked offscreen
  handleClose: func.isRequired,

  // function to open password modal
  openPasswordModal: func.isRequired,
};

export const defaultProps = {};
