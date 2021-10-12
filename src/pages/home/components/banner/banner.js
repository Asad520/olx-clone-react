import '../css/banner-styles.css';
import { BANNER_IMG } from '../../../../utils/constants';
import { Container } from 'react-bootstrap';

export default function banner() {
  return (
    <section className='banner-img'>
      <img src={BANNER_IMG} alt='OLX Banner' className='banner' />
      <Container>
        <h5>Fresh Recommendations</h5>
      </Container>
    </section>
  );
}
