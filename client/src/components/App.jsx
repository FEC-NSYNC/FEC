/* eslint-disable import/extensions */
import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx';

function App() {
  const [question, setQuestion] = useState('');

  function handleQuestion(e) {
    setQuestion(e.target.value);
  }

  return (
    <>
      <h1>Questions & Answers</h1>
      <input
        type="text"
        value={question}
        onChange={handleQuestion}
      />
      <p>Ask a Question</p>
      <div>
        <QuestionList />
      </div>
    </>
  );
}

export default App;
