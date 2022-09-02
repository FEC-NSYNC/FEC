import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import QuestionItem from './QuestionItem.jsx';

function QuestionList({ product }) {

  const [questionsList, setQuestions] = useState([]);
  const [seeMoreQuestions, setSeeMoreQuestions] = useState(false);
  //console.log(product);
  console.log(product?.id);

  const options = {
    headers: {'Authorization': process.env.API_KEY},
    params: {'product_id': 65656}
  }

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions`, options)
    .then((response) => {
      //console.log(response.data.results)
      setQuestions(response.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);


  const questions = questionsList.map((question, index) => {
    return (<QuestionItem key={index} question={question} />);
  });

  function handleClick() {
    console.log('Clicked');
    setSeeMoreQuestions(true);
  }

  if (seeMoreQuestions === true) {
    return (
      <>
        <div>
          {questions}
        </div>
        <p onClick={handleClick}>See More Questions</p>
      </>
    );
  }
  return (
    <>
      <div>
        {questions.slice(0,4)}
      </div>
      <p onClick={handleClick}>See More Questions</p>
    </>
  );
};

export default QuestionList;

// Needs to be refactored to only return first 4 Questions sorted by usefulness
