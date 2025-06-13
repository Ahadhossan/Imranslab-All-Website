/** @format */

import { CodeXmlIcon, MessageCircleCode } from "lucide-react"
import { useState } from "react";

const ComingSoon = ({title}) => {

  const [comingsoonEmail, setComingSoonEmail] = useState("");
      const [comingsoonSuccess, setComingSoonSuccess] = useState("");
    
      const handleComingSoonSubmit = (e) => {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(comingsoonEmail)) {
          setComingSoonSuccess("Please enter a valid email.");
          return;
        }
    
        // Replace this with actual email processing logic (e.g. Mailchimp / Web3Forms)
        setComingSoonSuccess("Thanks for subscribing!");
        setComingSoonEmail("");
        setTimeout(() => setComingSoonSuccess(""), 3000);
      };
  

  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4">
      <div className="text-center space-y-6">
        <h1 className="flex gap-3 text-4xl md:text-6xl font-extrabold animate-pulse">
          <CodeXmlIcon size={45}/> Coming Very Soon ! <MessageCircleCode size={45}/>
        </h1>
        <h1 className="text-4xl md:text-6xl font-extrabold">{title}</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          <span>Hi Friend!</span> We’re working hard to bring something amazing to life. Stay tuned for updates!
        </p>
        <div className="mt-6 ">
          <form
            onSubmit={handleComingSoonSubmit}
            className="mt-6 flex justify-center flex-wrap gap-2"
          >
            <input
              type="email"
              value={comingsoonEmail}
              onChange={(e) => setComingSoonEmail(e.target.value)}
              placeholder="Email here"
              required
              className="px-4 py-2 w-full sm:w-64 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md font-semibold"
            >
              Notify Me
            </button>
          </form>

          {comingsoonSuccess && (
            <p
              className={`text-sm mt-2 ${
                comingsoonSuccess.includes("Thanks")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {comingsoonSuccess}
            </p>
          )}
        </div>
      </div>
    </section>
    </>
  )
}

export default ComingSoon