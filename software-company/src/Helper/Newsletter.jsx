/** @format */

import { useState } from "react";

const Newsletter = () => {

  const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterSuccess, setNewsletterSuccess] = useState("");
  
    const handleNewsletterSubmit = (e) => {
      e.preventDefault();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
        setNewsletterSuccess("Please enter a valid email.");
        return;
      }
  
      // Replace this with actual email processing logic (e.g. Mailchimp / Web3Forms)
      setNewsletterSuccess("Thanks for subscribing!");
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSuccess(""), 3000);
    };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-black py-10 px-4 sm:px-8 md:px-16 shadow-md">
        {/* Text Section */}
        <div className="mb-6 sm:mb-0 sm:mr-8 max-w-md">
          <h2 className="text-xl font-semibold text-[#53aedb] mb-2">
            Stay Updated
          </h2>
          <p className="text-sm text-gray-300">
            Submit your email to receive updates, services, or connect with us
            directly.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full sm:w-auto">
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-2"
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Email here"
              required
              className="px-4 py-2 w-full sm:w-64 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white transition"
            >
              Submit
            </button>
          </form>

          {newsletterSuccess && (
            <p
              className={`text-sm mt-2 ${
                newsletterSuccess.includes("Thanks")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {newsletterSuccess}
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default Newsletter