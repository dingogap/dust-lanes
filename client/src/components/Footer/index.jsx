//Display Page Footer
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='page-footer'>
      <div className='container'>
        <div className='links'>
          {/* {proLinks.map((item, index) => (
            <Link to={item.href} target='_blank' key={item.id}>
              <img src={item.icon} width='35' height='35' alt={item.name} />
            </Link>
          ))} */}
          <span className='copyright'>© 2023 - Peter Medbury</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
