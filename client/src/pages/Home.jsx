import { useQuery } from '@apollo/client';
import m42 from '../components/Images/m42.jpg';



const Home = () => {
  return (
    <main className='home-page'><br/><br/>

<img className="responsive-img" src={m42} alt='Orion Nebula'/>




        <h3 className="center-align">Dust lanes</h3>

        <h4>A new way to store your Astrophotography Imaging Sessions!</h4>

       
       

    </main>
  );
};

export default Home;
