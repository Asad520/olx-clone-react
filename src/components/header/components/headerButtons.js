import '../../../assets/css/header-buttons-styles.css';
import SELL_IMAGE from '../../../assets/images/sell.png';
import { Col } from 'react-bootstrap';

export default function headerButtons() {
  return (
    <Col className='header-buttons' lg={3}>
      <section className='login'>
        <button
          className='login-btn'
          type='button'
          data-bs-toggle='modal'
          data-bs-target='#login-modal'
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
  );
}
