import './style.css';
import { defaultProps, propTypes } from './props';
import { BANNER_IMG } from '../../../../utils/constants';
import { Container } from 'react-bootstrap';

export function Banner() {
  return (
    <section className='banner-img'>
      <img src={BANNER_IMG} alt='OLX Banner' className='banner' />
      <Container>
        <h5>Fresh Recommendations</h5>
      </Container>
    </section>
  );
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;
