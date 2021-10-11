import { useState } from 'react';
import {
  DOWN_ARROW,
  SEARCH_SVG,
  LOCATION_MARKER_ICON,
  CURRENT_LOCATION_ICON,
} from '../../../utils/constants';
import { SEARCH_LOCATIONS } from '../../../utils/data';
import { Col } from 'react-bootstrap';
import '../../../assets/css/location-search-styles.css';

export default function LocationSearch() {
  const [location, setLocation] = useState('Pakistan');

  const renderLocations = () => {
    return SEARCH_LOCATIONS.map((location) => {
      return (
        <li key={location.id}>
          <div className='location-item'>
            <img src={LOCATION_MARKER_ICON} alt='Current location icon' />
            <span className='location-item-text'>{location.location}</span>
          </div>
        </li>
      );
    });
  };
  return (
    <Col className='dropdown' lg={3} md={12}>
      <div
        className='location-search'
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
            value={location}
            placeholder='Search city, area or locality'
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <img src={DOWN_ARROW} alt='Down Arrow' />
      </div>

      <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
        <div className='current-location-container'>
          <div className='current-location'>
            <img src={CURRENT_LOCATION_ICON} alt='Current Location Icon' />
            <div className='current-location-text'>Use current location</div>
          </div>
        </div>
        <hr className='dropdown-divider' />
        <div className='region-container'>
          <span className='region-text'>CHOOSE REGION</span>
        </div>
        <ul className='locations-list'>{renderLocations()}</ul>
      </div>
    </Col>
  );
}
