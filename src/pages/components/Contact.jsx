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
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
          <h1 className="col-span-5 text-xl md:text-5xl text-white font-bold font-poppins tracking-wider md:leading-20">
            Book Your Online Counselling Session
          </h1>
          <div className="col-span-7">
            <form className="py-4 px-2 bg-white">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                placeholder="Name*"
                className="w-full border-b focus:outline-none border-gray-200 py-4"
                required
              />
              <div className="w-full flex items-center border-b border-gray-200 py-4">
                <select
                  name=""
                  id=""
                  className="focus:outline-none w-20 text-gray-600"
                >
                  <option value="+99">+99</option>
                  <option value="66">66</option>
                  <option value="88">88</option>
                </select>
                <input
                  type="number"
                  placeholder="Mobile Number*"
                  className="w-full focus:outline-none px-2"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address*"
                required
                className="w-full border-b focus:outline-none border-gray-200 py-4"
              />
              <input
                type="email"
                placeholder="State,City*"
                required
                className="w-full border-b focus:outline-none border-gray-200 py-4"
              />

              <div className="w-full flex items-center border-b border-gray-200 py-4">
                <select
                  name=""
                  id=""
                  className="focus:outline-none w-6/12 text-gray-600"
                >
                  <option>Select Time</option>
                  <option value="10:00AM">10:00AM</option>
                  <option value="11:00AM">11:00AM</option>
                  <option value="12:00PM">12:00PM</option>
                </select>
                <select
                  name=""
                  id=""
                  className="focus:outline-none w-6/12 text-gray-600"
                >
                  <option>Preferred Study Destination</option>
                  <option value="usa">USA</option>
                  <option value="australia">Australia</option>
                  <option value="norway">Norway</option>
                </select>
              </div>
              <div className="pt-2 flex items-start  gap-2">
                <input
                  type="checkbox"
                  className="border border-gray-200 w-5 h-5 focus:outline-none cursor-pointer"
                />
                <p className="text-gray-600 text-sm">
                  Keep me informed of scholarship news and special offers. By
                  clicking submit.I agree to MOEC{" "}
                  <Link className="text-blue-dark/95">Terms</Link> and{" "}
                  <Link className="text-blue-dark/95">privacy policy</Link>
                </p>
              </div>

              <button className="mt-6 bg-blue-dark text-[16px] font-medium font-poppins text-white py-3 px-5">
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
