/** @format */

import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    type: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!/^\d{11,}$/.test(formData.number)) {
      newErrors.number = "Enter a valid number (min 11 digits).";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.type || formData.type.length < 3) {
      newErrors.type = "Please describe your problem briefly.";
    }

    if (formData.message.length < 5 || formData.message.length > 1000) {
      newErrors.message = "Message must be between 5 and 1000 characters.";
    }

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
      setFormData({ name: "", email: "", number: "", type: "", message: "" });
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
    <>
      {/* header section */}
      <section className="w-full contact-bg min-h-[140px] bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden py-12 pb-12">
        <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-12 h-full">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Let’s Talk Business
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Whether you’re looking to build something new and exciting or need
              our help with an ongoing project, we’ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* contact from */}

      <section className="bg-[#f3f2f2] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 bg-white p-8 rounded-xl shadow-lg text-white">
            <div className="w-full lg:w-1/2">
              <aside className="flex-1 mt-12 md:mt-0 space-y-8">
                <h2 className="text-2xl font-bold tracking-wide text-[#1E5470]">
                  You’re in good company
                </h2>

                <div className=" gap-8">
                  {/* <!-- Each item --> */}
                  {/* box 1 */}
                  <div className="bg-[#FFE4D0] hover:border-l-green-500 hover:border-l-2 border border-gray-300 rounded-lg p-4 shadow-sm w-full max-w-xs">
                    <div className="flex flex-col items-start space-y-1">
                      <div className="flex items-center space-x-3">
                        {/* <!-- Icon example (use your actual icons here) --> */}
                        <p className="uppercase font-semibold text-sm tracking-wider text-[#1E5470]">
                          1+ years of Excellence
                        </p>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Proven expertise, unmatched results
                      </p>
                    </div>
                  </div>

                  {/* box 2 */}
                  <div className="bg-[#FFF0B5]   hover:border-r-yellow-500 hover:border-r-2 border border-gray-300 rounded-lg p-4 shadow-sm w-full max-w-xs m-6">
                    <div className="flex flex-col items-start space-y-1">
                      <div className="flex items-center space-x-3">
                        {/* <!-- Icon example (use your actual icons here) --> */}
                        <p className="uppercase font-semibold text-sm tracking-wider text-[#1E5470]">
                          5+ Projects Completed
                        </p>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Delivering project success no matter what
                      </p>
                    </div>
                  </div>

                  {/* box 3 */}
                  <div className="bg-[#89d6e2] hover:border-l-blue-500 hover:border-l-2 border border-gray-300 rounded-lg p-4 shadow-sm w-full max-w-xs">
                    <div className="flex flex-col items-start space-y-1">
                      <div className="flex items-center space-x-3">
                        {/* <!-- Icon example (use your actual icons here) --> */}
                        <p className="uppercase font-semibold text-sm tracking-wider text-[#1E5470]">
                          3+ specialists
                        </p>
                      </div>
                      <p className="text-gray-700 text-sm">
                        The experts behind your next breakthrough
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-[#131418] rounded-xl shadow-lg p-8 text-black">
                {success && (
                  <p
                    className={`text-center text-sm font-medium ${
                      success.includes("successfully")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {success}
                  </p>
                )}
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Your Email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-4">
                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Number
                      </label>
                      <input
                        type="tel"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Your Number"
                      />
                      {errors.number && (
                        <p className="text-red-500 text-sm">{errors.number}</p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Your Service Type
                      </label>
                      <input
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Service Name"
                      />
                      {errors.type && (
                        <p className="text-red-500 text-sm">{errors.type}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      placeholder="please describe your project?"
                      rows="4"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full font-semibold bg-[#00D47E] text-white py-2 rounded hover:bg-[#4ed39e] transition"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
