import { Link } from 'react-router-dom';
import './style.css';
import { propTypes, defaultProps } from './props';
import { FAVOURITES_ICON } from '../../../../utils/constants';

export default function SearchItemCard({
  descr,
  location,
  timeStamp,
  price,
  img,
  featured,
  id,
}) {
  return (
    <Link to={`/product/${id}`} className='list-card'>
      <div className='list-img-container'>
        <img
          role='presentation'
          alt='Apple iPhone 12 mini'
          title='Apple iPhone 12 mini'
          aria-label='Cover photo'
          className='list-img lazy loaded'
          src={img}
          data-was-processed='true'
        />
      </div>

      <div
        className={
          featured ? 'list-card-info  list-featured' : 'list-card-info'
        }
      >
        {featured && <span className='list-featured-tag'>FEATURED</span>}

        <img
          src={FAVOURITES_ICON}
          alt='Favourites Icon'
          className='list-heart-icon'
        />
        <div
          className={
            featured
              ? 'list-info-container list-info-featured'
              : 'list-info-container'
          }
        >
          <span className='list-price'> Rs {price}</span>
          <span className='list-descr'> {descr} </span>
        </div>
        <div className='list-location-container'>
          <span className='list-location'>{location}</span>
          <span className='list-location'>{timeStamp}</span>
        </div>
      </div>
    </Link>
  );
}

SearchItemCard.propTypes = propTypes;
SearchItemCard.defaultProps = defaultProps;
