import {
  POPULAR_CATEGORIES,
  TRENDING_SEARCHES,
  ABOUT_US,
  OLX_INFO,
} from '../../utils/data';
import {
  FACEBOOK_ICON,
  TWITTER_ICON,
  YOUTUBE_ICON,
  INSTAGRAM_ICON,
  APPSTORE_ICON,
  PLAYSTORE_ICON,
} from '../../utils/constants';
import './style.css';
import { Col } from 'react-bootstrap';

export default function Footer() {
  const renderFooterCategories = (data) => {
    return data.map((category) => {
      return (
        <div key={category.id} className='footer-category'>
          {category.name}
        </div>
      );
    });
  };

  return (
    <footer>
      <section className='footer-section'>
        <div className='container footer-container'>
          <Col className='footer-categories ' lg={2}>
            <span className='footer-heading'>POPULAR CATEGORIES</span>
            {renderFooterCategories(POPULAR_CATEGORIES)}
          </Col>
          <Col className='footer-categories' lg={2}>
            <span className='footer-heading'>TRENDING SEARCHES</span>
            {renderFooterCategories(TRENDING_SEARCHES)}
          </Col>
          <Col className='footer-categories' lg={2}>
            <span className='footer-heading'>ABOUT US</span>
            {renderFooterCategories(ABOUT_US)}
          </Col>
          <Col className='footer-categories' lg={2}>
            <span className='footer-heading'>OLX</span>
            {renderFooterCategories(OLX_INFO)}
          </Col>
          <div className='col ms-2'>
            <span className='footer-heading'>FOLLOW US</span>
            <div className='social-media-container'>
              <div className='d-flex justify-content-between w-120'>
                <div className='footer-category'>
                  <img
                    src={FACEBOOK_ICON}
                    alt='Facebook logo'
                    width='24'
                    height='24'
                  />
                </div>
                <div className='footer-category'>
                  <img
                    src={TWITTER_ICON}
                    alt='Twitter logo'
                    width='24'
                    height='24'
                  />
                </div>
                <div className='footer-category'>
                  <img
                    src={YOUTUBE_ICON}
                    alt='Youtube logo'
                    width='24'
                    height='24'
                  />
                </div>
                <div className='footer-category'>
                  <img
                    src={INSTAGRAM_ICON}
                    alt='Instagram logo'
                    width='24'
                    height='24'
                  />
                </div>
              </div>
              <div className='store-container'>
                <div>
                  <img
                    src={APPSTORE_ICON}
                    alt='Appstore logo'
                    width='84'
                    height='28'
                  />
                </div>
                <div>
                  <img
                    src={PLAYSTORE_ICON}
                    alt='Playstore logo'
                    width='84'
                    height='28'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='copyright-container'>
        <div className='copyright-text'>
          <span className='footer-copyright'>
            Free classifieds in Pakistan &nbsp; &nbsp;
          </span>
          <span>. © 2006-2021 OLX</span>
        </div>
      </div>
    </footer>
  );
}
