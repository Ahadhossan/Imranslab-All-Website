/** @format */
import { useState } from "react";
import { faqs, practices, services } from "../../Data/Services/backend";
import BackendForm from "../../Helper/From/Services/BackendForm";
import ContactForm from "../../Helper/From/ContactForm";
import Newsletter from "../../Helper/Newsletter";

const Backend = () => {
  // faqs state js
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="w-full hero-bg py-24 px-4 md:px-12">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-5xl font-semibold text-[#53aedb]">
              Backend Development Services
            </h2>
            <p
              className="mt-4 text-[#EDFFF8] w-3/4
            "
            >
              Scalable and adaptable cloud-based back-end solutions for evolving
              business needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 transition mt-6"
            >
              Lets Talk
            </a>
          </div>

          {/* Right Side - Form */}
          <BackendForm />
        </div>
      </div>

      {/* Backend Development Services section */}
      <section className="space-y-6 max-w-9xl mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-[#f8f8f6]">
        <h2 className="text-xl sm:text-3xl font-extrabold text-[#151517] text-center sm:text-left">
          Backend Development Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {services.map(({ title, description }, i) => (
            <article
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300"
              style={{ transition: "transform 0.3s ease" }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#151517]">
                {title}
                <div className="bg-[#53aedb] w-10 h-1 pt-0"></div>
              </h3>
              <p className="text-[#151517] flex-grow text-sm sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/*Practices section */}
      <section className="max-w-9xl mx-auto px-6 py-10 sm:px-8 lg:px-10 bg-white">
        <header className="mb-6">
          <h2
            id="best-practices-in-backend-development"
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2"
          >
            <b>Best</b> Practices in Backend Development
          </h2>
          <p className="text-gray-700 max-w-full sm:max-w-2xl">
            Backend development is bridging between functionality, performance,
            and speed. Powering up with the best industry practices enables
            SoftTech to optimize efficiency at all levels while coping with
            increasing complexity over time.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {practices.map(({ icon, title, description }, i) => (
            <article
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300"
              style={{ transition: "transform 0.3s ease" }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <img
                  src={icon}
                  alt={`${title} icon`}
                  className="w-6 h-6 mr-2 flex-shrink-0"
                />
                {title}
              </h3>
              <p className="text-gray-600 flex-grow text-sm sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Faqs section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#042222]">
            Frequently <span className="text-[#53aedb]">Asked</span> Questions
          </h2>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border rounded-md bg-white shadow-sm overflow-hidden transition-all duration-500 ease-in-out"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-4 py-3 flex justify-between items-center text-left bg-[#a0d1e9] hover:bg-[#73c1e9] transition-colors duration-300 text-gray-800 font-semibold"
                >
                  <p className="text-gray-800 font-medium">{faq.question}</p>
                  <span
                    className={`text-2xl text-[#151517] transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  >
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-4 text-[#042222] bg-[#dcf3ea] text-sm overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx
                      ? "max-h-96 py-2 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {typeof faq.answer === "string" ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              </div>
            ))}
          </div>
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

export default Backend;
