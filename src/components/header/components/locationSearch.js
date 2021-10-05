import {
  DOWN_ARROW,
  SEARCH_SVG,
  LOCATION_MARKER_ICON,
  CURRENT_LOCATION_ICON,
} from '../../../utils/constants';
import { SEARCH_LOCATIONS } from '../../../utils/data';
import { Col } from 'react-bootstrap';
import '../../../assets/css/location-search-styles.css';

export default function locationSearch() {
  return (
    <Col className='dropdown' lg={3} md={12}>
      <a
        className='location-search'
        href='#'
        id='navbarDropdown'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <div className='d-flex'>
          <svg width='25' height='25' viewBox='0 0 1024 1024'>
            <path d={SEARCH_SVG}></path>
          </svg>
          <input
            className='search'
            type='text'
            value='Pakistan'
            placeholder='Search city, area or locality'
          />
        </div>
        <img src={DOWN_ARROW} alt='Down Arrow' />
      </a>

      <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
        <div className='current-location-container'>
          <a className='current-location'>
            <img src={CURRENT_LOCATION_ICON} alt='Current Location Icon' />
            <div className='current-location-text'>Use current location</div>
          </a>
        </div>
        <hr className='dropdown-divider' />
        <div className='region-container'>
          <span className='region-text'>CHOOSE REGION</span>
        </div>
        <ul className='locations-list'>
          {SEARCH_LOCATIONS.map((location) => {
            return (
              <li key={location.id}>
                <a className='location-item' href='#'>
                  <img src={LOCATION_MARKER_ICON} />
                  <span className='location-item-text'>
                    {location.location}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Col>
  );
}
