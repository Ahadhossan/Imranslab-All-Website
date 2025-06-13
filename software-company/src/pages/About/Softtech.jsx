/** @format */

import { CircleCheckBig } from "lucide-react"

const Softtech = () => {
  return (
    <>
      {/* hero section */}
      <section className="w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-12 h-full">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#53aedb] leading-tight">
              How Softtech Communications Team Leads the Way
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Explore how Softtech Communications Team enhances workplace success through effective training and fostering communication skills, ensuring every idea shines....
            </p>
            <a
              href="/blogs/google-i-o-2025-google-just-went-all-in-on-ai"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold transition duration-300"
            >
              <svg
                width="56"
                height="40"
                viewBox="0 0 56 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <path d="M50 14L55 20L50 26" stroke="currentColor" />
                <circle
                  cx="20"
                  cy="20"
                  r="19.625"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
                <path d="M25 20L55 20" stroke="currentColor" />
              </svg>
              <span className="text-lg">Read More</span>
            </a>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co/FqKx1JkN/software-development.png"
              alt="Google I/O 2025 AI"
              loading="lazy"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ife at softtech */}
      <section className="bg-[#ffffff] py-20">
        <div className="container mx-auto px-6 space-y-16">
          {/* box 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 bg-white p-6 rounded-2xl shadow-2xl hover:shadow-[0_10px_60px_rgba(0,0,0,0.2)] transition duration-500">
            {/* img */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
              <img
                src="https://i.ibb.co/wNbXKK8D/softtech1.jpg"
                alt="img"
                className="rounded-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
              <h2 className="text-2xl font-bold text-[#151517]">
                How <span className="text-[#53aedb]">SoftTech Communications</span> Team Leads the Way
              </h2>
              <ul className="text-gray-600 text-sm leading-relaxed">
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Strategic Messaging Aligned with Company Vision</li>
                <li className="flex gap-3 py-2"> <CircleCheckBig className="text-blue-600" /> Proactive Crisis and Reputation Management</li>
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Data-Driven Communication Planning</li>
                <li className="flex gap-3 py-2"> <CircleCheckBig className="text-blue-600" /> Cross-Department Collaboration</li>
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Embracing Digital and Multimedia Innovation</li>
              </ul>
            </div>
          </div>
          {/* box 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 bg-white p-6 rounded-2xl shadow-2xl hover:shadow-[0_10px_60px_rgba(0,0,0,0.2)] transition duration-500">
            {/* content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
              <h2 className="text-2xl font-bold text-[#151517]">
                Nurturing Growth Through Knowledge Sharing <span className="text-[#53aedb]">Sessions at SoftTech</span>
              </h2>
              <ul className="text-gray-600 text-sm leading-relaxed">
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Cultivating a Culture of Continuous Learning</li>
                <li className="flex gap-3 py-2"> <CircleCheckBig className="text-blue-600" /> Empowering Team Members to Lead and Learn</li>
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Breaking Silos and Promoting Cross-Functional Collaboration</li>
                <li className="flex gap-3 py-2"> <CircleCheckBig className="text-blue-600" /> Real-World Case Studies and Practical Demos</li>
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Driving Innovation from the Inside Out</li>
              </ul>
            </div>
            {/* img */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
              <img
                src="https://i.ibb.co/bM98z9TS/softtech2.jpg"
                alt="img"
                className="rounded-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          {/* box 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 bg-white p-6 rounded-2xl shadow-2xl hover:shadow-[0_10px_60px_rgba(0,0,0,0.2)] transition duration-500">
            {/* img */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
              <img
                src="https://i.ibb.co/whyPYppG/softtech3.jpg"
                alt="img"
                className="rounded-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
              <h2 className="text-2xl font-bold text-[#151517]">
                Check-ins and <span className="text-[#53aedb]">1-on-1s at SoftTech:</span> Building a Stronger Team Culture
              </h2>
              <ul className="text-gray-600 text-sm leading-relaxed">
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Strengthening Manager–Team Relationships</li>
                <li className="flex gap-3 py-2"> <CircleCheckBig className="text-blue-600" /> Proactive Feedback and Personal Development</li>
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Identifying and Unblocking Challenges Early</li>
                <li className="flex gap-3 py-2"> <CircleCheckBig className="text-blue-600" /> Real-World Case Studies and Practical Demos</li>
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Driving Innovation from the Inside Out</li>
              </ul>
            </div>
          </div>
          {/* box 4 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 bg-white p-6 rounded-2xl shadow-2xl hover:shadow-[0_10px_60px_rgba(0,0,0,0.2)] transition duration-500">
            {/* content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
              <h2 className="text-2xl font-bold text-[#151517]">
                Flexible Work Hours at SoftTech: Empowering <span className="text-[#53aedb]">Balance and Performance</span>
              </h2>
              <ul className="text-gray-600 text-sm leading-relaxed">
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Promoting Work-Life Balance and Wellbeing</li>
                <li className="flex gap-3 py-2"> <CircleCheckBig className="text-blue-600" /> Boosting Productivity Through Autonomy</li>
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Accommodating Global Collaboration and Time Zones</li>
                <li className="flex gap-3 py-2"> <CircleCheckBig className="text-blue-600" /> Supporting Diverse Lifestyles and Needs</li>
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Reducing Stress, Increasing Retention</li>
              </ul>
            </div>
            {/* img */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
              <img
                src="https://i.ibb.co/JWbWhPKB/softtech4.jpg"
                alt="img"
                className="rounded-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          {/* box 5 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 bg-white p-6 rounded-2xl shadow-2xl hover:shadow-[0_10px_60px_rgba(0,0,0,0.2)] transition duration-500">
            {/* img */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
              <img
                src="https://i.ibb.co/7J9z6tJd/softtech5.jpg"
                alt="img"
                className="rounded-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
              <h2 className="text-2xl font-bold text-[#151517]">
                SoftTech <span className="text-[#53aedb]">Fresh Graduate</span> Hiring: Insights & Experiences
              </h2>
              <ul className="text-gray-600 text-sm leading-relaxed">
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Welcoming Talent with Potential, Not Just Experience</li>
                <li className="flex gap-3 py-2"> <CircleCheckBig className="text-blue-600" /> Structured Onboarding for a Confident Start</li>
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> Real Projects, Real Impact</li>
                <li className="flex gap-3 py-2"> <CircleCheckBig className="text-blue-600" /> Mentorship That Matters</li>
                <li className="flex gap-3"> <CircleCheckBig className="text-blue-600" /> A Safe Space to Learn, Fail, and Grow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Softtech