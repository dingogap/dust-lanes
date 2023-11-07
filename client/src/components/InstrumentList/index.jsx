function InstrumentList({ instrumentData }) {
    return instrumentData.length
      ? instrumentData.map((item, index) => (
          <dl key={index} className='about-lists'>
            <dt>Telescope:</dt>
            <dd>{item.telescope}</dd>
            <dt>Camera:</dt>
            <dd>{item.camera}</dd>
            <dt>Mount:</dt>
            <dd>{item.mount}</dd>
          </dl>
        ))
      : (<p>No Instruments have been added</p>);
  }
  
  export default InstrumentList;
  