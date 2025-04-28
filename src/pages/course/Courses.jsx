import React, { useEffect, useState } from "react";
import AI from "../../assets/ai/aifront.png";
import FqsList from "../components/FqsList";
const Courses = () => {
  const homeData = [
    {
      title: "Overview",
      link: "#overview",
    },
    {
      title: "Artificial Intelligence Courses in Abroad - Important Highlights",
      link: "#highlights",
    },
    {
      title: "Why Study Artificial Intelligence Courses in the UK?",
      link: "#study",
    },
    {
      title: "Entry Requirements for AI Programs in the UK",
      link: "#eligibility",
    },
    {
      title: "Artificial Intelligence Courses in Abroad Universities",
      link: "#universities",
    },
    {
      title: "List of Artificial Intelligence Courses in the UK",
      link: "#list",
    },
    {
      title: "Artificial Intelligence Course Fees and Living Costs in Abroad",
      link: "#living",
    },
    {
      title: "Student Visa Cost for Artificial Intelligence Courses in the UK",
      link: "#visa",
    },
    {
      title: "Scholarships for Artificial Intelligence Courses in the UK",
      link: "#scholarships",
    },
    {
      title: "Salary after Artificial Intelligence Courses in the UK",
      link: "#salary",
    },
    {
      title: "Final Considerations",
      link: "#conclusion",
    },
    {
      title: "FAQs",
      link: "#FAQs",
    },
  ];

  const highlightData = [
    {
      particular: "Course Name",
      statistic: "Artificial Intelligence (AI)",
    },
    {
      particular: "Total AI Course Universities",
      statistic: "50+ in UK",
    },
    {
      particular: "Top Careers After AI",
      statistic:
        "AI Engineer, Robotics Scientist, Machine Learning Specialist, Data Scientist, NLP Researcher",
    },
    {
      particular: "Exams Required",
      statistic: "IELTS, PTE, TOEFL, Duolingo (UKVI-approved)",
    },
    {
      particular: "Average UK Visa Cost",
      statistic: "£363 (Student Visa) + £490/year (IHS Surcharge)",
    },
    {
      particular: "Scholarships",
      statistic:
        "Chevening Scholarships, GREAT Scholarships, Commonwealth Scholarships, University-specific AI bursaries",
    },
    {
      particular: "Top UK Universities",
      statistic:
        "University of Cambridge, University of Oxford, Imperial College London, University of Edinburgh, UCL",
    },
  ];

  const aiRankingUnivercity = [
    {
      univercity: "University of Cambridge",
      program: "MPhil in Machine Learning and Machine Intelligence",
      duration: "11 months",
      free: "£32,405",
    },
    {
      univercity: "University of Oxford",
      program: "MSc in Advanced Computer Science (AI specialisation)",
      duration: "11 months",
      free: "£32,405",
    },
    {
      univercity: "University of Oxford",
      program: "Oxford, United Kingdom",
      duration: "1 year",
      free: "Varies",
    },
    {
      univercity: "University College London (UCL)",
      program: "Robotics and Artificial Intelligence MEng",
      duration: "4 years",
      free: "£38,300",
    },
    {
      univercity: "University of Edinburgh",
      program: "MSc Artificial Intelligence; BSc Artificial Intelligence",
      duration: "1-4 years",
      free: "£32,200 (BSc)",
    },
    {
      univercity: "University of Manchester",
      program: "MSc Artificial Intelligence",
      duration: "1 year",
      free: "Varies",
    },

    {
      univercity: "University of St Andrews",
      program: "MSc Artificial Intelligence",
      duration: "1 year",
      free: "Varies",
    },
    {
      univercity: "City, University of London",
      program: "MSc Artificial Intelligence",
      duration: "1 year",
      free: "Varies",
    },
    {
      univercity: "University of Sheffield",
      program: "BSc Computer Science (Artificial Intelligence)",
      duration: "3 years",
      free: "£26,950",
    },
    {
      univercity: "Queen Mary University of London",
      program: "BSc/MSc in Computer Science and Artificial Intelligence",
      duration: "3-4 years",
      free: "£26,250–£28,950",
    },
  ];

  const quRankingSub = [
    {
      univercity: "University of Cambridge",
      country: "Cambridge, UK",
      quRank: "3",
    },
    {
      univercity: "University of Oxford",
      country: "Oxford, UK",
      quRank: "4",
    },
    {
      univercity: "Imperial College London",
      country: "London, UK",
      quRank: "6",
    },
    {
      univercity: "The University of Manchester",
      country: "Manchester, UK",
      quRank: "32",
    },
  ];

  const listAi = [
    {
      list: "Human-Computer Interaction",
    },
    {
      list: "Machine Learning & Autonomous Systems",
    },
    {
      list: "AI & Computer Science",
    },
    {
      list: "AI & Data Science",
    },
    {
      list: "Control Systems & AI (with Industry Placements)",
    },
    {
      list: "Ethical AI & Biosciences",
    },
    {
      list: "Human-Centred Big Data",
    },
    {
      list: "Financial Intelligence & AI",
    },
  ];

  const scholarship = [
    {
      list: "The DeepMind Scholarship",
    },
    {
      list: "Dean Benson Scholarship",
    },
    {
      list: "£10,000 OfS Conversion MSc Scholarships",
    },
    {
      list: "Manju Mehrotra Scholarship",
    },

    {
      list: "Aziz Foundation Scholarship",
    },

    {
      list: "Cardiff India scholarships",
    },
  ];

  const criteria = [
    {
      list: " Eligibility criteria",
    },
    {
      list: "Top AI courses & specializations",
    },
    {
      list: "Tuition fees & scholarships",
    },
    {
      list: "Best universities for AI",
    },
    {
      list: "Career prospects & salaries",
    },
  ];

  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      homeData.forEach((data) => {
        const sectionId = data.link.slice(1);
        const section = document.getElementById(sectionId);
        if (section && !found) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveLink(sectionId);
            found = true;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <section>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Main Content (left side) */}
          <div className="hidden w-72 flex-shrink-0 md:block space-y-3 bg-white text-gray-800">
            <div className="sticky top-4">
              <ul className="border border-gray-300 divide-y divide-gray-300 shadow-md">
                {homeData.map((data, indx) => {
                  const sectionId = data.link.slice(1);
                  return (
                    <li
                      key={indx}
                      className={`p-2 ${
                        activeLink === sectionId
                          ? "bg-blue-dark text-white"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      <a
                        href={data.link}
                        className={`font-poppins ${
                          activeLink === sectionId ? "" : "hover:text-gray-900"
                        }`}
                      >
                        {data.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Sidebar Links (right side) */}
          <div className=" flex-1">
            <div className="sticky top-4 p-4 space-y-8">
              <h1 className="text-2xl md:text-4xl font-bold text-blue-dark font-poppins">
                International Artificial Intelligence Education Programs
              </h1>
              <img src={AI} alt="" />
              {/* part one */}
              <div id="overview">
                <h1 className="text-blue-dark text-xl md:text-3xl font-bold font-poppins">
                  Overview
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Artificial Intelligence (AI) has emerged as a revolutionary
                  field with the power to transform industries worldwide. As
                  demand for skilled AI professionals surges, pursuing
                  Artificial Intelligence courses abroad has become a top choice
                  for students seeking world-class education and global
                  exposure.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  Studying AI abroad opens doors to lucrative career
                  opportunities, cutting-edge research, and access to
                  prestigious institutions. Whether you're looking for AI
                  courses after 12th or advanced specializations, international
                  education provides unparalleled advantages in this
                  fast-growing field.
                </p>
                <p className="text-xl text-gray-800 font-poppins font-semibold">
                  This guide explores everything you need to know about studying
                  Artificial Intelligence abroad, including:
                </p>
                <div>
                  <ul className="space-y-2 px-4">
                    {criteria.map((list, idx) => (
                      <li
                        key={idx}
                        className="font-poppins text-lg text-gray-800 flex"
                      >
                        <span className="text-blue-dark pr-2">✔</span>{" "}
                        {list.list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* part two */}
              <div>
                <h1
                  id="highlights"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Global Opportunities in AI Education
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  There are 150+ universities abroad that offer Artificial
                  Intelligence courses. These universities do not have any
                  specific requirements except common criteria.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  Candidates who want to study in AI Courses after 12th can
                  check the important highlights of the course below.
                </p>

                <div className="mt-12 border-l border-r border-b border-gray-300 overflow-x-auto">
                  <div className="bg-red-primary w-full p-2">
                    <h3 className="text-white text-xl font-bold font-poppins">
                      Artificial Intelligence Courses Abroad Highlights
                    </h3>
                  </div>
                  <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-300">
                      <tr className="divide-x divide-gray-300">
                        <th className="py-3 px-6 font-poppins font-bold">
                          Particulars
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          Statistics (UK Focus)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y divide-gray-300">
                      {highlightData.map((data, idx) => (
                        <tr className="divide-x divide-gray-300" key={idx}>
                          <td className="px-2 py-2 font-poppins">
                            {data.particular}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.statistic}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* part three */}
              <div>
                <h1
                  id="study"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Why Study Artificial Intelligence Courses in the UK?
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Enrolling in artificial intelligence programs abroad provides
                  significant benefits for future AI specialists. Below are key
                  reasons why undertaking AI studies after 12th grade in
                  international destinations is a strategic decision.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Academic Excellence:
                  </span>
                  Leading UK universities are globally recognized for their AI
                  innovation and teaching standards. Partnering with Aladdin
                  Group, students gain access to world-class faculty,
                  participate in groundbreaking research, and utilize
                  state-of-the-art methodologies.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Advanced Facilities:
                  </span>
                  UK institutions often feature specialized AI labs,
                  high-performance computing systems, and industry partnerships.
                  These resources elevate learning experiences and enable
                  hands-on work with real-world AI applications.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Career Advancement:
                  </span>
                  Obtaining an AI qualification from a top UK university expands
                  job prospects. Graduates develop a competitive edge, accessing
                  global networks and opportunities with leading AI
                  organizations that prioritize UK-trained professionals.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Innovative Learning Environments:
                  </span>{" "}
                  The UK’s dynamic AI landscape exposes students to diverse
                  methodologies and emerging trends, fostering adaptable
                  problem-solving skills and cross-disciplinary expertise.
                </p>
              </div>

              {/* part four */}
              <div>
                <h1
                  id="eligibility"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Entry Requirements for AI Programs in the UK
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  The eligibility criteria for Artificial Intelligence Courses
                  in the UK may vary by institution. However, there are certain
                  universal requirements for pursuing AI studies:
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Educational Background:
                  </span>
                  A 12th-grade qualification and a bachelor's degree in a
                  relevant subject, such as computer science, engineering,
                  mathematics, or statistics, are often prerequisites for
                  admission to AI courses. Some universities may admit students
                  with prior coursework or work experience in AI-related fields.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Letters of Recommendation:
                  </span>
                  Universities often ask for letters of recommendation from
                  professors or professionals who can vouch for the applicant's
                  academic capabilities and potential.
                </p>

                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Statement of Purpose:
                  </span>
                  A compelling
                  <a href="#" className="text-blue-500 px-1">
                    statement of purpose
                  </a>
                  outlining the student's motivations, career aspirations, and
                  alignment with the chosen AI program is a crucial part of the
                  application process.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  It is essential to review the specific eligibility criteria
                  for each UK university and programme of interest, as they may
                  differ.
                </p>
              </div>

              {/* part five */}
              <div>
                <h1
                  id="universities"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Artificial Intelligence Courses in Abroad Universities
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>

              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  When it comes to studying artificial intelligence in the UK,
                  several universities stand out for their outstanding
                  programmes, research excellence, and industry connections.
                  These institutions provide students with the advanced
                  knowledge and practical skills needed to excel in the field of
                  AI.
                </p>

                <div className="mt-12 border-l border-r border-b border-gray-300 overflow-x-auto">
                  <div className="bg-red-primary w-full p-2">
                    <h3 className="text-white text-lg md:text-xl font-bold font-poppins">
                      Top UK Universities for Artificial Intelligence Courses
                    </h3>
                  </div>
                  <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-300">
                      <tr className="divide-x divide-gray-300">
                        <th className="py-3 px-6 font-poppins font-bold">
                          University
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          Notable AI Programme(s)
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          Typical Duration
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          Indicative Fees (International)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y divide-gray-300">
                      {aiRankingUnivercity.map((data, idx) => (
                        <tr className="divide-x divide-gray-300" key={idx}>
                          <td className="px-2 py-2 font-poppins font-medium text-sm">
                            {data.univercity}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.program}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.duration}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.free}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-12 border-l border-r border-b border-gray-300 overflow-x-auto">
                  <div className="bg-red-primary w-full p-2">
                    <h3 className="text-white text-lg md:text-lg font-semibold md:font-bold font-poppins">
                      Artificial Intelligence Courses After 12th Abroad: Top UK
                      Universities (QS Subject Rankings)
                    </h3>
                  </div>
                  <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-300">
                      <tr className="divide-x divide-gray-300">
                        <th className="py-3 px-6 font-poppins font-bold">
                          University Name
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          Location
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          QS World University Rankings by Subject 2023
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y divide-gray-300">
                      {quRankingSub.map((data, idx) => (
                        <tr className="divide-x divide-gray-300" key={idx}>
                          <td className="px-2 py-2 font-poppins font-medium text-sm">
                            {data.link ? (
                              <a href="#" className="text-blue-500">
                                {data.univercity}
                              </a>
                            ) : (
                              data.univercity
                            )}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.country}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.quRank}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* part six */}
              <div>
                <h1
                  id="list"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  List of Artificial Intelligence Courses in Abroad
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Students who study artificial intelligence in abroad countries
                  have access to a diverse range of courses tailored to their
                  unique interests and professional aspirations. Candidates can
                  study in artificial intelligence courses at any level, such as
                  bachelor’s, master’s, PG diploma, etc.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  Here is a list of popular Artificial Intelligence Subjects
                  available at institutions throughout the world.
                </p>
                <div>
                  <ul
                    className="space-y-2 px-4"
                    style={{ listStyle: "square" }}
                  >
                    {listAi.map((list, idx) => (
                      <li
                        key={idx}
                        className="font-poppins text-lg text-gray-800 marker:text-blue-dark"
                      >
                        {list.list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* part seven */}
              <div>
                <h1
                  id="living"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Artificial Intelligence Course Fees and Living Costs in Abroad
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>

              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Understanding the tuition fees and living expenses is
                  essential for budgeting when thinking about studying
                  artificial intelligence courses in other countries. Tuition
                  and living expenses may differ greatly depending on the
                  nation, university, and locality.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  An analysis of artificial intelligence course fees and living
                  expenses in well-liked study locations is shown below.
                </p>
                <h2 className="font-bold text-xl text-gray-800 font-poppins">
                  Artificial Intelligence Course Fee & Living Expenses in United
                  States (USA)
                </h2>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Tuition Fees -
                  </span>
                  The tuition fees for AI courses after 12th or bachelor’s in
                  the USA can range from $20,000 to $40,000 per year, depending
                  on the university and program level. Public universities
                  generally have lower tuition fees for in-state residents than
                  international students. It may be possible that Private
                  universities & some prestigious institutions have higher fees
                  than public institutions.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Living Costs -
                  </span>
                  The average living costs, including accommodation, food,
                  transportation, and other expenses, can range from $8,000 to
                  $18,000 per year. Living costs vary significantly depending on
                  the location, with cities like New York and San Francisco
                  being more expensive than smaller college towns.
                </p>

                <h2 className="font-bold text-xl text-gray-800 font-poppins">
                  Artificial Intelligence Course Fee & Living Expenses in the
                  United Kingdom (UK)
                </h2>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Tuition Fees -
                  </span>
                  While studying{" "}
                  <a href="#" className="text-blue-500 px-1">
                    Artificial Intelligence in the UK
                  </a>
                  , tuition fees for AI programs vary between £15,000 and
                  £30,000 per year for international students. Tuition fees may
                  be higher for prestigious universities or specialized AI
                  programs.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Living Costs -
                  </span>
                  The average living costs, including accommodation, food,
                  transportation, and other expenses, can range from $8,000 to
                  $18,000 per year. Living costs vary significantly depending on
                  the location, with cities like New York and San Francisco
                  being more expensive than smaller college towns.
                </p>

                <h2 className="font-bold text-xl text-gray-800 font-poppins">
                  Artificial Intelligence Course Fee & Living Expenses in
                  Australia
                </h2>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Tuition Fees -
                  </span>
                  Australian universities offer AI courses with tuition fees
                  ranging from AUD 30,000 to AUD 60,000 annually for
                  international students. Tuition fees may be higher for
                  postgraduate programs or specialized AI courses.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Living Costs -
                  </span>
                  The living costs in{" "}
                  <a href="#" className="text-blue-500 px-1">
                    Australia
                  </a>{" "}
                  can vary depending on the city and lifestyle. On average,
                  students should budget around AUD 21,041 per year for
                  accommodation, food, transportation, and other expenses.
                </p>

                <h2 className="font-bold text-xl text-gray-800 font-poppins">
                  Artificial Intelligence Course Fee & Living Expenses in Canada
                </h2>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Tuition Fees -
                  </span>
                  In Canada, tuition fees for Artificial Intelligence courses
                  for international students range from CAD 15,000 to CAD 40,000
                  per year. Tuition fees may vary based on the university and
                  program level.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Living Costs -
                  </span>
                  The living costs in Canada vary depending on the province and
                  city. Students should plan to spend between CAD 10,000 and CAD
                  15,000 per year on living expenses, food, transportation, and
                  personal expenses.
                </p>

                <h2 className="font-bold text-xl text-gray-800 font-poppins">
                  Artificial Intelligence Course Fee & Living Expenses in New
                  Zealand
                </h2>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Tuition Fees -
                  </span>
                  In New Zealand, tuition fees for international students
                  pursuing AI courses range from NZD 30,000 to NZD 50,000 per
                  year. Tuition fees may vary based on the university and
                  program level.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Living Costs -
                  </span>
                  The average living costs in New Zealand range is NZD 20,000
                  per year. This will include housing (rent), food,
                  transportation, & other expenses.
                </p>

                <h2 className="font-bold text-xl text-gray-800 font-poppins">
                  Artificial Intelligence Course Fee & Living Expenses in Europe
                </h2>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Tuition Fees -
                  </span>
                  Tuition fees in European countries such as Germany, France,
                  Netherlands, and Sweden vary significantly. In general,
                  tuition fees for international students range from EURO 1500
                  to EURO 8,000 per year, depending on the country and
                  university.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Living Costs -
                  </span>
                  Living costs in Europe can vary greatly depending on the
                  country and city. On average, students should budget
                  approximately EURO 6,000 to EURO 8,000 per year for
                  accommodation, food, transportation, and other expenses.
                </p>

                <p className="text-lg text-gray-800 font-poppins">
                  It’s important to verify the Artificial Intelligence Course
                  Fee before applying. For this, you can discuss with our
                  counsellors. They will guide you in every step of your abroad
                  journey and provide you with all the study
                  <a href="#" className="text-blue-500 px-1">
                    abroad
                  </a>
                  information.
                </p>
              </div>

              {/* part eight */}
              <div>
                <h1
                  id="visa"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Student Visa Cost for Artificial Intelligence Courses
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  To study artificial intelligence subjects abroad, getting a
                  student visa is crucial. The cost of a visa varies by nation
                  and length of study. Here is a detail of student visa fees for
                  well-known study abroad locations.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    United States (USA) :
                  </span>
                  The application fee for an{" "}
                  <a href="#" className="text-blue-500 px-1">
                    F-1 student visa in the USA
                  </a>
                  is currently $350. The USA also has a SEVIS fee (Student and
                  Exchange Visitor Information System) of $185 to get a student
                  visa.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    United Kingdom (UK) :
                  </span>
                  The visa application fee for a Tier 4{" "}
                  <a href="#" className="text-blue-500 px-1">
                    student visa in the UK
                  </a>
                  varies depending on the location. As of the current criteria,
                  the fee is approximately £348 for applications made outside
                  the{" "}
                  <a href="#" className="text-blue-500 px-1">
                    UK
                  </a>
                  . International students have to pay £470 per year for the
                  Immigration Health Surcharge (IHS). It is necessary for all
                  overseas students.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Australia :
                  </span>{" "}
                  The base application fee for a student visa in Australia is
                  AUD 715. Additional charges may apply for family members
                  included in the application.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">Canada :</span>
                  The application fee for a study permit in Canada is CAD 150.
                  In addition, there may be biometric fees of CAD 85.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">Europe:</span>
                  <a href="#" className="text-blue-500 px-1">
                    European countries
                  </a>{" "}
                  within the Schengen Area generally require a Schengen student
                  visa. The application fee for a Schengen student visa is
                  approximately from EURO 90 to EURO 150. However, visa
                  requirements and costs can vary among European countries.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    New Zealand :
                  </span>
                  The application fee for a student visa in New Zealand varies
                  depending on the applicant's country of citizenship. As per
                  the government criteria, the fee range is NZD 375.
                </p>
              </div>

              {/* part ning */}
              <div>
                <h1
                  id="scholarships"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Scholarships for Artificial Intelligence Courses Abroad
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  It might be expensive to study artificial intelligence
                  subjects abroad, but there are several scholarships and
                  financing options available to assist international students.
                  Many colleges, governmental agencies, and private
                  organisations provide these scholarships.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  The following scholarships concentrate on artificial
                  intelligence or related fields. It is vital to remember that
                  there might be differences in these scholarship availability
                  and qualifying requirements. In order to obtain comprehensive
                  information and submit applications for scholarships that are
                  appropriate for their academic standing and financial
                  requirements, prospective students should do extensive
                  research or talk to our certified counselors.
                </p>
                <div>
                  <ul
                    className="space-y-2 px-4"
                    style={{ listStyle: "square" }}
                  >
                    {scholarship.map((list, idx) => (
                      <li
                        key={idx}
                        className="font-poppins text-lg text-gray-800 marker:text-blue-dark"
                      >
                        {list.list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* part ten */}
              <div>
                <h1
                  id="salary"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Salary after Artificial Intelligence Courses Abroad
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Studying Artificial Intelligence courses abroad can open up
                  doors to lucrative careers and market-leading pay. The
                  earnings in the field of artificial intelligence vary based on
                  the nation, job title, work experience, and sector.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  The wages indicated below are estimates that may change
                  depending on a variety of circumstances. AI experts are more
                  likely to make more money if they have graduate degrees,
                  professional certifications, research experience, and
                  knowledge in niche fields like machine learning, natural
                  language processing, or robotics.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  The following details provide an overview of AI professionals’
                  salaries in well-known study locations.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="text-gray-700 font-bold font-poppins pr-1">
                    United States:
                  </span>
                  According to the U.S. Bureau of Labor Statistics, the annual
                  wage for computer and information research scientists, which
                  includes AI professionals, is around $125,000. However, AI
                  professionals with advanced degrees, industry experience, and
                  expertise in specialized areas can earn significantly higher
                  salaries, reaching six figures or more.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="text-gray-700 font-bold font-poppins pr-1">
                    United Kingdom:
                  </span>
                  In the UK, AI professionals' salaries vary based on factors
                  such as job role, industry, and location. According to the
                  Office for National Statistics, the annual salary for IT and
                  telecommunications professionals is an average of £50,000.
                  However, AI specialists with advanced qualifications and
                  expertise can command higher salaries, especially in the
                  finance, healthcare, and technology sectors.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="text-gray-700 font-bold font-poppins pr-1">
                    Australia:
                  </span>
                  AI professionals in Australia generally earn competitive
                  salaries. According to the Australian Government's Job
                  Outlook, the annual salary for ICT professionals, including
                  those specializing in AI, is around AUD 90,000. However,
                  salaries can vary depending on factors such as qualifications,
                  experience, and the specific industry.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="text-gray-700 font-bold font-poppins pr-1">
                    Canada:
                  </span>
                  Salaries for AI professionals in Canada are influenced by
                  factors such as the industry, location, and level of
                  expertise. According to the Government of
                  <a href="#" className="text-blue-500 ">
                    Canada
                  </a>
                  's Job Bank, the salary for AI professionals is an average of
                  CAD 45.65 per hour.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="text-gray-700 font-bold font-poppins pr-1">
                    New Zealand:
                  </span>
                  The salaries for AI professionals in
                  <a href="#" className="text-blue-500 px-1">
                    New Zealand
                  </a>
                  can vary depending on factors such as qualifications,
                  experience, and industry demand. According to Careers New
                  Zealand, the annual salary for ICT professionals, including
                  those specializing in AI, is around NZD 80,000 to NZD 100,000.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="text-gray-700 font-bold font-poppins pr-1">
                    Europe:
                  </span>
                  Salaries for AI professionals in Europe can vary greatly among
                  countries and industries. For example, in Germany, AI
                  professionals can earn salaries ranging from €50,000 to
                  €100,000 or more, depending on their qualifications and
                  experience.
                </p>
              </div>
              {/* part eleven */}
              <div>
                <h1
                  id="conclusion"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Conclusion
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Aside from exposure to famous universities, various learning
                  environments, cutting-edge facilities, and increased
                  employment chances, studying artificial intelligence courses
                  abroad has several advantages. While the price of an education
                  in AI courses after 12th and daily living expenditures differ
                  depending on where a student chooses to study, there are
                  scholarships and financial options available to help overseas
                  students.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  Additionally, based on their credentials, area of expertise,
                  and market demand, AI experts may anticipate earning excellent
                  wages in nations. Before making a choice, prospective students
                  must conduct extensive research on Artificial Intelligence
                  subjects, colleges, costs, financial aid opportunities, and
                  job possibilities.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  We have provided sufficient information about the best
                  Artificial Intelligence courses after 12th abroad.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  If you are unsure or want deeper insight, we encourage you to
                  speak with our expert counsellors a
                  <span className="font-bold font-poppins text-gray-700">
                    Meridean Overseas Education Consultants
                    <a href="" className="text-blue-500 pl-1">
                      (MOEC)
                    </a>
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  If you cannot travel to our offices, we offer
                  <a href="#" className="text-blue-500 px-1">
                    online counselling services
                  </a>
                  via our website. Our dedicated counsellors will provide the
                  best guidance regarding your application to study abroad at
                  universities. Don’t hesitate to contact us at
                  <a href="#" className="text-blue-500 px-1">
                    application02@meridean.org
                  </a>
                  or call us at
                  <a href="#" className="text-blue-500 px-1">
                    1800-1230-00011
                  </a>
                  .
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  If you found this information useful, please share it with
                  your friends looking to study abroad.
                </p>
              </div>

              {/* part twoleve */}
              <div>
                <h1
                  id="FAQs"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  FAQs
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <FqsList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
