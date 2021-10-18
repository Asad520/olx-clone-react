import './style.css';
import { defaultProps, propTypes } from './props';
import { Col } from 'react-bootstrap';
import LoginModal from '../modals/loginModal/loginModal';
import EmailModal from '../modals/emailModal/emailModal';
import PasswordModal from '../modals/passwordModal/passwordModal';
import ProfileDropdown from './components/profileDropdown/profileDropdown';
import LoginButton from './components/loginButton/loginButton';
import SellButton from './components/sellButton/sellButton';
import useHeaderButtons from './controller';

export default function HeaderButtons() {
  const [
    user,
    loginModal,
    setLoginModal,
    emailModal,
    setEmailModal,
    passwordModal,
    setPasswordModal,
  ] = useHeaderButtons();

  return (
    <>
      <Col className='header-buttons' lg={user ? 4 : 3}>
        {user ? (
          <ProfileDropdown user={user} />
        ) : (
          <LoginButton setLoginModal={setLoginModal} />
        )}
        <SellButton />
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

HeaderButtons.propTypes = propTypes;
HeaderButtons.defaultProps = defaultProps;
