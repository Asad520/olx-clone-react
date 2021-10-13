import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SELL_IMAGE from '../../../assets/images/sell.png';
import './css/header-buttons-styles.css';
import { Col } from 'react-bootstrap';
import LoginModal from './loginModal';
import EmailModal from './emailModal';
import PasswordModal from './passwordModal';
import DropdownContainer from './dropdown-container';

import {
  BILLING_ICON,
  BUSINESS_PACKAGES_ICON,
  CHAT_ICON,
  DEFAULT_PROFILE_IMG,
  DOWN_ARROW,
  HELP_ICON,
  LOGOUT_ICON,
  MY_ADS_ICON,
  NOTIFICATIONS_ICON,
  SETTINGS_ICON,
} from '../../../utils/constants';
import { logout } from '../../../redux/actions/auth/auth';

export default function HeaderButtons() {
  const dispatch = useDispatch();
  const [loginModal, setLoginModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);

  const user = useSelector((state) => state.auth.user);

  const renderLogin = () => {
    if (user) {
      return (
        <section className='login'>
          <div className='user-btns'>
            <div className='notifications-icon'>
              <img src={CHAT_ICON} alt='Chat Icon' />
            </div>
            <div className='notifications-icon'>
              <img src={NOTIFICATIONS_ICON} alt='Notifications Icon' />
            </div>

            <div className='dropdown'>
              <div
                id='navbarDropdown'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <div className='user-container'>
                  <img
                    src={DEFAULT_PROFILE_IMG}
                    alt='Profile Icon'
                    className='profile-icon'
                  />
                  <img src={DOWN_ARROW} alt='Down Arrow' />
                </div>
              </div>

              <DropdownContainer
                className='dropdown-menu dropdown-menu-lg-end'
                aria-labelledby='navbarDropdown'
                width={window.innerWidth}
              >
                <div className='profile-container'>
                  <img
                    src={DEFAULT_PROFILE_IMG}
                    alt='Profile icon'
                    className='dropdown-profile-icon'
                  />
                  <div className='user-info-container'>
                    <span className='hello-text'>Hello,</span>
                    <span className='username-text'>{user?.displayName}</span>
                    <span className='edit-profile-text'>
                      View and edit you profile
                    </span>
                  </div>
                </div>
                <hr className='dropdown-divider' />
                <div className='profile-option'>
                  <img
                    src={MY_ADS_ICON}
                    alt='My ads icon'
                    className='profile-option-icon'
                  />
                  <span className='profile-option-text'> My ads</span>
                </div>
                <div className='profile-option'>
                  <img
                    src={BUSINESS_PACKAGES_ICON}
                    alt='Business packages icon'
                    className='profile-option-icon'
                  />
                  <span className='profile-option-text'>
                    Buy Business packages
                  </span>
                </div>
                <div className='profile-option'>
                  <img
                    src={BILLING_ICON}
                    alt='Billing icon'
                    className='profile-option-icon'
                  />
                  <span className='profile-option-text'>
                    Bought packages & billing
                  </span>
                </div>
                <hr className='dropdown-divider' />
                <div className='profile-option'>
                  <img
                    src={HELP_ICON}
                    alt='Help icon'
                    className='profile-option-icon'
                  />
                  <span className='profile-option-text'>Help</span>
                </div>
                <div className='profile-option'>
                  <img
                    src={SETTINGS_ICON}
                    alt='Settings icon'
                    className='profile-option-icon'
                  />
                  <span className='profile-option-text'>Settings</span>
                </div>
                <hr className='dropdown-divider' />
                <div
                  className='profile-option'
                  onClick={() => dispatch(logout())}
                >
                  <img
                    src={LOGOUT_ICON}
                    alt='Logout icon'
                    className='profile-option-icon'
                  />
                  <span className='profile-option-text'>Logout</span>
                </div>
              </DropdownContainer>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className='login'>
          <button
            className='login-btn'
            type='button'
            onClick={() => setLoginModal(true)}
          >
            Login
          </button>
        </section>
      );
    }
  };

  return (
    <>
      <Col className='header-buttons' lg={user ? 4 : 3}>
        {renderLogin()}
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
