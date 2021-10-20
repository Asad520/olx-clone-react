import { defaultProps, propTypes } from './props';
import { Link } from 'react-router-dom';
import { OLX_LOGO } from '../../../../utils/constants';

export function Brand() {
  return (
    <Link className='navbar-brand' to='/'>
      <img src={OLX_LOGO} alt='olx logo' />
    </Link>
  );
}

Brand.propTypes = propTypes;
Brand.defaultProps = defaultProps;
