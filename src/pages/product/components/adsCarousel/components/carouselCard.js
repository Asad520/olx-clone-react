import '../../../../../assets/css/carousel-card-styles.css';
import { FAVOURITES_ICON } from '../../../../../utils/constants';

export default function CarouselCard({ post }) {
  const { price, descr, location, timeStamp, img } = post;
  return (
    <>
      <div class='carousel-card'>
        <a href='/pages/product.html' className='carousel-card-href'>
          <div class='carousel-card-container'>
            <div class='carousel-image-container'>
              <img
                src={img}
                class='carousel-card-img'
                alt='Carousel card img'
              />
              <img
                src={FAVOURITES_ICON}
                class='carousel-heart-icon'
                alt='Favourites icon'
              />
            </div>
            <div class='carousel-info-container'>
              <div class='carousel-text-container'>
                <span class='carousel-price-text'>RS {price}</span>
                <span class='carousel-add-desc'>{descr}</span>
              </div>
              <div class='carousel-location-container'>
                <span class='carousel-location-text'>{location}</span>
                <span class='carousel-location-text'>{timeStamp}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
