import { Link } from 'react-router-dom';
import './style.css';
import { propTypes } from './props';
import { FAVOURITES_ICON } from '../../../../../../utils/constants';

export default function CarouselCard({
  price,
  descr,
  location,
  timeStamp,
  img,
  id,
}) {
  const locationText =
    location.length > 12 ? location.slice(0, 12) + '...' : location;
  return (
    <Link to={`/product/${id}`} className='carousel-card'>
      <div className='carousel-card-container'>
        <div className='carousel-image-container'>
          <img
            src={img}
            className='carousel-card-img'
            alt='Carousel card img'
          />
          <img
            src={FAVOURITES_ICON}
            className='carousel-heart-icon'
            alt='Favourites icon'
          />
        </div>
        <div className='carousel-info-container'>
          <div className='carousel-text-container'>
            <span className='carousel-price-text'>RS {price}</span>
            <span className='carousel-add-desc'>{descr}</span>
          </div>
          <div className='carousel-location-container'>
            <span className='carousel-location-text'>{locationText}</span>
            <span className='carousel-location-text'>{timeStamp}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

CarouselCard.propTypes = propTypes;
