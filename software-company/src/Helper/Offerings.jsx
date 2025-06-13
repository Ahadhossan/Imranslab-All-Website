/** @format */

import { useState } from "react";

const offeringsData = {
  services: {
    label: "Our Services",
    categories: [
      {
        title: "Development & QA",
        points: [
          "Ensuring Compatibility and Smooth Integration",
          "Careful Testing and Validation",
          "Providing a Smooth User Experience",
        ],
        description: [
          "Do you know why some software projects don't meet expectations? There are two possible reasons:",
          "You might be missing important steps in your development and QA processes, or you're doing things right, but others are doing them better.",
          "With over 17 years of experience, we’ve built processes that ensure scalable, robust, and user-friendly applications.",
        ],
      },
      {
        title: "Mobility & Apps",
        points: [
          "Developing Apps That Perform Best on Each Platform",
          "Hybrid App Development for Cross-Platform Solutions",
          "Web App Development and Progressive Web Apps (PWAs)",
        ],
        description: [
          "Creating mobile and web apps that perform, engage, and align with your business goals.",
          "We develop native, hybrid, and responsive web apps to maximize user reach and experience.",
        ],
      },
      {
        title: "IT Operations",
        points: [
          "Streamlining Development and Operations with DevOps",
          "Enhancing Security with Cybersecurity Services",
          "Designing Scalable and Reliable Infrastructure",
          "Providing Ongoing Technical Support",
        ],
        description: [
          "We offer complete IT services including DevOps, cybersecurity, scalable infrastructure, and ongoing support.",
        ],
      },
    ],
  },
  solutions: {
    label: "Our Solutions",
    categories: [
      {
        title: "Education Technology",
        points: [
          "Managed Hosting",
          "Open edX LMS Customization",
          "Instructional Design and Course Creation",
          "LMS Training and Support",
          "Data Migration & Custom LMS Platforms",
        ],
        description: [
          "Enhance the learning experience with full-service eLearning tech including Open edX, instructional design, and training."
        ],
      },
      {
        title: "Data, ML & AI",
        points: [
          "Predictive Analysis",
          "Computer Vision",
          "Machine Learning & Deep Learning",
          "Business Intelligence",
          "NLP & Generative AI",
        ],
        description: [
          "Leverage data to gain insights, automate decisions, and innovate using AI/ML and data science."
        ],
      },
      {
        title: "E-Commerce",
        points: [
          "eCommerce Development",
          "Voice Commerce",
          "AR Shopping",
          "AI Chatbots",
          "Customer Segmentation & Sentiment Analysis",
        ],
        description: [
          "Boost your online business with interactive, secure, and intelligent e-commerce tech solutions."
        ],
      },
    ],
  },
};

const Offerings =() => {
  const [tab, setTab] = useState("services");
  const [activeIndex, setActiveIndex] = useState(0);

  const data = offeringsData[tab];
  const current = data.categories[activeIndex];

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Our <span className="text-[#53aedb]">Offerings</span>
      </h2>
      <p className="text-center text-lg mb-6">
        From development to QA, IT operations to AI, our tech services are tailored to your needs.
      </p>

      <div className="flex justify-center gap-4 mb-6">
        {Object.keys(offeringsData).map((key) => (
          <button
            key={key}
            onClick={() => {
              setTab(key);
              setActiveIndex(0);
            }}
            className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
              tab === key ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {offeringsData[key].label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {data.categories.map((cat, i) => (
          <button
            key={cat.title}
            onClick={() => setActiveIndex(i)}
            className={`px-3 py-1 border rounded-md text-sm transition ${
              i === activeIndex
                ? "bg-blue-500 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold mb-3 text-[#53aedb]">{current.title}</h3>
        <div className="space-y-2 text-gray-700">
          {current.description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>
        <ul className="list-disc mt-4 pl-6 text-gray-800 space-y-1">
          {current.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}


export default Offerings