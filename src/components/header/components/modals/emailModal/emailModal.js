import { Modal } from 'react-bootstrap';
import { BACK_ICON, MODAL_OLX_LOGO } from '../../../../../utils/constants';
import '../style.css';
import useEmailModal from './controller';
import { propTypes, defaultProps } from './props';

export function EmailModal({ show, handleClose, openPasswordModal }) {
  const [email, setEmail] = useEmailModal();

  return (
    <Modal show={show} onHide={handleClose}>
      <div className='modal-container'>
        <button className='modal-back' onClick={handleClose}>
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
          className='btn-close modal-close'
          onClick={handleClose}
        ></button>

        <div className='modal-body'>
          <img
            src={MODAL_OLX_LOGO}
            alt='OLX Logo'
            className='email-modal-img'
          />
          <span className='modal-email-text'> Enter your email </span>
          <input
            id='email'
            name='email'
            className='email-input'
            autoComplete='email'
            type='email'
            placeholder='Email...'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className='modal-next-btn' onClick={openPasswordModal}>
            Next
          </button>
          <span className='reveal-text'>
            We won't reveal your email to anyone else nor use it to send you
            spam.
          </span>
        </div>
      </div>
    </Modal>
  );
}

EmailModal.propTypes = propTypes;
EmailModal.defaultProps = defaultProps;
