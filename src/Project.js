import './App.css';
import Typewriter from "typewriter-effect";
import star from "./images/star.png"
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
    const {name,img,desc, time,links,featured} = data;
    const v = links.map((value) =>{
        return <a href={value.link}><img src={require(`${value.icon}`)}></img></a>;
    });
    const Img = styled.div`
        height: 20vw;
        width: 30vw;
        background-image: url(${img});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        border-radius:2vw;
        padding-top:1vw;
    `;
    const Featured = styled.div`
        width:10vw;
        background-color:#363732;
        color:white;
        display:flex;
        border-radius:1vw;
        margin-left:1vw;
        
    `;
    const Star = styled.img`
        height:1vw;
        width:1vw;
        margin:auto 0.5vw;
        
    `
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
                        <div>
                            <Img >
                                
                                {featured && <Featured><Star src = {star}></Star>Featured</Featured>}
                            </Img>
                        </div>
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