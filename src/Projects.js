import './App.css'
import Contacts from './Contacts';
import Nav from './Nav'
import Project from './Project'
import projects from './Projects.json';
function Projects() {
    const p = projects.projects.map((value, index) =>{
        return <Project key ={index} data = {value}/>
    });
    return (

        <div className='Projects'>
            <Nav/>
            <div className='Project-List'>
                {p}
            </div>
            <Contacts/>
        </div>

    );
  }
  
  export default Projects;

  /*{
  "projects": [
    {
      "name": "Tetris 1.0",
      "img": "./images/img1.png",
      "desc": "Made in Python, this Tetris clone was my first big project.",
      "links": [
        {
          "icon": "./images/gitLogo.png",
          "link": "https://github.com/AndyLiang222/AndyProjects/tree/main/Tetris%201.0"
        }
      ]
    },
    {
      "name": "Tetris 2.0",
      "img": "./images/img2.png",
      "desc": "Now made in Java, this Tetris clone is an improved version of its past clone.",
      "links": [
        {
          "icon": "./images/gitLogo.png",
          "link": "https://github.com/AndyLiang222/AndyProjects/tree/main/Tetris%201.0"
        }
      ]
    },
    {
      "name": "Agar.io",
      "img": "./images/img3.png",
      "desc": "Built using object oriented programming, I made a clone of a nostalgic game.",
      "links": [
        {
          "icon": "./images/gitLogo.png",
          "link": "https://github.com/AndyLiang222/AndyProjects/tree/main/Tetris%201.0"
        }
      ]
    },
    {
      "name": "Pokemon Team Builder",
      "img": "./images/img4.png",
      "desc": "Created using the React framework.",
      "links": [
        {
          "icon": "./images/gitLogo.png",
          "link": "https://github.com/AndyLiang222/PokemonTeamBuilder"
        },
        {
          "icon": "./images/web.png",
          "link": "https://andyliang222.github.io/PokemonTeamBuilder/"
        }
      ]
    }
  ]
}
*/