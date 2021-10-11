import { Modal } from 'react-bootstrap';
import '../../../assets/css/modal-styles.css';
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
        class='btn-close modal-close'
        onClick={handleClose}
      ></button>
      <div class='modal-body'>
        <img src={MODAL_OLX_LOGO} alt='OLX Logo' class='modal-img' />
        <span class='welcome-text'>WELCOME TO OLX</span>
        <span class='community-text'>
          The trusted community of <br />
          buyers and sellers.
        </span>
        <div class='modal-buttons'>
          <button class='modal-login-btn'>
            <img
              src={GOOGLE_LOGIN_ICON}
              alt='Google Login Icon'
              class='login-logo'
            />
            <span class='login-text'>Continue with Google</span>
          </button>
          <button class='modal-login-btn'>
            <img
              src={FACEBOOK_LOGIN_ICON}
              alt='Facebook Login Icon'
              class='login-logo'
            />
            <span class='login-text'>Continue with Facbook</span>
          </button>

          <button class='modal-login-btn' onClick={openEmailModal}>
            <img
              src={EMAIL_LOGIN_ICON}
              alt='Email Login Icon'
              class='login-logo'
            />
            <span class='login-text'>Continue with Email</span>
          </button>
          <button class='modal-login-btn'>
            <img
              src={PHONE_LOGIN_ICON}
              alt='Phone Login Icon'
              class='login-logo'
            />
            <span class='login-text'>Continue with Phone</span>
          </button>
        </div>

        <div class='login-terms'>
          <span> By continuing, you are accepting </span>
          <div class='terms-text'>
            OLX Terms and Conditions and Privacy Policy
          </div>
        </div>
      </div>
    </Modal>
  );
}
