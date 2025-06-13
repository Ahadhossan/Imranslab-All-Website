/** @format */


import ButtonFill from "../Button/ButtonFill";
import Footer from "../Helper/Footer/Footer";
import { features, services } from "../Data/utils";
import HomeForm from "../Helper/From/HomeForm";

const Hero = () => {


  return (
    <>
      {/* Hero Section */}
      <div className="w-full hero-bg py-24 px-4 md:px-12">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-5xl font-semibold text-gray-900">
              Best & Trusted
            </h2>
            <h2 className="text-5xl font-bold text-[#EDEFC8] mt-1">SR.CLEAN</h2>
            <h2 className="text-5xl font-semibold text-[#e5e9a4] mt-1">
              <span className="text-gray-900">Cleaning</span> Services
            </h2>
            <p className="mt-4 text-[#EDFFF8] w-3/4">
             SR.Clean is a fast, reliable, and affordable cleaning service
              designed for busy homes and offices. We deliver spotless results
              with flexible scheduling and trusted professionals—making
              cleanliness quick and hassle-free.
            </p>
            <a href="#" className="mt-6 inline-block">
              <ButtonFill>Explore Now</ButtonFill>
            </a>
          </div>

          {/* Right Side - Form */}
          <HomeForm />
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-9xl mx-auto">
          {/* Heading */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#00D47E] hidden md:block">
                Cleaning Tasks
              </h2>
              <h2 className="text-3xl font-bold text-[#00D47E] md:hidden">
                Book Services
              </h2>
              <p className="text-gray-600 mt-2 max-w-xl">
                Instantly book highly rated pros for cleaning and handyman tasks
                at an upfront price.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="/services"
                className="text-[#00D47E] hover:underline flex items-center gap-1 font-medium"
              >
                See All
              </a>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <a
                key={idx}
                href={service.href}
                className="bg-white shadow-md hover:shadow-xl transition rounded-lg overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-gray-800 font-semibold">
                    {service.name}
                  </span>
                  <i className="fas fa-chevron-right text-gray-500" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <div className="md:w-5/12">
            <div className="mb-6">
              <p className="text-[#00D47E] text-sm uppercase font-semibold">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                Expert Cleaners and World Class Services
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Experience top-tier cleaning with our expert team committed to
              excellence. We deliver world-class services with attention to
              detail, reliability, and care—ensuring your home or office stays
              spotless, fresh, and professionally maintained every time.
            </p>
            <a href="#" className="inline-block px-6 py-2">
              <ButtonFill>Learn More</ButtonFill>
            </a>
          </div>

          {/* Right Section */}
          <div className="md:w-7/12 flex flex-col gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 p-4 rounded-lg shadow"
              >
                <div className="w-full sm:w-2/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <div className="w-full sm:w-3/5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vetted section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon and Title */}
            <div className="flex items-center gap-4">
              <img
                src="https://cache-landingpages.services.handy.com/assets/pages/home/vetted-pros-icon-3fd36f412a73566cd256ed1dc0c8d0b3addd067ff7d421e55d7b8b0b221ceaf0.svg"
                alt="Vetted Pros Icon"
                className="w-16 h-16"
              />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Vetted, Screened Professionals
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 mt-4 md:mt-0 md:ml-8 max-w-3xl">
              Cleaning and handyman tasks booked and paid for through Handy are
              performed by experienced, vetted providers who are highly rated by
              customers like you.{" "}
              <a
                href="/trust-and-safety"
                className="text-[#00D47E] hover:underline"
              >
                Learn more.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* happiness section */}
      <section className="p-16 bg-white">
        <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-10">
          {/* Left Content */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Are You a Five Star Pro?
            </h2>
            <p className="text-gray-700">
              From cleaners to handymen to smart home installers, Handy is
              always looking for service professionals who are experts in their
              trade and provide great service to their customers. The best home
              service professionals use Handy to find jobs with no lead fees and
              flexible scheduling.
            </p>
            <a href="#" className="inline-block px-6 py-2">
              <ButtonFill>Become a Pro</ButtonFill>
            </a>
          </div>

          {/* Right Image (or Background Photo Div) */}
          <div className="md:col-span-6 md:col-start-7 hidden md:block">
            <div className="h-80 w-80 bg-cover bg-center overflow-hidden position-relative">
<<<<<<< HEAD
              <img src="https://i.ibb.co/xtfx4MvM/become-pro.png" alt="Become Pro Image" />
            </div>
=======
              <img src="https://i.imghippo.com/files/CeNZ2660Bd.png" alt="Become Pro Image" />
              </div>
>>>>>>> b015c053d9cdc2d2114ccb58abe336afc6cb8c9a
          </div>
        </div>
      </section>


      {/* JoinTeamSection section */}
      <section className="bg-gray-50 py-16 px-4" id="join-our-team">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row">
            {/* Image */}
            <div className="w-full lg:w-1/2 h-64 lg:h-auto">
              <img
<<<<<<< HEAD
                src="https://i.ibb.co/3mGdKQXR/joinourteam.jpg"
=======
                src="https://i.imghippo.com/files/Etx1560jRE.jpg"
>>>>>>> b015c053d9cdc2d2114ccb58abe336afc6cb8c9a
                alt="Smiling employee in uniform"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Join Our Team
              </h2>
              <p className="text-gray-700 mb-4">
                The moment you put on a{" "}
                <span className="text-[#00D47E]">SRCLEAN</span> uniform, you
                become part of a family—a team committed to supporting one
                another. Molly Maid offers more than just a job: it’s a career
                path built on respect, integrity, and fun.
              </p>
              <p className="text-gray-700 mb-6">
                Your local franchise owner will treat you like family and offer
                a work culture where you are truly valued.
              </p>

              <span className="block text-sm text-gray-600 italic mb-6">
                Start your career with us today. We offer exciting opportunities
                for growth and success!
              </span>

              <div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3"
                >
                  <ButtonFill>View All Open Positions</ButtonFill>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Hero;
