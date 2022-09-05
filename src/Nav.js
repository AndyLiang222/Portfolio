import './App.css';
import Logo from './images/logodis.png';
function Nav() {
    return (
      <div className="Nav">
        <nav className = "Navbar">
            <img className='Logo' src={Logo}></img>
            <div className='Links'>
                <a>Contacts</a>
                <a>Archive</a>  
                <a>Projects</a>
                <a>About</a>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Nav;