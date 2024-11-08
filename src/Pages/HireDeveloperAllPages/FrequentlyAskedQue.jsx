import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FrequentlyAskedQue = () => {
  const [hireDevFAQ, setHireDevFAQ] = useState([]);

  const HireDevFAQ = async () => {
    try {
      const response = await axios.get("https://ct-backend-apis.onrender.com/get-hire-developers-faq-data");
      setHireDevFAQ(response.data.getdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HireDevFAQ();
  }, []);

  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    setOpenQuestions((prevOpenQuestions) => {
      const newOpenQuestions = [...prevOpenQuestions];
      newOpenQuestions[index] = !newOpenQuestions[index];
      return newOpenQuestions;
    });
  };

  return (
    <div id='frequently-asked-question-container'>
      <h1>Frequently Asked Question</h1>
      {hireDevFAQ.map((item, index) => (
        <div id='faq-list-container' key={index}>
          <div id='question'>
            <p id='que-para'>
              {index + 1}. {item.que}
            </p>
            <p id='que-btn'>
              <i
                className="fa fa-plus-circle"
                aria-hidden="true"
                onClick={() => toggleQuestion(index)}
                style={{ display: !openQuestions[index] ? 'block' : 'none' }}
              ></i>
              <i
                className="fa fa-minus-circle"
                aria-hidden="true"
                onClick={() => toggleQuestion(index)}
                style={{ display: openQuestions[index] ? 'block' : 'none' }}
              ></i>
            </p>
          </div>

          {openQuestions[index] && (


            <div id='answer'
              className={openQuestions[index] ? 'answer-open' : ''}
            >
              {item.ans}
            </div>

          )}

        </div>
      ))}
    </div>
  );
};

export default FrequentlyAskedQue;
