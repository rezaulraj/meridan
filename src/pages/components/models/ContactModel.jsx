import React from "react";
import { Link } from "react-router-dom";

const ContactModel = ({ setContactOpen }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 font-poppins"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-screen-sm w-full p-6">
        <div className="rounded-lg bg-white shadow-lg ">
          <div className="relative">
            <h2
              id="modalTitle"
              className="text-xl font-bold text-blue-dark sm:text-2xl p-6 text-center"
            >
              Contact Aladdin Group Experts for Study Abroad Guidance
            </h2>

            <button
              onClick={() => setContactOpen(false)}
              type="button"
              className="absolute -right-5 -top-5 bg-gray-300 text-gray-900 rounded-full p-2 transition-colors hover:bg-red-300 hover:text-gray-600 focus:outline-none"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form className="py-4 px-2">
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
                className="focus:outline-none w-42 text-gray-600"
              >
                <option>Country Code</option>
                <option value="91">+91</option>
                <option value="92">+92</option>
                <option value="88">+88</option>
                <option value="86">+86</option>
              </select>
              <input
                type="number"
                placeholder="Phone Number*"
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
                <option value="uk">United Kingdom (exclusive focus)</option>
                <option value="australia">Australia</option>
                <option value="norway">Norway</option>
              </select>
            </div>

            <div className="mt-4 flex items-start  gap-2">
              <input
                type="checkbox"
                className="border border-gray-200 w-5 h-5 focus:outline-none cursor-pointer"
              />
              <p className="text-gray-600 text-sm">
                Keep me informed of scholarship news and special offers.
              </p>
            </div>
            <div className="pt-2 flex items-start  gap-2">
              <input
                type="checkbox"
                className="border border-gray-200 w-5 h-5 focus:outline-none cursor-pointer"
              />
              <p className="text-gray-600 text-sm">
                By clicking submit, I agree to Aladdin Group’s
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
  );
};

export default ContactModel;
