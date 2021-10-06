import { FAVOURITES_ICON } from '../../../../utils/constants';
import '../../../../assets/css/home-card-styles.css';

export default function card({ post }) {
  const { featured } = post;
  return (
    <div className='card'>
      <a href='/pages/product.html' className='card-link'>
        <div className='card-container'>
          {featured && (
            <div class='featured'>
              <span class='featured-text'>FEATURED</span>
            </div>
          )}
          <div className='card-image-container'>
            <img
              role='presentation'
              alt='Husky puppies'
              title='Husky puppies'
              aria-label='Cover photo'
              data-src={post.img}
              className='card-img lazy loaded'
              src={post.img}
            />
            <img
              src={FAVOURITES_ICON}
              alt='Favourites icon'
              className='heart-icon'
            />
          </div>
          <div
            className={
              featured ? 'featured-card-bottom' : 'card-info-container'
            }
          >
            <div className='card-text-container'>
              <span className='price-text'> RS {post.price} </span>
              <p className='add-desc'>Husky puppies</p>
            </div>
            <div className='location-container'>
              <span className='location-text'> {post.location}</span>
              <span className='location-text'>{post.timeStamp}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
