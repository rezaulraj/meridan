import React from "react";
import contact from "../../assets/ai/contact-img.webp";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div
      className="bg-cover bg-center py-16  px-2"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="max-w-screen-lg mx-auto overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
          <h1 className="col-span-5 text-3xl text-center md:text-5xl text-white font-bold font-oswald tracking-wider md:leading-20">
            Book Your Online Counselling Session
          </h1>
          <div className="col-span-7">
            <form className="py-4 px-4 bg-white space-y-2">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full border-b focus:outline-none border-gray-200 py-4"
                required
              />
              <div className="w-full flex items-center border-b border-gray-200 py-4">
                <select
                  name=""
                  id=""
                  className="focus:outline-none w-20 text-gray-600"
                >
                  <option value="+88">+88</option>
                  <option value="+66">+66</option>
                  <option value="+22">+22</option>
                </select>
                <input
                  type="number"
                  placeholder="WhatsApp Number (with country code)*"
                  className="w-full focus:outline-none px-2"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email*"
                required
                className="w-full border-b focus:outline-none border-gray-200 py-4"
              />
              <div className="w-full flex items-center border-b border-gray-200 py-4">
                <select
                  name=""
                  id=""
                  className="focus:outline-none w-full text-gray-600"
                >
                  <option>Current Study Level*</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
              <div className="w-full flex items-center border-b border-gray-200 py-4">
                <select
                  name=""
                  id=""
                  className="focus:outline-none w-full text-gray-600"
                >
                  <option>Preferred UK AI Specialization*</option>
                  <option value="machine-learning">Machine Learning</option>
                  <option value="computer-vision">Computer Vision</option>
                  <option value="nlp">NLP</option>
                  <option value="robotics">Robotics</option>
                  <option value="data-science">Data Science</option>
                </select>
              </div>
              <div className="w-full flex items-center border-b border-gray-200 py-4">
                <select
                  name=""
                  id=""
                  className="focus:outline-none w-full text-gray-600"
                >
                  <option>Ideal Start Date*</option>
                  <option value="jan-2025">Jan 2025</option>
                  <option value="sept-2025">Sept 2025</option>
                  <option value="jan-2026">Jan 2026</option>
                </select>
              </div>
              <div className="pt-2 flex items-start  gap-2">
                <input
                  type="checkbox"
                  className="border border-gray-200 w-5 h-5 focus:outline-none cursor-pointer"
                />
                <p className="text-gray-600 text-sm font-poppins">
                  I want scholarship updates for AI programs
                </p>
              </div>
              <div className="pt-2 flex items-start  gap-2">
                <input
                  type="checkbox"
                  className="border border-gray-200 w-5 h-5 focus:outline-none cursor-pointer"
                />
                <p className="text-gray-600 text-sm font-poppins">
                  Yes, I'd like a free{" "}
                  <a href="#" className="text-blue-500 px-1">
                    SOP
                  </a>
                  review
                </p>
              </div>
              <div className="pt-2 flex items-start  gap-2">
                <input
                  type="checkbox"
                  className="border border-gray-200 w-5 h-5 focus:outline-none cursor-pointer"
                />
                <p className="text-gray-600 text-sm font-poppins">
                  I consent to Aladdin's Privacy Policy
                </p>
              </div>

              <button className="mt-6 bg-blue-dark text-[16px] cursor-pointer shadow font-medium font-poppins text-white py-3 px-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
