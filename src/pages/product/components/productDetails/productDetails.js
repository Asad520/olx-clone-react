import './style.css';
import { propTypes, defaultProps } from './props';

export default function ProductDetails({ price, type, descr }) {
  return (
    <>
      <div className='product-details-container'>
        <h5 className='fw-bold'>Details</h5>
        <div className='product-details'>
          <span className='product-keys'>Price</span>
          <span className='product-values'>{price}</span>
          {type && (
            <>
              <span className='product-keys'>Type</span>
              <span className='product-values'>{type}</span>
            </>
          )}
        </div>
        <h5 className='description-heading'>Description</h5>
        <p className='description'>{descr}</p>
      </div>
    </>
  );
}

ProductDetails.propTypes = propTypes;
ProductDetails.defaultProps = defaultProps;
