import Football from '../../Images/Interests/football.JPG'
import Golf from '../../Images/Interests/golf.PNG'
import Steak from '../../Images/Interests/steak.jpeg'
import Travel from '../../Images/Interests/travelling.jpeg'

function AboutMe() {

    const interests = [{src: Football, alt: "Football"}, {src: Golf, alt: "Golf"}, {src: Steak, alt: "Steak"}, {src: Travel, alt: "Travel"}]

    return (
        <section id="about" className="min-h-screen bg-black  text-white py-20 px-6">
        <div className="md:ml-10 mx-auto">
            
            {/* Header Section */}
            <div className="flex flex-col items-start mb-16">
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter">
                <span className = "inline-block border-b-4 border-blue-600 pb-1">Who </span> I <span className="whitespace-nowrap">am <span className = "text-blue-600">.</span></span>
            </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
            {/* Column 1 & 2: Main Story */}
            <div className="lg:col-span-2 space-y-8">
                <p className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-200">
                I am a <span className="text-blue-600">Senior at Virginia Tech</span>, pursuing a B.S. in Computer Science with an expected graduation in December 2026.
                </p>
                
                <p className="text-xl text-gray-400 leading-relaxed">
                My passion for software development began in high school after taking AP Computer Science. 
                Since then, I have honed my skills through rigorous coursework, personal projects, 
                and leadership roles. Beyond the classroom, I serve as a <strong>Project Developer</strong> within BITS
                (Building Impactful Tech for Students), and contribute to <strong>Undergrad Research</strong>, where I enjoy bridging the gap 
                between theoretical concepts and practical applications.
                </p>

                <p className = "text-xl text-gray-400 leading-relax">
                    While away from my laptop, you can find me at a football game, 
                    perfecting my golf swing, researching a stock, cooking up a steak, or planning my next travel adventure!
                </p>

                <p className = "text-xl text-gray-400 leading-relaxed">
                     I am actively seeking <span className = "text-blue-600">internship opportunities</span> in software 
                    engineering to apply my knowledge and skills in a professional setting.
                </p>

            </div>

            {/* Column 3: Stats & Personal Sidebar */}
            <div className="space-y-6">

                {/* Interests Card */}
                <div className="p-8 border-2 border-zinc-800 rounded-3xl">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                    {interests.map((item, index) => (
                                    <img 
                                        key={index} // Always add a key when mapping in React
                                        src={item.src} // Matches the key in your array
                                        alt={item.alt} 
                                        className="aspect-square h-full object-cover rounded-lg shadow-sm transition-transform" 
                                    />
                                ))}
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
}

export default AboutMe;