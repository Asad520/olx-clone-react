import { Link } from 'react-router-dom';
import { OLX_LOGO } from '../../../utils/constants';

export default function brand() {
  return (
    <Link className='navbar-brand' to='/'>
      <img src={OLX_LOGO} alt='olx logo' />
    </Link>
  );
}
