import React from 'react';

function LocationsList({userData}) {
    return (
    userData.locations.map((i, j) => (
        <dl key={j} className='about-lists'>
            <dt>Place:</dt><dd>{i.place}</dd>
            <dt>Lat:</dt><dd>{i.lat}</dd>
            <dt>Lon:</dt><dd>{i.lon}</dd>
            <dt>Altitude:</dt><dd>{i.altitude}</dd>
          </dl>
        ))
    
)

}

export default LocationsList