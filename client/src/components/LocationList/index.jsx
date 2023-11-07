import React from 'react';

function LocationList({ locationData }) {
  return locationData.length > 0 ? (
    locationData.map((item, index) => (
      <dl key={index} className='about-lists'>
        <dt>Place:</dt>
        <dd>{item.place}</dd>
        <dt>Lat:</dt>
        <dd>{item.lat}</dd>
        <dt>Lon:</dt>
        <dd>{item.lon}</dd>
        <dt>Altitude:</dt>
        <dd>{item.altitude}</dd>
        <dt>Bortle:</dt>
        <dd>{item.bortle}</dd>
      </dl>
    ))
  ) : (
    <p>No Locations have been added</p>
  );
}

export default LocationList;
