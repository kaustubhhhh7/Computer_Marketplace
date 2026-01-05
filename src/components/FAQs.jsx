import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./styles/FAQs.css";

const FAQ = ({ faqdata, who }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-section-title">
        <span className="faq-eyebrow">Support</span>
        <h2 className="faq-title">Frequently Asked Questions</h2>
      </div>

      <div className="faq-list">
        {faqdata.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button className="faq-header" onClick={() => toggleFAQ(index)}>
              <span className="faq-question">{item.question}</span>
              <FiPlus className="faq-icon" />
            </button>
            <div className="faq-content">
              <div className="faq-answer">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
