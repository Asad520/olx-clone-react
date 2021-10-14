import { Link } from 'react-router-dom';
import { FAVOURITES_ICON } from '../../../../utils/constants';
import './style.css';
import { propTypes } from './props';

export default function Card({
  featured,
  img,
  descr,
  price,
  location,
  timeStamp,
  id,
}) {
  return (
    <div className='card'>
      <Link to={`/product/${id}`} className='card-link'>
        <div className='card-container'>
          {featured && (
            <div className='featured'>
              <span className='featured-text'>FEATURED</span>
            </div>
          )}
          <div className='card-image-container'>
            <img
              role='presentation'
              alt='Husky puppies'
              title='Husky puppies'
              aria-label='Cover photo'
              data-src={img}
              className='card-img lazy loaded'
              src={img}
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
              <span className='price-text'> RS {price} </span>
              <p className='add-desc'>{descr}</p>
            </div>
            <div className='location-container'>
              <span className='location-text'> {location}</span>
              <span className='location-text'>{timeStamp}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = propTypes;
