import Nav from './Nav';
import pBack from './images/back.png';
import Logo from './images/logodis.png';
import skills from './images/skills.png';
import Typewriter from "typewriter-effect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import './App.css';
import Contacts from './Contacts';

function About() {
  const imageVariant = {
    visible: { opacity: 1, scale: 2, transition:{duration:0.5} },
    hidden: { opacity: 0, scale: 0 },
  }
  const textVariant = {
    visible: { opacity: 1, scale: 1, transition:{duration:1} },
    hidden: { opacity: 0, scale: 0 },
  }
  const control = useAnimation();
  const descControl = useAnimation();
  const skillControl = useAnimation();
  const [skillRef, sInView] = useInView();
  const [descRef, dInView] = useInView();
  const [ref, inView] = useInView();
  useEffect(()=>{
    if(sInView)skillControl.start("visible");
    else skillControl.start("hidden");
  },[skillControl, sInView]);
  useEffect(()=>{
    if(dInView)descControl.start("visible");
    else descControl.start("hidden");
  },[descControl, dInView]);
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="App">
      <Nav></Nav>
      <div className='Profile'>
        <div className='Profile-Left'>
          <text className='Profile-Name'>Andy Liang</text>
          <motion.div 
            className = 'Profile-Desc'
            ref={ref}
            variants = {textVariant}
            initial = "hidden"
            animate = {control}
            >
            <Typewriter

              onInit={(typewriter)=> {
              typewriter
              .typeString("Student by day, DMOJ demon by night😈")
              .start();
            }}/>
          </motion.div>
        </div>
        <div className='Profile-Right'>
          <motion.div
            ref = {ref}
            variants={imageVariant}
            initial="hidden"
            animate={control}
            className="Pic-Div"
          >
            <img className='Profile-Pic' src={Logo}></img>
          </motion.div>
          
        </div>
      </div>
      <div className='Profile-Bottom'>
        <motion.div 
          className='Profile-Objective'
          ref = {descRef}
          variants={textVariant}
          initial="hidden"
          animate={descControl}
          >
          Effective Student committed to learning, developing skills in software development and team contribution. Self-directed and energetic with superior performance in both autonomous or collaborative environments working independently and collaborating with others on group projects.
        </motion.div>
        <motion.div
            ref = {skillRef}
            variants={textVariant}
            initial="hidden"
            animate={skillControl}
          >
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
        </motion.div>
        <Contacts/>
      </div>
      
    </div>
  );
}

export default About;
