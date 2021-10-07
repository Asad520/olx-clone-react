import '../../../../assets/css/price-container-styles.css';
import { FAVOURITES_ICON, SHARE_ICON } from '../../../../utils/constants';

export default function PriceContainer({ product }) {
  const { price, descr, location, timeStamp } = product;
  return (
    <>
      <div class='product-info-container'>
        <div class='product-price-container'>
          <h2 class='fw-bold'>Rs {price}</h2>
          <div>
            <a href='#' class='share-icon'>
              <img src={SHARE_ICON} class='info-icon' alt='Share icon' />
            </a>
            <a href='#'>
              <img
                src={FAVOURITES_ICON}
                class='info-icon'
                alt='Favourites icon'
              />
            </a>
          </div>
        </div>
        <p class='product-heading'>{descr}</p>
        <div class='item-post-container'>
          <p>{location}</p>
          <p>{timeStamp}</p>
        </div>
      </div>
    </>
  );
}
