import '../../../../assets/css/seller-location-styles.css';
import { RIGHT_ARROW } from '../../../../utils/constants';

export default function SellerLocation({ product }) {
  const { location, id } = product;
  return (
    <>
      <div className='product-info-container mt-5'>
        <h5>Posted in</h5>
        <span className='map-location-text'>{location}</span>
        <div className='map-container'>
          <iframe
            title='seller location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27215.452501043248!2d74.3000874!3d31.4985649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190386ef569e67%3A0xf11f0982fad7fb30!2sSheik%20Zaid%20Bus%20Stop!5e0!3m2!1sen!2s!4v1631714749843!5m2!1sen!2s'
            className='map'
            loading='lazy'
          ></iframe>
          <div className='see-location-container'>
            See Location
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              width='13'
              height='13'
            >
              <path d={RIGHT_ARROW}></path>
            </svg>
          </div>
        </div>
      </div>
      <div className='ad-id-container'>
        <span className='ad-id'>Ad id {id}</span>
        <div className='report-ad'>Report this ad</div>
      </div>
    </>
  );
}
