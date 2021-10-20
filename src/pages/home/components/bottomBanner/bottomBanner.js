import './style.css';
import { defaultProps, propTypes } from './props';
import {
  BOTTOM_BANNER_IMG,
  APPSTORE_ICON,
  PLAYSTORE_ICON,
} from '../../../../utils/constants';

export function BottomBanner() {
  return (
    <section className='bottom-banner'>
      <div>
        <img
          className='bottom-banner-img'
          src={BOTTOM_BANNER_IMG}
          alt='OLX mobile app'
        />
      </div>
      <div className='bottom-banner-descr'>
        <div className='bottom-banner-heading'>Try the OLX app</div>
        <div className='bottom-banner-text'>
          Buy, sell and find just about anything
          <br />
          using the app on your mobile.
        </div>
      </div>

      <div className='banner-social-container'>
        <div className='get-app-text'>GET YOUR APP TODAY</div>
        <div className='banner-social-images'>
          <img
            src={APPSTORE_ICON}
            alt='Appstore icon'
            className='banner-appstore-img'
          />

          <img
            src={PLAYSTORE_ICON}
            alt='Playstore icon'
            className='banner-playstore-img'
          />
        </div>
      </div>
    </section>
  );
}

BottomBanner.propTypes = propTypes;
BottomBanner.defaultProps = defaultProps;
