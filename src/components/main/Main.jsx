import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import QuizeBuilder from "./QuizeBuilder/QuizeBuilder";
import QuizeHeaderBuilder from "./QuizeBuilder/QuizeHeaderBuilder";
import { ToolBar } from "./QuizeBuilder/toolbar/ToolBar";

const Main = () => {
  const { quizeForms } = useSelector((state) => state.form);
  console.log(quizeForms);
  return (
    <MainWrapper>
      <Container>
        <QuizeHeaderBuilder />
        <ToolBar />

        {quizeForms.map((quizeForm) => (
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
  margin: 0 auto;
  padding-bottom: 64px;
  width: 770px;
`;
export default Main;
