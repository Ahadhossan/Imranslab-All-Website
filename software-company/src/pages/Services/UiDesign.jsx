/** @format */

import { useState } from "react";
import { faqs, tabContents, tabs } from "../../Data/Services/uidesign";
import ContactForm from "../../Helper/From/ContactForm";
import Newsletter from "../../Helper/Newsletter";

const UiDesign = () => {
  // UI/UX Design Services state js
  const [activeTab, setActiveTab] = useState("branding");

  // faqs state js
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {/* hero section */}
      <section className="w-full min-h-[340px] bg-gradient-to-br from-black via-slate-900 to-gray-950 py-24 pb-12">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 mt-10 lg:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold text-[#53aedb]">
              SoftTech UX/UI Design Services
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              A great design puts the user first. By understanding real user
              needs, motivations, and pain points, we design products that solve
              the right problems.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
              Lets Talk
            </a>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              src="https://d1foa0aaimjyw4.cloudfront.net/ux_banner_c01a03540d.png"
              alt="UX/UI Design Banner"
              width={500}
              height={400}
              loading="lazy"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/*Sinking Ship section */}
      <section className="relative bg-white px-6 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content & Images */}
          <div className="lg:w-1/2 relative">
            <h2 className="sectionTitle text-4xl font-extrabold mb-6 text-[#151517]">
              Bad UX/UI is a <strong>Sinking Ship</strong>
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-xl text-[#151517]">
              In the rush for speed to market, most companies cut corners on
              UX/UI. The result? Poor usability. Which causes frustrations.
              Drop-offs. And projects crashing and burning before takeoff.
            </p>

            {/* Main Ship Image */}
            <img
              src="https://i.ibb.co/9HcQnBkX/ux-ship.webp"
              alt="Sinking ship illustration"
              loading="lazy"
              width={800}
              height={450}
              className="w-full max-w-xl object-contain relative z-10"
            />

            {/* Clouds Overlay */}
            <img
              src="https://d1foa0aaimjyw4.cloudfront.net/ux_clouds_6c430449d3.png"
              alt="Clouds"
              loading="lazy"
              width={250}
              height={250}
              className="absolute top-[-60px] left-[-40px] w-40 h-40 object-contain opacity-70 pointer-events-none select-none"
              aria-hidden="true"
            />
          </div>

          {/* Cards Section */}
          <div className="lg:w-1/2 flex flex-col space-y-8">
            <article className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border hover:border-blue-500 hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer">
              <h3 className="listTitle text-2xl font-semibold mb-2 text-gray-900">
                Citibank
              </h3>
              <p className="text-lg text-gray-700">
                Citibank learned a costly $500 million lesson due to clunky
                software with a confusing user experience.
              </p>
            </article>
            <article className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border hover:border-green-700 hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer">
              <h3 className="listTitle text-2xl font-semibold mb-2 text-gray-900">
                Google Wave
              </h3>
              <p className="text-lg text-gray-700">
                Launched in 2009, Google ambitious project Google Wave was shut
                down after one year. One major factor was its complicated user
                interface.
              </p>
            </article>
            <article className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer  hover:border hover:border-yellow-500">
              <h3 className="listTitle text-2xl font-semibold mb-2 text-gray-900">
                Healthcare.gov
              </h3>
              <p className="text-lg text-gray-700">
                The 2013 rollout of Healthcare.gov (aka Obamacare) ended up
                costing taxpayers $1.7 billion, with usability issues being a
                key factor.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/*House Degin Lab section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="sectionTitle text-4xl font-extrabold text-white">
              Meet SoftTech UI/UX Design: Our In-House Design Lab
            </h2>

            <div className="text-lg space-y-4 text-gray-300 max-w-xl">
              <p>
                Nurture is the <strong>research</strong> and{" "}
                <strong>experience</strong> lab at Arbisoft; housing a
                close-knit team of product people defined by our{" "}
                <strong>curious</strong> nature and{" "}
                <strong>collaborative</strong> spirit. We are dedicated to{" "}
                <strong>helping early & mid-stage</strong> startups identify{" "}
                <strong>user needs</strong>, solve wicked problems, and
                collaborate with them on <strong>product design</strong>.
              </p>
              <p>
                We approach every project as a challenge to solve real-life
                problems for actual users while helping our partners reach their
                business goals.
              </p>
            </div>

            <figure aria-label="Quote icon" className="my-6">
              <img
                src="../../src/assets/quote.svg"
                alt=""
                loading="lazy"
                width={60}
                height={48}
                className="inline-block"
              />
            </figure>

            <blockquote className="text-xl font-semibold italic text-gray-100 max-w-xl">
              On time? Check. Within budget? Check. But whats the point if no
              one likes it? Great design is not about ticking boxes. It is about
              solving real human problems.
            </blockquote>
          </div>

          {/* Right Gallery */}
          <div className="lg:w-1/2 overflow-x-auto flex gap-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {[
              "https://i.ibb.co/S4Yn9vqC/Ux-Designer-Female-1.gif",
              "https://i.ibb.co/q3nQvkhF/columns.webp",
              "https://i.ibb.co/mF2njjx0/tools.webp",
              "https://i.ibb.co/0j1qG4X3/group.webp",
              "https://i.ibb.co/23Ks3xND/Ux-Browser-1.gif",
              "https://i.ibb.co/KzNzwkZr/figma.webp",
              "https://i.ibb.co/cX73W38W/miro.webp",
              "https://i.ibb.co/Qj1B1SXs/laptop.webp",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Nurture gallery image ${i + 1}`}
                width={280}
                height={200}
                loading="lazy"
                className="flex-shrink-0 rounded-lg object-cover snap-center"
                style={{ aspectRatio: "1 / 1" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Challenges section */}
      <section className="bg-[#f8f8f6] py-16 text-[#151517]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            aria-label="Top Challenges We Tackle"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#151517]"
          >
            <span>
              Top <b>Challenges</b> We Tackle
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card Template */}
            {[
              {
                title: "Discovery",
                desc: "We do not just scratch the surface. We dig deep into who engages with your brand (or who you want to engage) through persona creation. Then we map out their journey, analyzing their deepest needs and how your product can best serve them.",
                img: "../../src/assets/discovery.svg",
              },
              {
                title: "UX Audit",
                desc: "Product not performing? Stop guessing. It’s time to level up your user experience. With our data-driven analysis, you’ll know exactly what’s working and what’s not. And can make informed decisions to improve the overall performance.",
                img: "../../src/assets/ux-audit.svg",
              },
              {
                title: "Information Architecture",
                desc: "Does your menu make sense? We’ll figure that out here. Our team simplifies your information architecture (IA), organizes the categories, and ensures everything is where it should be. So your users can find what they need without any fuss.",
                img: "../../src/assets/information-architecture.svg",
              },
              {
                title: "Design Systems",
                desc: "From buttons and icons to typography and spacing. Every element must click together. We create design systems that give your product UX the right start. They bring consistency, speed up development, and keep your team in sync.",
                img: "../../src/assets/design-system.svg",
              },
              {
                title: "Wireframes and Prototypes",
                desc: "Wireframes are the basic layout—no images, no colors. We turn them into clickable prototypes to test the user experience. We step into the shoes of your users, literally! We then go for a walk (or even a run) to understand their journey firsthand.",
                img: "../../src/assets/wireframes.svg",
              },
              {
                title: "Usability Testing",
                desc: "Every click counts. Every swipe matters. What’s confusing users or getting them stuck? We do not rely on guesswork. We test your product with real users. Pinpoint hidden friction points. And help you create a painless user experience.",
                img: "../../src/assets/quality-assurance.svg",
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  alt={`${item.title} Icon`}
                  src={item.img}
                  className="w-12 h-12 mb-4 mx-auto"
                />
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-center">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* UI/UX Design Services section */}
      <section className="p-6 md:p-12 text-black bg-slate-200">
        <div className="container mx-auto max-w-7xl">
          <h2 className="sectionTitle text-center md:text-left mb-12 text-3xl font-bold text-[#151517]">
            Our <b className="text-[#53aedb]">UX/UI</b> Design Services
            <div className="border-b border-black pb-4 pt-0 mb-4"></div>
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar tabs */}
            <nav
              role="tablist"
              aria-label="UX/UI Design Service Tabs"
              className="
    flex flex-row md:flex-col gap-4 
    overflow-x-auto md:overflow-visible
    whitespace-nowrap md:whitespace-normal
    scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
    -mx-5 px-5
  "
            >
              {tabs.map(({ id, label, icon }, idx) => (
                <button
                  key={id}
                  role="tab"
                  aria-selected={activeTab === id}
                  aria-controls={`tab-${id}`}
                  id={`tab-${id}-toggle`}
                  onClick={() => setActiveTab(id)}
                  type="button"
                  className={`
        flex items-center gap-3 
        px-5 py-4 rounded-lg
        cursor-pointer select-none
        shadow-md transition-shadow duration-300 
        focus:outline-none focus:ring-2 focus:ring-[#00D47E]
        whitespace-nowrap
        ${activeTab === id
                      ? "bg-[#e0f0ea] text-black shadow-lg"
                      : `bg-gradient-to-tr ${idx % 3 === 0
                        ? "from-green-100 to-green-200 hover:from-green-200 hover:to-green-300"
                        : idx % 3 === 1
                          ? "from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300"
                          : "from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300"
                      } text-gray-700 hover:text-gray-900`
                    }
      `}
                >
                  <img
                    alt={`${label} Icon`}
                    src={icon}
                    width={28}
                    height={28}
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                    className="select-none"
                    style={{ color: "transparent" }}
                  />
                  <span className="font-semibold whitespace-nowrap">
                    {label}
                  </span>
                </button>
              ))}
            </nav>

            {/* Tab content */}
            <div className="About_slider__mL9DC flex-1 overflow-hidden">
              {Object.entries(tabContents).map(
                ([key, { title, text, img, alt }]) => (
                  <article
                    key={key}
                    id={`tab-${key}`}
                    role="tabpanel"
                    tabIndex={activeTab === key ? 0 : -1}
                    aria-labelledby={`tab-${key}-toggle`}
                    className={`About_slides__e2vae transition-opacity duration-500 ease-in-out
                    ${activeTab === key
                        ? "opacity-100 block"
                        : "opacity-0 hidden"
                      }
                    bg-white rounded-lg p-6 shadow-lg max-w-full mx-auto`}
                    style={{ maxWidth: "700px" }}
                  >
                    <h3 className="entryTitle flex items-center gap-2 mb-6 text-2xl font-semibold">
                      <img
                        alt={`${title} Icon`}
                        src={tabs.find((t) => t.id === key).icon}
                        width={20}
                        height={20}
                        loading="lazy"
                        decoding="async"
                        aria-hidden="true"
                        style={{ color: "transparent" }}
                      />
                      {title}
                    </h3>
                    <p className="textMedium mb-8">{text}</p>
                    <img
                      alt={alt}
                      loading="lazy"
                      width={700}
                      height={275}
                      decoding="async"
                      src={img}
                      className="w-full rounded-lg max-w-full object-contain"
                      style={{ color: "transparent" }}
                    />
                  </article>
                )
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="About_controls__TJgoj flex justify-center gap-4 mt-8">
            <button
              aria-label="Show Previous Slide"
              className="p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => {
                const currentIndex = tabs.findIndex((t) => t.id === activeTab);
                const prevIndex =
                  (currentIndex - 1 + tabs.length) % tabs.length;
                setActiveTab(tabs[prevIndex].id);
              }}
              type="button"
            >
              <img
                alt="Left arrow"
                loading="lazy"
                width={16}
                height={16}
                src="../../src/assets/arrow-left.svg"
                decoding="async"
                style={{ color: "transparent" }}
              />
            </button>
            <button
              aria-label="Show Next Slide"
              className="p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => {
                const currentIndex = tabs.findIndex((t) => t.id === activeTab);
                const nextIndex = (currentIndex + 1) % tabs.length;
                setActiveTab(tabs[nextIndex].id);
              }}
              type="button"
            >
              <img
                alt="Right arrow"
                loading="lazy"
                width={16}
                height={16}
                src="../../src/assets/arrow-right.svg"
                decoding="async"
                style={{ color: "transparent" }}
              />
            </button>
          </div>
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
                    className={`text-2xl text-[#151517] transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                      }`}
                  >
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-4 text-[#042222] bg-[#dcf3ea] text-sm overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx
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

      {/* ContacForm section */}
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

      {/* newsletter section */}
      <Newsletter />
    </>
  );
};

export default UiDesign;
