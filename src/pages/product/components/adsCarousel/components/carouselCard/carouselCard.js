import { Link } from 'react-router-dom';
import './style.css';
import { propTypes, defaultProps } from './props';
import { FAVOURITES_ICON } from '../../../../../../utils/constants';
import useCarouselCard from './controller';

export function CarouselCard(props) {
  const { price, descr, locationText, timeStamp, img, id } =
    useCarouselCard(props);

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
CarouselCard.defaultProps = defaultProps;
