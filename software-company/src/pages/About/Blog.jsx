/** @format */

import { ArrowRight } from 'lucide-react';
import ButtonFill from '../../Button/ButtonFill'
import { blogs } from "../../Data/About/blog";

const Blog = () => {
  return (
    <>
      {/* hero section */}
      <section className="w-full min-h-[340px] bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden py-12 pb-12">
        <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-12 h-full">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#53aedb]">
              Google I/O 2025 – Google Just Went All-In on AI
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              From AI-generated films to coding agents: Google’s I/O 2025 bets
              big on AI. Discover how AI is reshaping work, creativity, and what
              it costs you...
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
              src="https://d1foa0aaimjyw4.cloudfront.net/Transparent_Bg_d5e06af997.png"
              alt="Google I/O 2025 AI"
              loading="lazy"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </section>

    {/* blog box section */}
      <section className="py-16 bg-[#f8f8f6]">

        <h2 className='text-black text-[35px] m-6 flex items-center gap-2 hover:underline hover:text-[#53aedb] cursor-pointer'><ArrowRight/> Lastest Blogs</h2>

        <div className="container mx-auto px-4 text-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-14">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.href}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                <figure className="w-full h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </figure>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <time className="block text-sm text-[#024751] mb-2">
                      {blog.date}
                    </time>
                    <h4 className="text-lg font-semibold text-[#151517] hover:text-[#53aedb] mb-2">
                      {blog.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{blog.desc}</p>
                  </div>
                  <div className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Read more
                    <svg
                      className="ml-2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 10H2.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.5 5L17.5 10L12.5 15"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className='text-center'>
          <a href="/">
          <ButtonFill>Load More</ButtonFill>
          </a>
        </div>
      </section>
    </>
  );
};

export default Blog;
