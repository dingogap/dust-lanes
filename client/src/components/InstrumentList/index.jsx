function InstrumentList({ instrumentData }) {
    return instrumentData.length
      ? instrumentData.map((i, j) => (
          <dl key={j} className='about-lists'>
            <dt>Telescope:</dt>
            <dd>{i.telescope}</dd>
            <dt>Camera:</dt>
            <dd>{i.camera}</dd>
            <dt>Mount:</dt>
            <dd>{i.mount}</dd>
          </dl>
        ))
      : '';
  }
  
  export default InstrumentList;
  