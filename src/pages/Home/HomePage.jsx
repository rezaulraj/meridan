import React, { useEffect, useState } from "react";
import AI from "../../assets/11.jpg";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import graduated from "../../assets/university.png";
import shape from "../../assets/shape-28.png";
const HomePage = () => {
  const lists = [
    {
      list: "End-to-end support from the university to course selection and filing of scholarship and visa applications",
    },
    {
      list: "Personalised student-centred guidance",
    },
    {
      list: "Comprehensive assistance in crafting your profile",
    },
    {
      list: "Zero visa refusal commitment",
    },
    {
      list: "Global network of established connections with educational institutions",
    },
    {
      list: " In-house Coaching for IELTS, PTE, TOEFL, GRE, GMAT, SAT & ACT",
    },
  ];

  const stats = [
    {
      data: "10+",
      title: "Offices Worldwide",
    },
    {
      data: "100+",
      title: "Team Members",
    },
    {
      data: "10K+",
      title: "Success Stories",
    },
    {
      data: "5K+",
      title: "Preferred Courses",
    },
  ];

  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center py-16  px-2"
        style={{ backgroundImage: `url(${AI})` }}
      >
        <div className="max-w-screen-lg mx-auto">
          <div className="max-w-screen-sm space-y-10">
            <h1 className="text-5xl font-semibold font-oswald leading-15 tracking-wider  text-blue-dark">
              Awarded As The Best Study Abroad Consultant In India
            </h1>
            <p className="text-lg font-poppins text-gray-800 text-justify">
              Meridean Overseas offers a comprehensive solution for all your
              study abroad aspirations. Our dedicated overseas education
              consultants & professional coaches are committed to helping you
              navigate the complexities of your overseas education dream.
            </p>

            <button className="flex items-center gap-x-2 bg-blue-dark hover:scale-105 hover:bg-blue-dark/70 transition-transform duration-500 text-white text-[20px] font-poppins py-3 px-5">
              Book Free Session <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16 gap-8">
          <img src={graduated} alt="" />
          <div className="space-y-6 p-2">
            <h2 className="text-4xl font-bold font-poppins text-blue-dark">
              Fulfil Your Study Abroad Dream With Meridean Overseas
            </h2>
            <p className="text-gray-800 text-lg font-poppins text-justify">
              At Meridean Overseas, our expert study abroad consultants are your
              go-to guides for turning overseas education dreams into reality.
              From selecting the right university and course to scholarship &
              visa assistance and cultural adaptation, we have your back every
              step. Let's embark on this exciting adventure of overseas
              education together!
            </p>

            <ul className="space-y-3">
              {lists.map((list, inx) => (
                <li key={inx} className="space-y-3">
                  <span className="flex gap-4 font-poppins ">
                    <FaCheck className="text-blue-dark size-5" />
                    {list.list}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center py-16 px-2"
        style={{ backgroundImage: `url(${shape})` }}
      >
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl font-semibold font-oswald leading-15 tracking-wider  text-blue-dark">
              Our Customers Are Always Happy
            </h3>
          </div>
          <div className="mt-12">
            <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap">
              {stats.map((item, idx) => (
                <li key={idx} className="text-center px-12 md:px-16">
                  <h4 className="text-5xl text-blue-dark font-oswald font-bold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
