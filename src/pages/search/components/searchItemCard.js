import { Link } from 'react-router-dom';
import '../../../assets/css/list-card-styles.css';
import { FAVOURITES_ICON } from '../../../utils/constants';

export default function SearchItemCard({ product }) {
  const { descr, location, timeStamp, price, img, featured } = product;
  return (
    <Link to='/product' className='list-card'>
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
      {featured ? (
        <div className='list-card-info  list-featured'>
          <span className='list-featured-tag'>FEATURED</span>

          <img
            src={FAVOURITES_ICON}
            alt='Favourites Icon'
            className='list-heart-icon'
          />
          <div className='list-info-container list-info-featured'>
            <span className='list-price'> Rs {price}</span>
            <span className='list-descr'> {descr} </span>
          </div>
          <div className='list-location-container'>
            <span className='list-location'>{location}</span>
            <span className='list-location'>{timeStamp}</span>
          </div>
        </div>
      ) : (
        <div className='list-card-info '>
          <img
            src={FAVOURITES_ICON}
            alt='Favourites Icon'
            className='list-heart-icon'
          />
          <div className='list-info-container'>
            <span className='list-price'> Rs {price}</span>
            <span className='list-descr'> {descr} </span>
          </div>
          <div className='list-location-container'>
            <span className='list-location'>{location}</span>
            <span className='list-location'>{timeStamp}</span>
          </div>
        </div>
      )}
    </Link>
  );
}
