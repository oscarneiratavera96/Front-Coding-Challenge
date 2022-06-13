import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardTheEnd = (Questions) => {
  //Variable of State of the Component Questions
  const { questionResul, countResponse, response, answers, handleReset } =
    Questions;

  //Create Set Objects
  const mySetResponse = new Set();
  const mySetQuestionResul = new Set();
  const mySetAnswers = new Set();

  //Assign state variables to sets
  mySetResponse.add(response);
  mySetQuestionResul.add(questionResul);
  mySetAnswers.add(answers);

  //Convert sets to arrays
  const myArrResponse = Array.from(mySetResponse).flat();
  const myArrQuestionResul = Array.from(mySetQuestionResul).flat();
  const myArrAnswer = Array.from(mySetAnswers).flat();

  //Group the Arrays
  const arrayCompile = {
    result: myArrResponse,
    questions: myArrQuestionResul,
    answers: myArrAnswer,
  };

  //Final variables
  const testQuestion = [];
  const finalData = [];

  //Function to verify the answer is correct
  const handleVerifyQuestion = () => {
    if (myArrResponse.length > 0) {
      for (let i = 0; i < myArrResponse.length + 1; i++) {
        if (arrayCompile.result[i] === arrayCompile.answers[i]) {
          testQuestion.push("🟢​");
        } else {
          testQuestion.push("🔴​​");
        }
      }
    }
  };

  //Execute function handleVerifyQuestion
  handleVerifyQuestion();

  const handleFinalResponse = () => {
    //Unique keys
    const keyPOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for (let i = 0; i < myArrResponse.length; i++) {
      //Insert into final variable
      finalData.push(
        <div key={keyPOne[i].toString()}>
          {testQuestion[i] + arrayCompile.questions[i]}
        </div>
      );
    }
  };

  //Execute function handleFinalResponse
  handleFinalResponse();

  //Function to return state variables to their initial state
  const handleStateInitial = () => {
    handleReset();
  };

  return (
    //Final Card
    <div className="align-items-center nivel   d-flex nivel">
      <Card
        border="warning"
        className="container  col-md-6 animate__animated animate__tada bg-dark "
      >
        <Card.Body className="text-light  ">
          <Card.Title className=" text-center">You Scored</Card.Title>
          <Card.Text className=" text-center">{`${countResponse}/11`}</Card.Text>
          <div className="font-italic text-justify">{finalData}</div>
        </Card.Body>
        <Link
          onClick={handleStateInitial}
          className="btn btn-outline-warning bLink"
          to="/"
        >
          PLAY AGAIN?
        </Link>
      </Card>
    </div>
  );
};

export default CardTheEnd;
