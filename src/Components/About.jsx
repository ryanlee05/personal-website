
import c from "../Images/C_Programming_Language.svg"
import java from "../Images/java-icon.svg"
import python from "../Images/python-logo-only.svg"
import javaScript from "../Images/javascript-logo-svgrepo-com.svg"
import react from "../Images/React-icon.svg"
import html from "../Images/HTML5_logo_and_wordmark.svg"
import css from "../Images/w3_css-official.svg"
import matlab from "../Images/matlab-svgrepo-com.svg"

function About() {
    return (
        <>
        <div className = "about-container">
            <div className = "about-text">
                <h1 id = "align" >System.out.println("My Skills");</h1>
                <div className = "skills-marquee">
                    <div className = "marquee-track">
                       <div className = "showcase">
                            <img className = "lang" src = {java}/>
                            <img className = "lang" src = {python}/>
                            <img className = "lang" src = {c}/>
                            <img className = "lang" src = {javaScript}/>
                            <img className = "lang" src = {react}/>
                            <img className = "lang" src = {html}/>
                            <img className = "lang" src = {css}/>
                            <img className = "lang" src = {matlab}/>
                        </div>
                        <div className = "showcase">
                            <img className = "lang" src = {java}/>
                            <img className = "lang" src = {python}/>
                            <img className = "lang" src = {c}/>
                            <img className = "lang" src = {javaScript}/>
                            <img className = "lang" src = {react}/>
                            <img className = "lang" src = {html}/>
                            <img className = "lang" src = {css}/>
                            <img className = "lang" src = {matlab}/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;