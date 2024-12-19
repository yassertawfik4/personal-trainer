import { useState } from "react";

function FQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "How often should I exercise?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Velit gravida malesuada quis ullamcorper. Lectus accumsan turpis quisque tempor nisi. Eget morbi vitae neque adipiscing ridiculus feugiat. Lectus ac eleifend iaculis magna.",
    },
    {
      question: "What’s the best workout routine for weight loss?",
      answer:
        "Yes, many private health insurance plans cover our services. Please check with your provider.",
    },
    {
      question: "What should I eat before and after a workout?",
      answer: "A referral is not necessary for most of our services.",
    },
    {
      question: "How can I build muscle effectively?",
      answer:
        "We are open Monday to Friday from 8 AM to 6 PM, and Saturdays from 9 AM to 3 PM.",
    },
  ];

  return (
    <section className="mt-24" aria-labelledby="faq-title">
      <div className="container mx-auto px-6 lg:px-0">
        <header className="text-center">
          <h1 id="faq-title" className="uppercase font-extrabold text-[#FFFFFF] text-3xl md:text-6xl">
            Commonly Asked Questions
          </h1>
          <p className="text-[#909090] text-xl md:text-3xl mt-5">I am here to help!</p>
        </header>

        <div className="mt-12 space-y-8">
          {questions.map((item, index) => (
            <article key={index} className="border-b border-[#FFFFFF]">
              <button
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="flex items-center justify-between w-full p-8"
              >
                <h3 className="font-bold text-2xl text-start md:text-4xl text-[#FFFFFF]">
                  {item.question}
                </h3>
                <span
                  className={`text-[#FF2332] text-2xl transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <i className={`fas ${activeIndex === index ? "fa-minus" : "fa-plus"}`}></i>
                </span>
              </button>

              {activeIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="p-8 text-[#909090] text-base"
                >
                  {item.answer}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FQ;
