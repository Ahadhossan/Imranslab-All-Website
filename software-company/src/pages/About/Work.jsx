/** @format */

import { industries } from "../../Data/About/Work";
import ContactForm from "../../Helper/From/ContactForm";
import Newsletter from "../../Helper/Newsletter";

const Work = () => {
  return (
    <>
      <section className="relative w-full h-[90vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Desktop Banner */}
        <div className="hidden md:block absolute inset-0">
          <img
            src="https://d1foa0aaimjyw4.cloudfront.net/banner_work_fb6119fde0.webp"
            alt="Desktop Banner"
            className="w-full h-full object-cover object-bottom"
            aria-hidden="true"
            role="presentation"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Mobile Banner */}
        <div className="block md:hidden absolute inset-0">
          <img
            src="https://d1foa0aaimjyw4.cloudfront.net/Who_we_work_with_56d55013b9.jpg"
            alt="Mobile Banner"
            className="w-full h-full object-cover object-bottom"
            aria-hidden="true"
            role="presentation"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full bg-black/70 px-4">
          <div className="text-white text-start md:text-left max-w-6xl w-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 w-full md:w-[50%] text-[#53aedb]">
              From startups to enterprises, we work with the world’s best
            </h1>
            <p className="text-base md:text-lg mb-6 w-full md:w-[50%]">
              With over a decade of experience in technology consultancy, we’ve
              created thousands of solutions to help businesses like yours
              expand at a rapid scale. From startups to large-scale enterprises,
              we’ve supported the foundations for some of the most successful
              global businesses.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 transition"
            >
              <img
                src="../../src/assets/icon-circle.svg"
                alt="Icon"
                width={24}
                height={24}
              />
              <span>Let’s work together</span>
            </a>
          </div>
        </div>
      </section>

      {/* industries box, Technology, Education, Travel, Healthcare, Finance, E-commerce */}

      <section className="bg-gradient-to-br from-gray-100 to-white py-20">
        <div className="container mx-auto px-6 space-y-16">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row ${
                item.imageRight ? "lg:flex-row-reverse" : ""
              } items-center gap-10 bg-white p-6 rounded-2xl shadow-2xl hover:shadow-[0_10px_60px_rgba(0,0,0,0.2)] transition duration-500`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                <h2 className="text-3xl font-bold text-[#53aedb]">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.text}
                </p>
                <a
                  href={item.link}
                  aria-label={`Explore our ${item.title} services`}
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Explore our work
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

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

export default Work;
