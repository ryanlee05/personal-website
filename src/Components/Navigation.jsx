import { Link } from 'react-router-dom';

function Navigation() {
  const navItems = ["About", "Experience", "Projects"];

  return (
    <nav className="flex flex-row justify-around items-center w-full h-16 bg-black text-white">
      {navItems.map((item) => (
    
        <div key={item} className="group relative cursor-pointer py-2 text-xl">
            <Link to = {`/${item.toLowerCase()}`}>
            {item}
            </Link>
             <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </div>
      ))}
    </nav>
  );
}

export default Navigation;