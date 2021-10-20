import { propTypes, defaultProps } from './props';
import { DOWN_ARROW, CURRENT_LOCATION_ICON } from '../../../../utils/constants';
import { Col } from 'react-bootstrap';
import { SEARCH_LOCATIONS } from '../../../../utils/data';
import './style.css';
import { SearchIcon } from './components';
import useLocationSearch from './controller';

export function LocationSearch() {
  const [location, setLocation, renderLocations] =
    useLocationSearch(SEARCH_LOCATIONS);

  return (
    <Col className='dropdown' lg={3} md={12}>
      <div
        className='location-search'
        id='navbarDropdown'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <div className='d-flex'>
          <SearchIcon />
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

LocationSearch.propTypes = propTypes;
LocationSearch.defaultProps = defaultProps;
