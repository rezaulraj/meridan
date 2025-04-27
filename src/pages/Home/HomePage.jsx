import React from "react";
import AI from "../../assets/ai/aifront.png";
const HomePage = () => {
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
      title: "Why Study Artificial Intelligence Courses Abroad?",
      link: "#study",
    },
    {
      title: "Artificial Intelligence Courses Eligibility in Abroad",
      link: "#eligibility",
    },
    {
      title: "Artificial Intelligence Courses in Abroad Universities",
      link: "#universities",
    },
    {
      title: "List of Artificial Intelligence Courses in Abroad",
      link: "#list",
    },
    {
      title: "Artificial Intelligence Course Fees and Living Costs in Abroad",
      link: "#living",
    },
    {
      title:
        "Artificial Intelligence Course Fee & Living Expenses in United States (USA)",
      link: "#usa",
    },
    {
      title: "Student Visa Cost for Artificial Intelligence Courses",
      link: "visa",
    },
    {
      title: "Scholarships for Artificial Intelligence Courses Abroad",
      link: "#scholarships",
    },
    {
      title: "Salary after Artificial Intelligence Courses Abroad",
      link: "#salary",
    },
    {
      title: "Conclusion",
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
      particular: "Total number of AI Course Universities	",
      statistic: "290+",
    },
    {
      particular: "Top positions after AI Course",
      statistic:
        "AI engineer, Robotics scientist, Data scientist, Data analyst, User experience researcher, Information architect",
    },
    {
      particular: "Exams required",
      statistic: "IELTS, PTE, TOEFL, Duolingo, GRE, GMAT",
    },
    {
      particular:
        "Average Visa Cost for Artificial Intelligence Courses Abroad",
      statistic: "Depending on the Country",
    },
    {
      particular: "Scholarships",
      statistic:
        "The DeepMind Scholarship, Dean Benson Scholarship, Regional Victoria Experience Bursary, Vector Scholarship in Artificial Intelligence, The Professor Mike Walker OBE Scholarship",
    },
    {
      particular: "Top Universities by Ranking",
      statistic:
        "University of Alberta, University of Newcastle, University of Sussex, Curtin University, La Trobe University",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto">
      <section>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Main Content (left side) */}
          <div className="hidden w-72 flex-shrink-0 md:block space-y-3 bg-white text-gray-800">
            <div className="sticky top-4">
              <ul className="border border-gray-300 divide-y divide-gray-300 shadow-md">
                {homeData.map((data, indx) => (
                  <li key={indx} className="hover:bg-gray-200 p-2">
                    <a
                      href={data.link}
                      className="hover:text-gray-900 font-poppins"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Links (right side) */}
          <div className=" flex-1">
            <div className="sticky top-4 p-4 space-y-8">
              <h1 className="text-2xl md:text-4xl font-bold text-blue-dark font-poppins">
                Artificial Intelligence Course Abroad
              </h1>
              <img src={AI} alt="" />
              {/* part one */}
              <div>
                <h1
                  id="overview"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Overview
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Artificial Intelligence (AI) has become a phenomenal field
                  with the potential to transform many sectors completely. As
                  the need for AI experts grows, taking Artificial Intelligence
                  courses abroad has become a desirable option for students
                  looking for top-notch education and exposure to different
                  cultures.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  Studying AI courses abroad provides students with
                  opportunities for successful employment. The study of AI
                  courses after the 12th is a resource of technological
                  innovations and a worldwide network of renowned institutions.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  This article covers the main features of studying Artificial
                  Intelligence abroad, along with prerequisites, Artificial
                  Intelligence courses, cost, universities, and potential
                  income.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  Let's get started about an artificial intelligence course if
                  you wish to pursue a career in it.
                </p>
              </div>

              {/* part two */}
              <div>
                <h1
                  id="highlights"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Artificial Intelligence Courses in Abroad - Important
                  Highlights
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  There are 290+ universities abroad that offer Artificial
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
                          Statistics
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
                  Why Study Artificial Intelligence Courses Abroad?
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Studying artificial intelligence courses abroad offers
                  numerous advantages for aspiring AI professionals. Here are
                  some compelling reasons why pursuing AI courses after 12th in
                  foreign countries can be an excellent choice.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700">
                    Global Reputation:
                  </span>
                  An international reputation for AI research and education has
                  allowed many prestigious universities around the world to
                  establish themselves as leaders in this field. By enrolling in
                  one of the top institutions for AI Courses, students will have
                  the opportunity to study with renowned professors, engage in
                  cutting-edge research, and gain exposure to advanced
                  technologies and techniques.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700">
                    Modern Infrastructure:
                  </span>
                  Universities abroad frequently have modern infrastructure,
                  such as specialised AI research laboratories, cutting-edge
                  computer resources, and access to industrial collaborations.
                  These tools improve education and allow students to work on
                  actual AI projects.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700">
                    Expanded Professional Possibilities:
                  </span>
                  Earning an AI course from a reputable foreign university can
                  greatly improve professional opportunities. Studying abroad
                  gives up a global network of chances, enabling graduates to
                  work with top AI businesses throughout the world. Employers
                  prefer applicants with foreign experience.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700">
                    Exposure to Diverse Perspectives:
                  </span>{" "}
                  Since AI is a constantly developing science, various nations
                  may have different perspectives and areas of interest for
                  their study. Students might improve their knowledge and
                  abilities by studying abroad since they are exposed to various
                  approaches, theories, and views.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
