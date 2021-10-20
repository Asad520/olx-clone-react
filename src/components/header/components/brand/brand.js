import { defaultProps, propTypes } from './props';
import { Link } from 'react-router-dom';
import { OLX_LOGO } from '../../../../utils/constants';
import useBrand from './controller';

export function Brand(props) {
  useBrand(props);

  return (
    <Link className='navbar-brand' to='/'>
      <img src={OLX_LOGO} alt='olx logo' />
    </Link>
  );
}

Brand.propTypes = propTypes;
Brand.defaultProps = defaultProps;
