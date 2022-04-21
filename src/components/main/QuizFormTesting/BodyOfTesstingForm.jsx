import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { testingActions } from "../../../store/testingSlice";
import { saveToLocalStorage } from "../../../utils/helpers/storageHelper";
import Button from "../../UI/Button";
import { Indicate } from "../QuizeBuilder/QuizeHeaderBuilder";
import AnswerVariant from "./typeOfAnswers/AnswerVariant";
import AnswerWitDate from "./typeOfAnswers/AnswerWitDate";
import { AnswerWithText } from "./typeOfAnswers/AnswerWithText";
import AnswerWitTime from "./typeOfAnswers/AnswerWithTime";
import { SingleAnswerWrapper } from "./typeOfAnswers/SingleAnswerWrapper";

const BodyOfTesstingForm = () => {
  const dispatch = useDispatch();
  const { quizData, quiz } = useSelector((state) => state.testing);
  const selectAnswerHandler = (variantId) => {
    alert("selected variant");
  };
  console.log(quiz.answerItems.length, quiz.count);
  useEffect(() => {
    saveToLocalStorage("@questions", quizData.quizeForms);
    saveToLocalStorage("@quiz", quizData);
  }, [quizData]);

  const goToNexQuestionHandler = () => {
    dispatch(testingActions.gotoNextQuestion());
  };
  const testButtonValue =
    quiz.answerItems.length + 1 === quiz.count ? "Finish" : "Next Question";
  return (
    <Wrapper>
      <Indicate className="test-indicate" />
      <Container>
        <section>
          <h1>{quiz.question}</h1>
        </section>
        <VariantAnswersContainer>
          {/* {quiz.answerItems.map((question) => (
            <AnswerVariant
              key={question.id}
              id={question.id}
              onClick={selectAnswerHandler}
              variant={question.variantValue}
              checked={true}
            />
          ))} */}
          {/* <AnswerWithText/> */}
          {/* <AnswerWitDate /> */}
          {/* <AnswerWitTime/> */}
          <SingleAnswerWrapper/>
        </VariantAnswersContainer>
        <div className="button-container">
          <Button onClick={goToNexQuestionHandler}>{testButtonValue}</Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default BodyOfTesstingForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  section {
    padding: 20px 8px 20px 20px;
    width: 860px;
    word-break: break-all;
    font-size: 14px;
    color: #034c4ce4;
  }
  & .button-container{
   width: 860px;
   display: flex;
   justify-content: center;
   padding: 20px;
  }
  
`;
const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 900px;
  /* height: 380px; */
  border-radius: 5px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 30px;
  .test-indicate {
    background-color: blue;
  }
`;
const VariantAnswersContainer = styled.div`
  display: flex;
  /* align-items: center; */
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;
