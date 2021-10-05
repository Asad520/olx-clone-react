import { OLX_LOGO } from '../../../utils/constants';

export default function brand() {
  return (
    <>
      <a className='navbar-brand' href='/index.html'>
        <img src={OLX_LOGO} alt='olx logo' />
      </a>
    </>
  );
}
