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
import '../../assets/css/footer-styles.css';

export default function footer() {
  const renderFooterCategories = (data) => {
    return data.map((category) => {
      return (
        <a key={category.id} href='#' class='footer-category'>
          {category.name}
        </a>
      );
    });
  };

  return (
    <>
      <footer>
        <section class='footer-section'>
          <div class='container footer-container'>
            <div class='footer-categories col-lg-2'>
              <span class='footer-heading'>POPULAR CATEGORIES</span>
              {renderFooterCategories(POPULAR_CATEGORIES)}
            </div>
            <div class='footer-categories col-lg-2'>
              <span class='footer-heading'>TRENDING SEARCHES</span>
              {renderFooterCategories(TRENDING_SEARCHES)}
            </div>
            <div class='footer-categories col-lg-2'>
              <span class='footer-heading'>ABOUT US</span>
              {renderFooterCategories(ABOUT_US)}
            </div>
            <div class='footer-categories col-lg-2'>
              <span class='footer-heading'>OLX</span>
              {renderFooterCategories(OLX_INFO)}
            </div>
            <div class='col ms-2'>
              <span class='footer-heading'>FOLLOW US</span>
              <div class='social-media-container'>
                <div class='d-flex justify-content-between w-120'>
                  <a href='#' class='footer-category'>
                    <img
                      src={FACEBOOK_ICON}
                      alt='Facebook logo'
                      width='24'
                      height='24'
                    />
                  </a>
                  <a href='#' class='footer-category'>
                    <img
                      src={TWITTER_ICON}
                      alt='Twitter logo'
                      width='24'
                      height='24'
                    />
                  </a>
                  <a href='#' class='footer-category'>
                    <img
                      src={YOUTUBE_ICON}
                      alt='Youtube logo'
                      width='24'
                      height='24'
                    />
                  </a>
                  <a href='#' class='footer-category'>
                    <img
                      src={INSTAGRAM_ICON}
                      alt='Instagram logo'
                      width='24'
                      height='24'
                    />
                  </a>
                </div>
                <div class='store-container'>
                  <a href=''>
                    <img
                      src={APPSTORE_ICON}
                      alt='Appstore logo'
                      width='84'
                      height='28'
                    />
                  </a>
                  <a href=''>
                    <img
                      src={PLAYSTORE_ICON}
                      alt='Playstore logo'
                      width='84'
                      height='28'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class='copyright-container'>
          <div class='copyright-text'>
            <span class='footer-copyright'>
              Free Classifieds in Pakistan &nbsp; &nbsp;
            </span>
            <span>. © 2006-2021 OLX</span>
          </div>
        </div>
      </footer>
    </>
  );
}
