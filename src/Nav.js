import './App.css';
import Logo from './images/logodis.png';
function Nav() {
    return (
      <div className="Nav">
        <nav className = "Navbar">
            <img className='Logo' src={Logo}></img>
            <div className='Links'>
                <a href="/#/contact">Contact</a>
                <a >Archive</a>  
                <a href = "/#/projects">Projects</a>
                <a  href ="/#/about">About</a>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Nav;