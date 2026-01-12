import Navigation from './Navigation.jsx'
import Profile from '../Images/profilepic.jpeg'

function Welcome ()
{
  return (
    <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="relative flex items-center justify-center h-[calc(100vh-64px)] overflow-hidden">

        {/* Abstract Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="text-center z-10">
            <h1 className="text-8xl font-black tracking-tighter text-black">
                HI, IM RYAN <span className="text-blue-600">.</span>
            </h1>
            <p className="mt-4 text-2xl font-mono text-gray-500">
                &gt; Software Engineer // Virginia Tech
            </p>
            <div className="mt-10 flex gap-4 justify-center">
            <button className="px-8 py-4 bg-black  text-white  rounded-full font-bold hover:scale-105 transition">
                View Projects
            </button>
            <button className="px-8 py-4 border border-black  rounded-full font-bold hover:bg-black hover:text-white  transition">
                Read Resume
            </button>
            </div>
        </div>
        </main>
    </div>
  );
}

export default Welcome;