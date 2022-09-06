import './App.css';
import { HashRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
function App() {
    return (
      <Router>
        <div className='App'>
            <Routes>
                 <Route exact path='/' element={< About />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/projects' element={< Projects />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;