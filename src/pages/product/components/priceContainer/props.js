import PropTypes from 'prop-types';

export const propTypes = {
  price: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export const defaultProps = {};
