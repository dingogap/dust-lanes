import React, { useEffect } from 'react';

const Tabs = () => {
  useEffect(() => {
    // Initialize MaterializeCSS tabs
    const tabElement = document.querySelectorAll('.tabs');
    M.Tabs.init(tabElement);
  }, []);

  return (
    <div className='row'>
      <div className='col s12'>
        <ul className='tabs'>
          <li className='tab col s3'>
            <a className='active' href='#tab1'>Tab 1</a>
          </li>
          <li className='tab col s3'>
            <a href='#tab2'>Tab 2</a>
          </li>
          <li className='tab col s3'>
            <a href='#tab3'>Tab 3</a>
          </li>
        </ul>
      </div>
      <div id='tab1' className='col s12'>
        Tab 1 content
      </div>
      <div id='tab2' className='col s12'>
        Tab 2 content
      </div>
      <div id='tab3' className='col s12'>
        Tab 3 content
      </div>
    </div>
  );
};

export default Tabs;
