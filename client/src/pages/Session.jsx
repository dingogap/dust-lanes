import React from 'react';
import Tabs from '../components/Tabs'

const Session = () => {

    const tabs = [
      {
        id: 'tab1',
        title: 'Tab 1',
        content: <p>Content for Tab 1</p>,
      },
      {
        id: 'tab2',
        title: 'Tab 2',
        content: <p>Content for Tab 2</p>,
      },
      {
        id: 'tab3',
        title: 'Tab 3',
        content: <p>Content for Tab 3</p>,
      },
      {
        id: 'tab4',
        title: 'Tab 4',
        content: <p>Content for Tab 4</p>,
      },
    ];
  
    return (
      <main className='stndrd-page'>
      <div className="container">
      <h4>{user.username}s Imaging Journal</h4>
        <h1>Materialize Tabs in React</h1>
        <Tabs tabs={tabs} defaultTab="tab1" />
      </div>
      </main>
    );
  }

export default Session;
