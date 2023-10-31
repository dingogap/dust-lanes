import { useQuery } from '@apollo/client';

const Home = () => {
  return (
    <main className='stndrd-page'>
      <div>
        <h3>Dust lanes</h3>

        <h4>A home for your astrophotography metadata!</h4>

        <h5>Save what's really important to your astrophotgraphy</h5>
        <h5>Find that infomation you need right when you're looking for it!</h5>
        <p>
          Dust Lanes stores: </p>
          <ul>
            <li>target names</li>
            <li>location data</li>
            <li>instrument details</li>
            <li>exposure settings:</li>
            <ul>
              <li>exposurre count</li>
              <li>exposure length</li>
              <li>camera rotation</li>
              <li>sensor temperature</li>
              <li>filter</li>
            </ul>
          </ul>
       
        <p>
          Dust Lanes handles your multi-session projects and your complex
          mosaics
        </p>

        <p>
          No more: </p>
          <ul>
            <li>Searching through physical logbooks</li>
            <li>Messy Spreadsheets</li>
            <li>Scanning imaging records</li>
            <li>Hoping for the best...</li>
          </ul>
       
      </div>
    </main>
  );
};

export default Home;
