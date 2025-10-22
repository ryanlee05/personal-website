import '../app.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

import profilePic from '../Images/profilepic.jpeg'

function Welcome() {


    return (
        <>  
        <div className = "container">
            <div className = "welcomeBox">
                <div className = "text fade-in-up">
                    <h1>Hey, I'm Ryan!</h1>
                    <h3>I'm a Junior at <span className = "maroon">Virginia</span> <span className = "orange">Tech</span> studying Computer Science.</h3>
                    <h3>I'm passionate about building creative and scalable solutions through full-stack development, software engineering, and product management.</h3>
                    <div className = "button fade-in-up-later">
                        <button>Learn more</button>
                    </div>
                </div>
                <div className = "visuals">
                    <img src = {profilePic} alt = "Profile Picture"/>
                    <div className = "links">
                        <a href = 'https://github.com/ryanlee05'><FontAwesomeIcon className = "icon" icon={faGithub} /></a>
                        <a href = 'https://www.linkedin.com/in/leeryan05/'><FontAwesomeIcon className = "icon" icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default Welcome;