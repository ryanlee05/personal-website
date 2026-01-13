import {BookOpen, Tv, Code  } from 'lucide-react'; // Optional: npm install lucide-react
import Spotify from '../../Images/spotify_logo.png';

function Currently() {
    return (
        <section id="currently" className="relative min-h-screen w-full bg-gradient-to-b from-black via-zinc-800 to-blue-600 py-32 px-6">
            
            {/* 1. Atmosphere / Clouds Effect */}
            <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-[60%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Header Section */}
                <div className="flex flex-col items-start mb-20">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                        Currently <span className="text-sky-400">.</span>
                        <p className = "font-mono text-gray-500"></p>
                    </h2>
                </div>

                {/* 2. Grid Layout for Status Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Spotify / Music Card */}
                    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:bg-white/10 transition-all duration-500">
                        <div className="flex justify-between items-start mb-6">
                            <img src = {Spotify} alt = "Spotify Logo" width = "32" height = "auto" />
                            <div className="flex gap-1">
                                <span className="w-1 h-4 bg-green-500 animate-bounce"></span>
                                <span className="w-1 h-6 bg-green-500 animate-bounce [animation-delay:-0.2s]"></span>
                                <span className="w-1 h-3 bg-green-500 animate-bounce [animation-delay:-0.4s]"></span>
                            </div>
                        </div>
                        <h3 className="text-zinc-400 font-mono text-sm uppercase mb-2">Last Listened</h3>
                        <p className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">Starboy</p>
                        <p className="text-zinc-300">The Weeknd</p>
                    </div>

                    {/* Book Card */}
                    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:bg-white/10 transition-all duration-500">
                        <BookOpen className="text-blue-600 mb-6" size={32} />
                        <h3 className="text-zinc-400 font-mono text-sm uppercase mb-2">Reading</h3>
                        <p className="text-2xl font-bold text-white">Clean Code</p>
                        <p className="text-zinc-300">Robert C. Martin</p>
                        <div className="mt-4 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-blue-600 h-full w-[65%]"></div>
                        </div>
                    </div>

                    {/* Show/TV Card */}
                    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:bg-white/10 transition-all duration-500">
                        <Tv className="text-purple-400 mb-6" size={32} />
                        <h3 className="text-zinc-400 font-mono text-sm uppercase mb-2">Watching</h3>
                        <p className="text-2xl font-bold text-white">Severance</p>
                        <p className="text-zinc-300">Apple TV+</p>
                    </div>

                    {/* Building / Coding Card */}
                    <div className="lg:col-span-2 group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:bg-white/10 transition-all duration-500">
                        <Code className="text-blue-400 mb-6" size={32} />
                        <h3 className="text-zinc-400 font-mono text-sm uppercase mb-2">Working On</h3>
                        <p className="text-3xl font-bold text-white leading-tight">
                            Learning Java <span className = "text-sky-400">Spring Boot</span>
                        </p>
                        <div className="mt-6 flex gap-3">
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-zinc-300 border border-white/10">Java</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-zinc-300 border border-white/10">Spring</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-zinc-300 border border-white/10">Backend</span>
                        </div>
                    </div>

                    {/* Career Status Card */}
                    <div className="bg-blue-600/20 backdrop-blur-2xl border border-blue-700/30 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center">
                        <p className="text-blue-100 font-bold text-xl leading-snug">
                            Actively seeking 2026 Full-time Software Engineering roles.
                        </p>
                        <button className="mt-6 w-full py-3 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-colors  uppercase text-sm tracking-tighter">
                            Get Resume
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Currently;