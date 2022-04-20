import React from "react";
import styled from "styled-components";
import QuizeFormTest from "./QuizeFormTest";

const QuizeForms = () => {
  return (
    <QuizFormsContainer>
      <QuizeFormTest />
    </QuizFormsContainer>
  );
};

export default QuizeForms;

const QuizFormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 100vh;
  background-color: transparent;
  margin: 0 auto;
  padding: 40px 20px 20px;
`;
