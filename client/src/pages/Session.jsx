import { useQuery } from '@apollo/client';
import Tabs from '../components/Tabs'
import Auth from '../utils/auth';
import M from 'materialize-css/dist/js/materialize.min.js';

var elems = document.querySelectorAll('.tabs');
var instance = M.Tabs.init(elems);

const Session = () => {
  return (
    <main className='stndrd-page'>
      <div>
        <h5>Imaging Sessions</h5>

        <Tabs/>
      </div>
    </main>
  );
};

export default Session;
