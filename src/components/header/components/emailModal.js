import { Modal } from 'react-bootstrap';
import { BACK_ICON, MODAL_OLX_LOGO } from '../../../utils/constants';

export default function EmailModal(props) {
  const { show, handleClose, openPasswordModal } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <button class='modal-back' onClick={handleClose}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 1024 1024'
          fill='rgba(0,47,52,.64)'
        >
          <path d={BACK_ICON}></path>
        </svg>
      </button>
      <button
        type='button'
        class='btn-close modal-close'
        onClick={handleClose}
      ></button>

      <div class='modal-body'>
        <img src={MODAL_OLX_LOGO} alt='OLX Logo' class='email-modal-img' />
        <span class='modal-email-text'> Enter your email </span>
        <input
          id='email'
          name='email'
          spellcheck='false'
          class='email-input'
          autocomplete='email'
          type='email'
          placeholder='Email'
          value=''
        />
        <button class='modal-next-btn' onClick={openPasswordModal}>
          Next
        </button>
        <span class='reveal-text'>
          We won't reveal your email to anyone else nor use it to send you spam.
        </span>
      </div>
    </Modal>
  );
}
