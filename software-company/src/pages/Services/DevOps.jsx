/** @format */

import ContactForm from "../../Helper/From/ContactForm"
import Newsletter from "../../Helper/Newsletter"

const DevOps = () => {
  return (
    <>
      {/* hero section */}
      <section className="w-full bg-gray-50 py-12 pt-32">
  <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
    {/* Image */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        alt="DevOps solutions"
        loading="lazy"
        width={480}
        height={415}
        src="https://d1foa0aaimjyw4.cloudfront.net/Group_403_1_16c968673c.png"
        className="object-contain"
      />
    </div>

    {/* Text Block */}
    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
      <h1 className="text-4xl font-bold text-gray-900" tabIndex="-1">
        DevOps solutions
      </h1>
      <p className="text-lg text-gray-600">
        From planning to continuous development and monitoring, we support you every step of the way.
      </p>
      <a
        className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        href="/contact?service=DevOps%20solutions"
      >
        Get started with DevOps
      </a>
    </div>
  </div>

  {/* Down Arrow Icon */}
  <div className="flex justify-center mt-6">
    <span aria-hidden="true" className="inline-block">
      <img
        src="/icons/chevron-right-icon.svg"
        alt=""
        width={10}
        height={7}
      />
    </span>
  </div>
</section>


{/* solutions section */}
<section className="w-full bg-white py-12">
  <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        We <span className="text-[#1E5470]"> provide solutions </span> that take you one step closer to digital transformation
      </h2>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {/* Card 1 */}
      <article className="flex flex-col items-start text-start p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition hover:border hover:border-violet-800">
        <img
          src="https://i.ibb.co/rGvNckRT/Group-Dev-Ops.webp"
          alt="Iterative improvement"
          width={50}
          height={50}
          className="mb-4"
        />
        <h3 id="iterative-improvement" className="text-base sm:text-lg font-semibold text-[#1E5470]">
          Iterative improvement
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Our DevOps solutions help keep the software operational and work on continually improving through incremental updates.
        </p>
      </article>

      {/* Card 2 */}
      <article className="flex flex-col items-start text-start p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition hover:border hover:border-pink-600">
        <img
          src="https://i.ibb.co/vCvmVmxQ/Group-460-7759be871f.webp"
          alt="Continuous delivery management"
          width={50}
          height={50}
          className="mb-4"
        />
        <h3 id="continuous-delivery-management" className="text-base sm:text-lg font-semibold text-[#1E5470]">
          Continuous delivery management
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          We help your existing team transition to continuous delivery models of software development to assist you in changing user requirements and shifting business goals.
        </p>
      </article>

      {/* Card 3 */}
      <article className="flex flex-col items-start text-start p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition hover:border hover:border-yellow-500">
        <img
          src="https://i.ibb.co/nMgn7fxZ/Group-536-cc4c22562c.webp"
          alt="Automation"
          width={50}
          height={50}
          className="mb-4"
        />
        <h3 id="automation" className="text-base sm:text-lg font-semibold text-[#1E5470]">
          Automation
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Our team helps automate resource-intensive areas of your existing processes to facilitate Stable Delivery Automation for seamless product releases and updates.
        </p>
      </article>

      {/* Card 4 */}
      <article className="flex flex-col items-start text-start p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition hover:border hover:border-teal-600">
        <img
          src="https://i.ibb.co/qMC705vc/Group-463-1-cf4d84b4be.webp"
          alt="Code as infrastructure"
          width={50}
          height={50}
          className="mb-4"
        />
        <h3 id="code-as-infrastructure" className="text-base sm:text-lg font-semibold text-[#1E5470]">
          Code as infrastructure
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Your code is a business asset. We protect it through risk identification and prevention, efficient update processes, timely intervention, and quality control.
        </p>
      </article>
    </div>
  </div>
</section>

{/* SoftTech advantage */}
<section className="w-full bg-white py-12">
  <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        The <span className="text-[#1E5470]">SoftTech</span> advantage
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mt-2">
        We are dedicated to crafting an ideal user experience.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
      {/* Card 1 */}
      <article className="flex flex-col items-start text-start p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
        <div className="mb-4">
          <img
            src="https://i.ibb.co/yFR5VNNf/Group-325-dfb5de4668.webp"
            alt="Enterprise-grade experience"
            width={50}
            height={50}
            loading="lazy"
            className="mx-auto"
          />
        </div>
        <h3 id="enterprise-grade-experience" className="text-base sm:text-lg font-semibold text-gray-800">
          Enterprise-grade experience
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Our DevOps team has over a decade of experience developing and deploying complex enterprise-grade software.
        </p>
      </article>

      {/* Card 2 */}
      <article className="flex flex-col items-start text-start p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
        <div className="mb-4">
          <img
            src="https://i.ibb.co/99cH67sD/Group-464-58e84f222f.webp"
            alt="Agile approach"
            width={50}
            height={50}
            loading="lazy"
            className="mx-auto"
          />
        </div>
        <h3 id="agile-approach" className="text-base sm:text-lg font-semibold text-gray-800">
          Agile approach
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Our team is committed to following Agile methodologies, enabling us to execute large projects and provide excellent software quality.
        </p>
      </article>

      {/* Card 3 */}
      <article className="flex flex-col items-start text-start p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
        <div className="mb-4">
          <img
            src="https://i.ibb.co/xqw3JpGP/Group-465-320b28904e.webp"
            alt="Constant monitoring"
            width={50}
            height={50}
            loading="lazy"
            className="mx-auto"
          />
        </div>
        <h3 id="constant-monitoring" className="text-base sm:text-lg font-semibold text-gray-800">
          Constant monitoring
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Once your software is deployed, our DevOps team monitors it around the clock to catch and correct any problems before they affect your users.
        </p>
      </article>
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
  )
}

export default DevOps