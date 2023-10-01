import { Link } from 'react-router-dom';
import Style from './Styles/Nav.module.css'

import SearchBar from './SearchBar.jsx';


export default function Nav({setPage}) {
  return (
        <nav className={Style.nav}>
          <div className={Style.btss}>
            <a href="http://localhost:3000/Character"><button className={Style.btn}>ERASE FILTERS</button></a>
            <Link to='/CreateCharacter'><button className={Style.btn}>NEW CHARACTER</button></Link>
          </div>
          <SearchBar setPage={setPage} />
        </nav>
  );
};

