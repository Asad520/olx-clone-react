import { useState } from 'react';
import { LOCATION_MARKER_ICON } from '../../../../utils/constants';
import { SEARCH_LOCATIONS } from '../../../../utils/data';

export default function useLocationSearch(props) {
  const [location, setLocation] = useState('Pakistan');

  const renderLocations = () =>
    SEARCH_LOCATIONS.map((location) => (
      <li key={location.id}>
        <div className='location-item'>
          <img src={LOCATION_MARKER_ICON} alt='Current location icon' />
          <span className='location-item-text'>{location.location}</span>
        </div>
      </li>
    ));

  return { ...props, location, setLocation, renderLocations };
}
