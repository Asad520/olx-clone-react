import { useState } from 'react';
import { LOCATION_MARKER_ICON } from '../../../../utils/constants';

export default function useLocationSearch(searchLocations) {
  const [location, setLocation] = useState('Pakistan');

  const renderLocations = () =>
    searchLocations.map((location) => (
      <li key={location.id}>
        <div className='location-item'>
          <img src={LOCATION_MARKER_ICON} alt='Current location icon' />
          <span className='location-item-text'>{location.location}</span>
        </div>
      </li>
    ));

  return [location, setLocation, renderLocations];
}
