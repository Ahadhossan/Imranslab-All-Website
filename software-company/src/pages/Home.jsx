/** @format */

import ContactForm from "../Helper/From/ContactForm";
import Offerings from "../Helper/Offerings";
import Newsletter from "../Helper/Newsletter";
import ButtonFill from "../Button/ButtonFill";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full hero-bg py-24 px-4 md:px-12">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-5xl font-semibold text-[#53aedb]">
              Software Company SoftTech Services
            </h2>
            <p
              className="mt-4 text-[#EDFFF8] w-3/4
            "
            >
              Secure, scalable, and innovative software and website that deliver
              results.
            </p>
            <p className="mt-4 text-[#EDFFF8] w-3/4">
              SoftTech Services is a cutting-edge software company delivering
              innovative, scalable, and secure digital solutions tailored to
              empower businesses and streamline their operations efficiently.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 transition mt-6"
            >
              Contact Us
            </a>
          </div>
          {/* right side */}
          <video className="rounded-md h-[80%]" controls>
            <source
              src="../../src/assets/Blue Modern Software Company Logo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* What we provide section  */}
      <div className="pt-16 pb-16 bg-white">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#53aedb] uppercase">
                What we provide
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl mt-1 font-semibold text-[#151517]">
                Provide High Quality Software’s Service for All Industry
              </h1>
            </div>
            <div className="lg:ml-auto">
              <a
                href="#"
                className="w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto "
              >
                All Services
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16">
            {/* box 1 */}
            <div>
              <div className="p-6 cursor-pointer bg-blue-800 hover:bg-blue-600 transition-all duration-500 group relative   shadow rounded-md">
                <img src="https://i.ibb.co/J1S5njF/s1.webp" alt="" />
                <h1 className="text-xl mt-5 font-semibold group-hover:text-white transition-all duration-500">
                  Custom Softwares Development
                </h1>
                <p className="mt-4 font-medium text-gray-500 dark:text-gray-200 group-hover:text-gray-300 transition-all duration-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </div>
            {/* box 2 */}
            <div>
              <div className="p-6 cursor-pointer bg-blue-800 hover:bg-blue-600 transition-all duration-500 group relative   shadow rounded-md">
                <img src="https://i.ibb.co/39x1qHNq/s2.webp" alt="s2" border="0"/>
                <h1 className="text-xl mt-5 font-semibold group-hover:text-white transition-all duration-500">
                  Website Design and Development
                </h1>
                <p className="mt-4 font-medium text-gray-500 dark:text-gray-200 group-hover:text-gray-300 transition-all duration-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </div>
            {/* box 3 */}
            <div>
              <div className="p-6 cursor-pointer bg-blue-800 hover:bg-blue-600 transition-all duration-500 group relative   shadow rounded-md">
                <img src="https://i.ibb.co/Z6Z8KqT0/s3.webp" alt="s3" border="0"/>
                <h1 className="text-xl mt-5 font-semibold group-hover:text-white transition-all duration-500">
                  Cloud Computing and Hosting Service
                </h1>
                <p className="mt-4 font-medium text-gray-500 dark:text-gray-200 group-hover:text-gray-300 transition-all duration-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </div>
            {/* box 4 */}
            <div>
              <div className="p-6 cursor-pointer bg-blue-800 hover:bg-blue-600 transition-all duration-500 group relative   shadow rounded-md">
                <img src="https://i.ibb.co/ZRQPXr95/s4.webp" alt="s4" border="0"/>
                <h1 className="text-xl mt-5 font-semibold group-hover:text-white transition-all duration-500">
                  Ai &amp; Machine Learning Integration
                </h1>
                <p className="mt-4 font-medium text-gray-500 dark:text-gray-200 group-hover:text-gray-300 transition-all duration-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </div>
            {/* box 5 */}
            <div>
              <div className="p-6 cursor-pointer bg-blue-800 hover:bg-blue-600 transition-all duration-500 group relative   shadow rounded-md">
                <img src="https://i.ibb.co/Q3MHPtw1/s5.webp" alt="s5" border="0"/>
                <h1 className="text-xl mt-5 font-semibold group-hover:text-white transition-all duration-500">
                  Android &amp; iOS App Development
                </h1>
                <p className="mt-4 font-medium text-gray-500 dark:text-gray-200 group-hover:text-gray-300 transition-all duration-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </div>
            {/* box 6 */}
            <div>
              <div className="p-6 cursor-pointer bg-blue-800 hover:bg-blue-600 transition-all duration-500 group relative   shadow rounded-md">
                <img src="https://i.ibb.co/N2J623Fx/s6.webp" alt="s6" border="0"/>
                <h1 className="text-xl mt-5 font-semibold group-hover:text-white transition-all duration-500">
                  3D Graphics &amp; Vector Designing
                </h1>
                <p className="mt-4 font-medium text-gray-500 dark:text-gray-200 group-hover:text-gray-300 transition-all duration-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Offerings */}
      <section className="p-6 bg-slate-900">
        <div>
          <Offerings />
        </div>
      </section>

      {/* How Can We Work */}
      <section className="p-10 bg-slate-50">
        <h2 className="text-center text-[40px] text-[#151517] mb-8">
          How Can We Work With You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Software Development Outsourcing */}
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h1 className="mb-4 text-[#53aedb] text-[20px] font-semibold">
              Software Development Outsourcing
            </h1>
            <p className="text-[#151517]">
              We build your software from start to finish, letting you focus on
              your core business.
            </p>
          </div>

          {/* Dedicated Teams */}
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h1 className="mb-4 text-[#53aedb] text-[20px] font-semibold">
              Dedicated Teams
            </h1>
            <p className="text-[#151517]">
              You get a fully committed team that integrates into your
              organization and culture.
            </p>
          </div>

          {/* IT Staff Augmentation */}
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h1 className="mb-4 text-[#53aedb] text-[20px] font-semibold">
              IT Staff Augmentation
            </h1>
            <p className="text-[#151517]">
              Fill skills gaps fast by bringing in qualified professionals
              whenever you need them.
            </p>
          </div>
        </div>
      </section>

      {/* Successful Softwares */}
      <div className="pt-16 pb-16 bg-">
        <div className="text-center">
          <h1 className="uppercase text-lg sm:text-xl md:text-2xl font-bold text-[#53aedb]">
            Softwares
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl mt-1 font-semibold text-[#151517]">
            Driving Change with Innovative <br /> Successful Softwares
          </h1>
        </div>
        <div className="w-[90%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* box 1 */}
          <div>
            <div className="bg-green-100 p-6 rounded-lg">
              <img src="https://i.ibb.co/RRxrTP4/i1.webp" alt="i1" border="0"/>
              <h1 className="text-xl mt-6 font-bold text-[#53aedb]">
                Best Marketing Software
              </h1>
              <p className="text-gray-800 mt-3 font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro
              </p>
            </div>
          </div>
          {/* box 2 */}
          <div>
            <div className="bg-red-100 p-6 rounded-lg">
              <img src="https://i.ibb.co/TBF0Jf1c/i2.webp" alt="i2" border="0"/>
              <h1 className="text-xl mt-6 font-bold text-[#53aedb]">
                Product Sales Software
              </h1>
              <p className="text-gray-800 mt-3 font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro
              </p>
            </div>
          </div>
          {/* box 3 */}
          <div>
            <div className="bg-green-100 p-6 rounded-lg">
              <img src="https://i.ibb.co/B5JS0PjW/i3.webp" alt="i3" border="0"/>
              <h1 className="text-xl mt-6 font-bold text-[#53aedb]">
                Best Marketing Software
              </h1>
              <p className="text-gray-800  mt-3 font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact From */}
      <section className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
        {/* Left Section: Image */}
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img src="https://i.ibb.co/nMt8jQgP/Contact-Form.jpg" alt="Contact-Form" className="w-full h-full object-cover" />
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <ContactForm />
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default Hero;
