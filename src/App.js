import Nav from './Nav';
import pBack from './images/back.png'
import Logo from './images/logodis.png';
import skills from './images/skills.png';
import Typewriter from "typewriter-effect";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className='Profile'>
        <div className='Profile-Left'>
          <text className='Profile-Name'>Andy Liang</text>
          <div className = 'Profile-Desc'>
          <Typewriter
            
            onInit={(typewriter)=> {
            typewriter
            .typeString("Student by day, DMOJ demon by night😈")
            .start();
            }}/>
          </div>
        </div>
        <div className='Profile-Right'>
          <img className='Profile-Pic' src={Logo}></img>
        </div>
      </div>
      <div className='Profile-Bottom'>
        <div className='Profile-Objective'>
          Effective Student committed to learning, developing skills in software development and team contribution. Self-directed and energetic with superior performance in both autonomous or collaborative environments working independently and collaborating with others on group projects.
        </div>
        <div className='Profile-Skills'>
            <div className='Skills-Left'>
              <text className='Skills-Title'>My Skills</text>
              <div className='Skills-Desc'>
                Over the years, I have developed skills using many different languages and frameworks most notably:
              </div>
              <div >
                <ul className='Skills'>
                  <li>Java</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Python</li>
                </ul>
              </div>
              
            </div>
            <div className='Skills-Right'>
              <img className='Skills-Img' src = {skills}></img>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
