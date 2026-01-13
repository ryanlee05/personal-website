import Navigation from '../Navigation.jsx'
import WelcomeHome from './WelcomeHome.jsx'
import Contact from './Contact.jsx'
import AboutMe from './AboutMe.jsx'
import TechStack from './TechStack.jsx'
import Currently from './Currently.jsx'

function Welcome ()
{
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navigation />
        <WelcomeHome />
        <AboutMe />
        <TechStack />
        <Currently />
        <Contact />
    </div>
  );
}

export default Welcome;