import '../../../../assets/css/seller-description-styles.css';
import {
  PROFILE_PIC_ICON,
  MEMBER_ARROW,
  PHONE_ICON,
} from '../../../../utils/constants';

export default function SellerDescription({ seller }) {
  const { name, memberSince } = seller;
  return (
    <>
      <div className='product-info-container mt-2'>
        <p className='seller-info-text'>Seller Description</p>
        <div className='seller-profile-container'>
          <div className='d-flex'>
            <img
              src={PROFILE_PIC_ICON}
              alt='Profile icon'
              height='68'
              width='68'
            />
            <div className='mt-2 ms-1'>
              <b>{name}</b>
              <p className='member-since-text'>Member since {memberSince}</p>
            </div>
          </div>
          <img src={MEMBER_ARROW} alt='Right Arrow' width='18' height='18' />
        </div>
        <button className='chat-button'>
          <span className='text-light'>Chat with seller</span>
        </button>
        <div className='contact-container'>
          <svg width='26' height='26' viewBox='0 0 1024 1024'>
            <path d={PHONE_ICON}></path>
          </svg>
          <span className='seller-number'> ** *** ****</span>
          <span className='show-number-text'>Show Number</span>
        </div>
      </div>
    </>
  );
}
