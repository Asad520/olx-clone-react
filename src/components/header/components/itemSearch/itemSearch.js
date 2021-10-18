import { Col } from 'react-bootstrap';
import './style.css';
import useItemSearch from './controller';
import { propTypes, defaultProps } from './props';
import { SEARCH_SVG } from '../../../../utils/constants';

export default function ItemSearch() {
  const [itemSearch, setItemSearch, redirectToSearch] = useItemSearch();

  return (
    <Col className='search-container ms-lg-1 ms-0 my-lg-0 my-2 ' col={'true'}>
      <input
        type='text'
        placeholder='Find Cars, Mobile Phones and more...'
        value={itemSearch}
        onChange={(event) => setItemSearch(event.target.value)}
      />

      <button className='search-btn' onClick={redirectToSearch()}>
        <svg width='25' height='25' viewBox='0 0 1024 1024' fill='white'>
          <path d={SEARCH_SVG}></path>
        </svg>
      </button>
    </Col>
  );
}

ItemSearch.propTypes = propTypes;
ItemSearch.defaultProps = defaultProps;
