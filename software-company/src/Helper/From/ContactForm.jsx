/** @format */

import { useEffect, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    number: "",
    message: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters long.";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address.";

    if (!formData.service) newErrors.service = "Please select a service.";

    if (!/^\d{11,}$/.test(formData.number))
      newErrors.number = "Phone number must be at least 11 digits."

    if (formData.message.length > 500)
      newErrors.message = "Message cannot exceed 500 characters.";

    if (!formData.budget) newErrors.budget = "Please select a budget.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const formDataObj = new FormData();
    formDataObj.append("access_key", "276695ce-1e44-4cb0-bc1f-df51e6a92587");
    Object.entries(formData).forEach(([key, value]) =>
      formDataObj.append(key, value)
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const result = await response.json();

    if (result.success) {
      setSuccess("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        service: "",
        number: "",
        message: "",
        budget: "",
      });
    } else {
      setSuccess("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className=" p-6">
      {success && (
        <p
          className={`text-center text-sm font-medium ${
            success.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {success}
        </p>
      )}
      <h3 className="text-xl font-semibold text-[#53aedb] mb-3">
        Have Questions? Lets Talk.
      </h3>
      <p className="text-[#151517] mb-6">
        We have got the answers to your questions.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-6">
  {/* Name Input */}
  <div className="w-full sm:w-1/2">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="w-full p-2 border rounded px-4 py-2 focus:outline-blue-950 text-black"
      value={formData.name}
      onChange={handleChange}
    />
    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
  </div>

  {/* Email Input */}
  <div className="w-full sm:w-1/2">
    <input
      type="email"
      name="email"
      placeholder="Email"
      className="w-full p-2 border rounded px-4 py-2 focus:outline-blue-950 text-black"
      value={formData.email}
      onChange={handleChange}
    />
    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
  </div>
</div>


        <div className="mb-4">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="" className="text-gray-400">
              Select your best service
            </option>
            <option value="UX, Product and Design">
              UX, Product and Design
            </option>
            <option value="Backend Development Services">
              Backend Development Services
            </option>
            <option value="Frontend Development Services">Frontend Development Services</option>
            <option value="Custom Software Development">
              Custom Software Development
            </option>
            <option value="QA and Software Testing">QA and Software Testing</option>
            <option value="SAAS Development Services">
              SAAS Development Services
            </option>
            <option value="MVP for Startups">
              MVP for Startups
            </option>
            <option value="Software Consulting Services">
              Software Consulting Services
            </option>
            <option value="Enterprise Software Development">
              Enterprise Software Development
            </option>
            <option value="Web Scraping Services">
              Web Scraping Services
            </option>
          </select>

          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>

        <div className="w-full">
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              className="w-full p-2 border rounded px-4 py-2 focus:outline-blue-950 text-black"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
          </div>

          <div>
          <label className="block text-sm font-medium text-gray-500">
            Please your describe your project?
          </label>
          <textarea
            name="message"
            className="w-full p-2 border rounded resize-none px-4 py-2 focus:outline-blue-950 text-black"
            placeholder="Details?"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <div className="mb-4">
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="" className="text-gray-400">
              What is your budget?
            </option>
            <option value="Less than USD 50,000">
              Less than USD 50,000
            </option>
            <option value="USD 50,000 - USD 100,000">
              USD 50,000 - USD 100,000
            </option>
            <option value="USD 100,000 - USD 200,000">USD 100,000 - USD 200,000</option>
            <option value="USD 200,000 - USD 500,000">
              USD 200,000 - USD 500,000
            </option>
            <option value="Above USD 500,000">Above USD 500,000</option>
          </select>

          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-24 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
