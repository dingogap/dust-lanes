function InstrumentList({ instrumentData }) {
    return instrumentData.length
      ? instrumentData.map((instrument, index) => (
          <dl key={index} className='about-lists'>
            <dt>Telescope:</dt>
            <dd>{instrument.telescope}</dd>
            <dt>Camera:</dt>
            <dd>{instrument.camera}</dd>
            <dt>Mount:</dt>
            <dd>{instrument.mount}</dd>
          </dl>
        ))
      : (<p>No Instruments have been added</p>);
  }
  
  export default InstrumentList;
  