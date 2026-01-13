import Navigation from '../Navigation.jsx'
import WelcomeHome from './WelcomeHome.jsx'
import Contact from './Contact.jsx'
import AboutMe from './AboutMe.jsx'

function Welcome ()
{
  return (
    <div className="min-h-screen flex flex-col">
        <Navigation />
        <WelcomeHome />
        <AboutMe />
        <Contact />
    </div>
  );
}

export default Welcome;