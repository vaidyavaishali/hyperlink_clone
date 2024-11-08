import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './frequentlyasked.css'
const FrequentlyAskedQue = () => {
  const [servicesFAQData , setservicesFAQData] = useState([]);

  const ServicesFAQ = async () => {
    try {
      const response = await axios.get("https://ct-backend-apis.onrender.com/get-service-faq-data");
      setservicesFAQData(response.data.getdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ServicesFAQ();
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
      {servicesFAQData.map((item, index) => (
        <div id='faq-list-container' key={index}>
          <div id='question'>
            <p id='que-para'>
              {index + 1}. {item.question}
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

                {item.Answer}
              </div>
            
            )}
        
        </div>
      ))}
    </div>
  );
};

export default FrequentlyAskedQue;
