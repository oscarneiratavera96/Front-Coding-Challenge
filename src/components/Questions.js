import { Routes, Route, HashRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Cards from "./Card";
import CardTheEnd from "./CardTheEnd";
import Home from "./Home";

const Questions = () => {
  //State variables
  //Question title status variable
  const [title, setTitle] = useState("");
  //Question status variable
  const [questi, setQuesti] = useState("");
  //Response status variable
  const [answers, setAnswers] = useState([]);
  //Total questions status variable
  const [questionResul, setQuestionResul] = useState([]);
  //User Response Status Variable
  const [response, setResponse] = useState([]);
  //Question counter status variable
  const [count, setCount] = useState(0);
  //Correctly Answered Question Counter Status Variable
  const [countResponse, setCountResponse] = useState(0);

  //Effect
  useEffect(() => {
    const fecthQuestion = async () => {
      if (title !== "") return;
      //URL the API
      let quesUrl = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;

      //Promises to get data from API with custom helper
      const [questionRes] = await Promise.all([helpHttp().get(quesUrl)]);
      const resultTitle = await questionRes.results[0].category;
      const resultQuestion = await questionRes.results[0].question;
      answers[count] = await questionRes.results[0].correct_answer;
      questionResul[count] = await questionRes.results[0].question;

      //Assigning value to the state function
      setAnswers(answers);
      setQuestionResul(questionResul);
      setTitle(resultTitle);
      setQuesti(resultQuestion);
    };

    //Execute function fecthQuestion//
    fecthQuestion();
  }, [count]);

  //Function to control questions and value of the answer
  const handleChange = (e) => {
    if (count < 11) {
      setCount(count + 1);
      setTitle("");
      response[count] = e.target.value;
    }
    setResponse(response);
    if (response[count] === answers[count]) {
      setCountResponse(countResponse + 1);
    }
  };

  //Function to return state variables to their initial state
  const handleReset = () => {
    setTitle("");
    setQuesti("");
    setCount(0);
    setAnswers([]);
    setQuestionResul([]);
    setResponse([]);
    setCountResponse(0);
  };

  //Router
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Questions"
            element={
              <React.Fragment>
                {count < 11 ? (
                  <Cards
                    title={title}
                    questi={questi}
                    handleChange={handleChange}
                    count={count}
                    response={response}
                  ></Cards>
                ) : (
                  <CardTheEnd
                    questionResul={questionResul}
                    handleChange={handleChange}
                    count={count}
                    answers={answers}
                    response={response}
                    countResponse={countResponse}
                    handleReset={handleReset}
                  ></CardTheEnd>
                )}
              </React.Fragment>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Questions;
