import '../../../../../assets/css/carousel-card-styles.css';
import { FAVOURITES_ICON } from '../../../../../utils/constants';

export default function CarouselCard({ post }) {
  const { price, descr, location, timeStamp, img } = post;
  return (
    <>
      <div className='carousel-card'>
        <a href='/pages/product.html' className='carousel-card-href'>
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
                <span className='carousel-location-text'>{location}</span>
                <span className='carousel-location-text'>{timeStamp}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
