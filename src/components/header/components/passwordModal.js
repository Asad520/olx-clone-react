import { Modal } from 'react-bootstrap';
import { MODAL_OLX_LOGO } from '../../../utils/constants';

export default function PasswordModal(props) {
  const { show, handleClose } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <button
        type='button'
        class='btn-close modal-close'
        data-bs-dismiss='modal'
        aria-label='Close'
      ></button>

      <div class='modal-body'>
        <img src={MODAL_OLX_LOGO} alt='OLX logo' class='pwd-modal-img' />
        <span class='modal-email-text'>
          Create a password to login faster next time
        </span>
        <span class='create-pwd-text'>
          You are creating a password for
          <strong>test@gmail.com</strong>. This will help you login faster next
          time
        </span>
        <input
          id='pwd'
          name='pwd'
          spellcheck='false'
          class='pwd-input'
          type='password'
          placeholder='New Password'
          value=''
        />
        <span class='pwd-instructions'>
          Use minimum 6 characters, and at least one letter and one number
        </span>
        <input
          id='pwd'
          name='pwd'
          spellcheck='false'
          class='pwd-input'
          type='password'
          placeholder='Confirm new Password'
          value=''
        />
        <button class='create-pwd-btn'>Create Password</button>
      </div>
    </Modal>
  );
}
