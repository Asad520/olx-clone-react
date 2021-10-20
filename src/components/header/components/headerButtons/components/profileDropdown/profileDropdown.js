import { defaultProps, propTypes } from './props';
import { logout } from '../../../../../../redux/actions/auth/auth';
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
} from '../../../../../../utils/constants';
import { DropdownContainer } from '../../styledComponents';
import useProfileDropdown from './controller';

export function ProfileDropdown(props) {
  const { dispatch, user } = useProfileDropdown(props);

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
              <span className='profile-option-text'>Buy Business packages</span>
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
            <div className='profile-option' onClick={() => dispatch(logout())}>
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
}

ProfileDropdown.propTypes = propTypes;
ProfileDropdown.defaultProps = defaultProps;
