import {useState} from 'react'

function Contact() {

  const [formSubmit, setFormSubmit] = useState("idle"); //Track from submission state

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmit("submitting");

    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormSubmit("success"))
      .catch(() => setFormSubmit("error"));
  }

  return (
    <section id="contact" className="w-full min-h-[80vh] bg-black text-white py-20 px-10 transition-colors">
       
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Header & Form */}
        <div>
          <h1 className="text-6xl font-black tracking-tighter mb-4">
            Get In Touch <span className="text-blue-600">!</span>
          </h1>

          {formSubmit === "success" ? (
            <div className = "mt-10 flex flex-col justify-evenly">
              <p className = "font-bold text-3xl">Thank you for your submission.</p>
              <p className = "font-bold text-3xl">I will get back to you as soon as possible.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Have a project in mind or just want to say hi? Drop a message!
              </p>
              <form 
                name = "contact"
                method = "POST"
                data-netlify = "true"
                onSubmit = {handleSubmit}
                className="space-y-4 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="hidden" name="form-name" value="contact" />
                    <input required type="text" name = "Name" placeholder="Name" className="w-full p-4 bg-gray-100 dark:bg-zinc-900 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition" />
                    <input required type="email" name = "Email" placeholder="Email" className="w-full p-4 bg-gray-100 dark:bg-zinc-900 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition" />
                  </div>
                  <textarea required name = "message" placeholder="Tell me about your project :D" rows="5" className="w-full p-4 bg-gray-100 dark:bg-zinc-900 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition"></textarea>
                  <button className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl hover:opacity-90 transition transform active:scale-95">
                    Send Message
                  </button>
              </form>
              <form 
                name = "contact" netlify netlify-honeypot = "bot-field" hidden>
                  <input type = "text" name = "Name"/>
                  <input type = "email" name = "Email"/>
                  <textarea name = "message"></textarea>
                </form>
            </>
          )}

        </div>

        {/* Right Column: Socials & Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Social Card: GitHub */}
            <a href="https://github.com/ryanlee05" target="_blank" className="p-6 bg-gray-100 dark:bg-zinc-900 rounded-2xl hover:bg-blue-600 hover:text-white transition-all group">
              <h3 className="font-bold text-xl">GitHub</h3>
              <p className="text-sm opacity-70 group-hover:text-white">Check out my repos</p>
            </a>
            
            {/* Social Card: LinkedIn */}
            <a href="https://linkedin.com/in/leeryan05" target="_blank" className="p-6 bg-gray-100 dark:bg-zinc-900 rounded-2xl hover:bg-blue-600 hover:text-white transition-all group">
              <h3 className="font-bold text-xl">LinkedIn</h3>
              <p className="text-sm opacity-70 group-hover:text-white">Let's connect professionally</p>
            </a>
          </div>

          {/* Direct Info */}
          <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-zinc-800">
            <div className="flex items-center space-x-4">
              <span className="p-3 bg-blue-600/10 text-blue-600 rounded-lg">📧</span>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Personal Email</p>
                <p className="font-medium">ryanlee.se@outlook.com</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">School Email</p>
                <p className="font-medium">ryanlee05@vt.edu</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="p-3 bg-blue-600/10 text-blue-600 rounded-lg">📞</span>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Phone</p>
                <p className="font-medium">+1 (571) 258-8209</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;