import '../../../assets/css/item-search-styles.css';
import { SEARCH_SVG } from '../../../utils/constants';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function itemSearch() {
  return (
    <Col className='search-container ms-lg-1 ms-0 my-lg-0 my-2 ' col={'true'}>
      <input type='text' placeholder='Find Cars, Mobile Phones and more...' />

      <Link className='search-btn' to='/search'>
        <svg width='25' height='25' viewBox='0 0 1024 1024' fill='white'>
          <path d={SEARCH_SVG}></path>
        </svg>
      </Link>
    </Col>
  );
}
