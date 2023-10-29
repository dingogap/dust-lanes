import React, { useEffect } from 'react';

const Tabs = ({ tabs, defaultTab }) => {
  useEffect(() => {
    // Initialize Materialize Tabs
    const tabsInstance = document.querySelector('.tab');
   window.M.Tabs.init(tabsInstance);
  }, []);

  return (
    <div className="tabs">
      <ul className="tab">
        {tabs.map((tab, index) => (
          <li key={index} className="tab">
            <a href={`#${tab.id}`}>{tab.title}</a>
          </li>
        ))}
      </ul>
      {tabs.map((tab, index) => (
        <div key={index} id={tab.id} className="col s12">
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;

