import { Modal } from 'react-bootstrap';
import './css/modal-styles.css';
import {
  MODAL_OLX_LOGO,
  EMAIL_LOGIN_ICON,
  FACEBOOK_LOGIN_ICON,
  GOOGLE_LOGIN_ICON,
  PHONE_LOGIN_ICON,
} from '../../../utils/constants';

export default function LoginModal(props) {
  const { show, handleClose, openEmailModal } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <button
        type='button'
        className='btn-close modal-close'
        onClick={handleClose}
      ></button>
      <div className='modal-body'>
        <img src={MODAL_OLX_LOGO} alt='OLX Logo' className='modal-img' />
        <span className='welcome-text'>WELCOME TO OLX</span>
        <span className='community-text'>
          The trusted community of <br />
          buyers and sellers.
        </span>
        <div className='modal-buttons'>
          <button className='modal-login-btn'>
            <img
              src={GOOGLE_LOGIN_ICON}
              alt='Google Login Icon'
              className='login-logo'
            />
            <span className='login-text'>Continue with Google</span>
          </button>
          <button className='modal-login-btn'>
            <img
              src={FACEBOOK_LOGIN_ICON}
              alt='Facebook Login Icon'
              className='login-logo'
            />
            <span className='login-text'>Continue with Facbook</span>
          </button>

          <button className='modal-login-btn' onClick={openEmailModal}>
            <img
              src={EMAIL_LOGIN_ICON}
              alt='Email Login Icon'
              className='login-logo'
            />
            <span className='login-text'>Continue with Email</span>
          </button>
          <button className='modal-login-btn'>
            <img
              src={PHONE_LOGIN_ICON}
              alt='Phone Login Icon'
              className='login-logo'
            />
            <span className='login-text'>Continue with Phone</span>
          </button>
        </div>

        <div className='login-terms'>
          <span> By continuing, you are accepting </span>
          <div className='terms-text'>
            OLX Terms and Conditions and Privacy Policy
          </div>
        </div>
      </div>
    </Modal>
  );
}
