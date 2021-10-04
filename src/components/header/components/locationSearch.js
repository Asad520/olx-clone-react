import {
  LOCATION_SEARCH_ARROW,
  LOCATION_SEARCH_SVG,
  LOCATION_MARKER_ICON,
  CURRENT_LOCATION_ICON,
  SEARCH_LOCATIONS,
} from '../../../utils/constants';
import '../../../assets/css/location-search-styles.css';

export default function locationSearch() {
  return (
    <>
      <section class='dropdown col-lg-3 col-md-12 border'>
        <a
          class='location-search'
          href='#'
          id='navbarDropdown'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <div class='d-flex'>
            <svg width='25' height='25' viewBox='0 0 1024 1024'>
              <path d={LOCATION_SEARCH_SVG}></path>
            </svg>
            <input
              class='search'
              type='text'
              value='Pakistan'
              placeholder='Search city, area or locality'
            />
          </div>
          <img src={LOCATION_SEARCH_ARROW} alt='Down Arrow' />
        </a>

        <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
          <div class='current-location-container'>
            <a class='current-location'>
              <img src={CURRENT_LOCATION_ICON} alt='Current Location Icon' />
              <div class='current-location-text'>Use current location</div>
            </a>
          </div>
          <hr class='dropdown-divider' />
          <div class='region-container'>
            <span class='region-text'>CHOOSE REGION</span>
          </div>
          <ul class='locations-list'>
            {SEARCH_LOCATIONS.map((location) => {
              return (
                <li key={location.id}>
                  <a class='location-item' href='#'>
                    <img src={LOCATION_MARKER_ICON} />
                    <span class='location-item-text'>{location.location}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
