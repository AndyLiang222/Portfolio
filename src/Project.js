import './App.css';
import Typewriter from "typewriter-effect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styled from 'styled-components';

function Projects(props) {
    const Type = styled.div`
  
     `;
    const imageVariant = {
        visible: { opacity: 1, scale: 1, transition:{duration:0.75} },
        hidden: { opacity: 0, scale: 0 },
      }
    const data = props.data;
    const {name,img,desc, time,links} = data;
    const v = links.map((value) =>{
        return <a href={value.link}><img src={require(`${value.icon}`)}></img></a>;
    });
    const control = useAnimation();
    const [ref, inView] = useInView({ margin: "-500px 0px -500px 0px"});
    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
     }, [control, inView]);
    return (
        <div className='Project'>
            <div className='Timeline'>
            <Type>
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString(time)
                    .start();
                }}/>
            </Type>
            </div>
            
            <div className='Project-Wrapper'>
                <motion.div
                    ref = {ref}
                    variants={imageVariant}
                    initial="hidden"
                    animate={control}
                >
                    <div className= 'Project-Info'>
                        <img className='Project-Img' src={require(`${img}`)}></img>
                        <div className='Project-Detail'>
                            <text className='Project-Title'>
                                {name}
                            </text>
                            <text className='Project-Desc'>
                                {desc}
                            </text>
                            <div className='Project-Links'>
                                {v}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            
        </div>
    );
  }
  
  export default Projects;