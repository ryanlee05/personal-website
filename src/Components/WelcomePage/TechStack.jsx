import React, { useState } from 'react';

function TechStack() {
    const [rotation, setRotation] = useState(0);

    const techItems = [
        { name: "Java", rot: 45 },
        { name: "Python", rot: 90 },
        { name: "React", rot: 180 },
        { name: "SQL", rot: 270 },
        { name: "AWS", rot: 360 },
    ];

    return (
        <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
            
            {/* --- PLANET SYSTEM --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                
                {/* 1. The Planet Core */}
                <div className="absolute w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-40 z-0"></div>
                
                {/* 2. THE TILTED CONTAINER (This ensures Ring and Dot tilt together) */}
                <div className="relative w-[500px] h-[150px] rotate-[25deg] flex items-center justify-center">
                    
                    {/* The Visual Ring */}
                    <div className="absolute inset-0 border border-white/20 rounded-[100%]"></div>

                    {/* THE GLIDING DOT 
                        We wrap the dot in a full-size container and rotate the container.
                        This makes the dot follow the oval perfectly.
                    */}
                    <div 
                        className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    >
                        {/* This is the actual white dot sitting on the edge */}
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]"></div>
                    </div>
                </div>
            </div>

            {/* --- INTERACTIVE TECH LIST --- */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                <h1 className="text-6xl font-black text-white mb-10 tracking-tighter">TECH STACK</h1>
                <div className="flex flex-wrap justify-center gap-8 max-w-2xl">
                    {techItems.map((item) => (
                        <button 
                            key={item.name}
                            onMouseEnter={() => setRotation(item.rot)}
                            className="text-2xl font-mono text-gray-500 hover:text-white transition-colors uppercase"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;