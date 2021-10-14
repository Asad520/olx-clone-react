import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { MODAL_OLX_LOGO } from '../../../utils/constants';
import './css/modal-styles.css';

export default function PasswordModal(props) {
  const { show, handleClose } = props;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Modal show={show} onHide={handleClose}>
      <button
        type='button'
        className='btn-close modal-close'
        onClick={handleClose}
      ></button>

      <div className='modal-body'>
        <img src={MODAL_OLX_LOGO} alt='OLX logo' className='pwd-modal-img' />
        <span className='modal-email-text'>
          Create a password to login faster next time
        </span>
        <span className='create-pwd-text'>
          You are creating a password for
          <strong>test@gmail.com</strong>. This will help you login faster next
          time
        </span>
        <input
          id='pwd'
          name='pwd'
          className='pwd-input'
          type='password'
          placeholder='New Password...'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span className='pwd-instructions'>
          Use minimum 6 characters, and at least one letter and one number
        </span>
        <input
          id='confirmPwd'
          name='pwd'
          className='pwd-input'
          type='password'
          placeholder='Confirm new Password'
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button className='create-pwd-btn'>Create Password</button>
      </div>
    </Modal>
  );
}
