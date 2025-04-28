import React from "react";
import FaqsCard from "./FaqsCard";

const FqsList = () => {
  const faqsList = [
    {
      q: "Q1. Which country is best for artificial intelligence study?",
      a: "There are various countries to study artificial intelligence courses, such as the United States of America (USA), Germany, Canada, and the United Kingdom (UK).",
    },
    {
      q: "Q2. Which country pays the highest salary for AI?",
      a: "AI engineers can mostly get the highest salary in the USA, Canada, and the United Kingdom.",
    },
    {
      q: "Q3. Is learning artificial intelligence challenging?",
      a: "Many students find it challenging to learn AI, especially those without a computer science or programming background. The work needed to understand it could be worth it",
    },
  ];

  return (
    <section className="leading-relaxed mt-8 px-4 md:px-8">
      <div className="mt-4 border border-gray-300">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default FqsList;
