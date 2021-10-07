import '../../../../assets/css/seller-description-styles.css';
import {
  PROFILE_PIC_ICON,
  MEMBER_ARROW,
  PHONE_ICON,
} from '../../../../utils/constants';

export default function SellerDescription({ seller }) {
  const { name, memberSince, phone } = seller;
  return (
    <>
      <div class='product-info-container mt-2'>
        <p class='seller-info-text'>Seller Description</p>
        <a class='seller-profile-container'>
          <div class='d-flex'>
            <img
              src={PROFILE_PIC_ICON}
              alt='Profile icon'
              height='68'
              width='68'
            />
            <div class='mt-2 ms-1'>
              <b>{name}</b>
              <p class='member-since-text'>Member since {memberSince}</p>
            </div>
          </div>
          <img src={MEMBER_ARROW} alt='Right Arrow' width='18' height='18' />
        </a>
        <button class='chat-button'>
          <span class='text-light'>Chat with seller</span>
        </button>
        <div class='contact-container'>
          <svg width='26' height='26' viewBox='0 0 1024 1024'>
            <path d={PHONE_ICON}></path>
          </svg>
          <span class='seller-number'> ** *** ****</span>
          <span class='show-number-text'>Show Number</span>
        </div>
      </div>
    </>
  );
}
