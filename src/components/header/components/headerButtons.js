import { useState } from 'react';
import '../../../assets/css/header-buttons-styles.css';
import SELL_IMAGE from '../../../assets/images/sell.png';
import { Col } from 'react-bootstrap';
import LoginModal from './loginModal';
import EmailModal from './emailModal';
import PasswordModal from './passwordModal';

export default function HeaderButtons() {
  const [loginModal, setLoginModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  return (
    <>
      <Col className='header-buttons' lg={3}>
        <section className='login'>
          <button
            className='login-btn'
            type='button'
            onClick={() => setLoginModal(true)}
          >
            Login
          </button>
        </section>

        <section className='sell-btn'>
          <div>
            <img src={SELL_IMAGE} alt='Sell Text' className='sell-img' />
          </div>
        </section>
      </Col>

      <LoginModal
        show={loginModal}
        handleClose={() => setLoginModal(false)}
        openEmailModal={() => setEmailModal(true)}
      />
      <EmailModal
        show={emailModal}
        handleClose={() => setEmailModal(false)}
        openPasswordModal={() => setPasswordModal(true)}
      />
      <PasswordModal
        show={passwordModal}
        handleClose={() => setPasswordModal(false)}
      />
    </>
  );
}
