function LocationsList({ userData }) {
  return userData.locations.length
    ? userData.locations.map((i, j) => (
        <dl key={j} className='about-lists'>
          <dt>Place:</dt>
          <dd>{i.place}</dd>
          <dt>Lat:</dt>
          <dd>{i.lat}</dd>
          <dt>Lon:</dt>
          <dd>{i.lon}</dd>
          <dt>Altitude:</dt>
          <dd>{i.altitude}</dd>
          <dt>Bortle:</dt>
          <dd>{i.bortle}</dd>
        </dl>
      ))
    : '';
}

export default LocationsList;
