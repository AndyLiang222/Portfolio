import './App.css';
import Logo from './images/logodis.png';
function Nav() {
    return (
      <div className="Nav">
        <nav className = "Navbar">
            <img className='Logo' src={Logo}></img>
            <div className='Links'>
                <a href="https://andyliang222.github.io/Portfolio/#/contact">Contact</a>
                <a >Archive</a>  
                <a href = "https://andyliang222.github.io/Portfolio/#/projects">Projects</a>
                <a  href ="https://andyliang222.github.io/Portfolio/#/about">About</a>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Nav;