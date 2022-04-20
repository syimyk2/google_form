import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getQuizFormData, saveQuizFormData } from "../../store/asyncFunctions";
import { saveToLocalStorage } from "../../utils/helpers/storageHelper";
import QuizeBuilder from "./QuizeBuilder/QuizeBuilder";
import QuizeHeaderBuilder from "./QuizeBuilder/QuizeHeaderBuilder";
import { ToolBar } from "./QuizeBuilder/toolbar/ToolBar";

const Main = () => {
  const { quize } = useSelector((state) => state.form);
  const dispatch = useDispatch()
  // console.log(quizeForms);
  useEffect(() => {
    saveToLocalStorage('@quiz-data', quize) 
  }, [quize]);
  return (
    <MainWrapper>
      <Container>
        <QuizeHeaderBuilder />
        <ToolBar />

        {quize.quizeForms.map((quizeForm) => (
          <QuizeBuilder
            key={quizeForm.id}
            quizeFormId={quizeForm.id}
            quizeFormAnswerItems={quizeForm.answerItems}
            isQuestionImportant={quizeForm.isQuestionImportant}
            typeOfQuestion={quizeForm.typeOfQuestion}
            question={quizeForm.question}
          />
        ))}
      </Container>
    </MainWrapper>
  );
};
const MainWrapper = styled.main`
  display: flex;
  margin-top: 12px;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content:center;
  padding-bottom: 64px;
  width: 800px;
  margin: 0 auto;
`;
export default Main;
