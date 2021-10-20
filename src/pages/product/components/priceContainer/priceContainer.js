import './style.css';
import { FAVOURITES_ICON, SHARE_ICON } from '../../../../utils/constants';
import { propTypes, defaultProps } from './props';
import usePriceContainer from './controller';

export function PriceContainer(props) {
  const { price, descr, location, timeStamp } = usePriceContainer(props);

  return (
    <div className='product-info-container'>
      <div className='product-price-container'>
        <h2 className='fw-bold'>Rs {price}</h2>
        <div>
          <span className='share-icon'>
            <img src={SHARE_ICON} className='info-icon' alt='Share icon' />
          </span>
          <span>
            <img
              src={FAVOURITES_ICON}
              className='info-icon'
              alt='Favourites icon'
            />
          </span>
        </div>
      </div>
      <p className='product-heading'>{descr}</p>
      <div className='item-post-container'>
        <p>{location}</p>
        <p>{timeStamp}</p>
      </div>
    </div>
  );
}

PriceContainer.propTypes = propTypes;
PriceContainer.defaultProps = defaultProps;
