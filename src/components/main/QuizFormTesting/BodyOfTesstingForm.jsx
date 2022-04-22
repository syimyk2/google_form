import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { testingActions } from "../../../store/testingSlice";
import {
  DATE,
  EMAIL,
  NAME,
  NUMBER,
  ONEOFLIST,
  SOMEOFLIST,
  TEXT,
  TIME,
} from "../../../utils/constants/general";
import { saveToLocalStorage } from "../../../utils/helpers/storageHelper";
import Button from "../../UI/Button";
import { Indicate } from "../QuizeBuilder/QuizeHeaderBuilder";
import AnswerVariant from "./typeOfAnswers/AnswerVariant";
import { AnswerWithText } from "./typeOfAnswers/AnswerWithText";
import ScorePoints from "./typeOfAnswers/score/ScorePoints";
import { SingleAnswerWrapper } from "./typeOfAnswers/SingleAnswerWrapper";

const BodyOfTesstingForm = () => {
  const dispatch = useDispatch();
  const { quizData, quizItems, quiz, checking, showScore } = useSelector(
    (state) => state.testing
  );
  let [answerCount, setAnswerCount] = useState(0);

  const selectMultipalAnswerHandler = (answerId, selectedVariant) => {
    if (selectedVariant.isVariantCorrect) {
      setAnswerCount((prev) => prev + 1);
    }
    dispatch(testingActions.selectAnswerMultupal({ answerId, answerCount }));
  };
  const selectOneAnswerHandler = (answerId, selectedVariant) => {
    if (selectedVariant.isVariantCorrect) {
      setAnswerCount((prev) => prev + 1);
    }
    dispatch(testingActions.selectAnswerOneVariant({ answerId, answerCount }));
  };

  console.log(quiz, checking);
  useEffect(() => {
    saveToLocalStorage("@questions", quizData.quizeForms);
    saveToLocalStorage("@quiz", quizData);
  }, [quizData]);

  const goToNexQuestionHandler = () => {
    dispatch(testingActions.gotoNextQuestion());
  };

  // ------------changeable content-------------------------
  let changeableContent = null;

  switch (quiz.typeOfQuestion.title) {
    case TEXT:
      changeableContent = (
        <AnswerWithText id={quiz.id} question={quiz.question} />
      );
      break;
    case SOMEOFLIST:
      changeableContent = quiz.answerItems.map((question) => (
        <AnswerVariant
          key={question.id}
          id={question.id}
          onClick={selectMultipalAnswerHandler}
          variantValue={question.variantValue}
          checked={question.isSelected}
          type="checkbox"
          variant={question}
        />
      ));
      break;
    case ONEOFLIST:
      changeableContent = quiz.answerItems.map((question) => (
        <AnswerVariant
          key={question.id}
          id={question.id}
          onClick={selectOneAnswerHandler}
          variantValue={question.variantValue}
          checked={question.isSelected}
          variant={question}
        />
      ));
      break;
    case TIME:
      changeableContent = (
        <SingleAnswerWrapper
          title={quiz.typeOfQuestion.title}
          question={quiz.question}
          type="time"
        />
      );
      break;
    case NUMBER:
      changeableContent = (
        <SingleAnswerWrapper
          title={quiz.typeOfQuestion.title}
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          question={quiz.question}
        />
      );
      break;
    case EMAIL:
      changeableContent = (
        <SingleAnswerWrapper
          title={quiz.typeOfQuestion.title}
          type="email"
          question={quiz.question}
        />
      );
      break;
    case DATE:
      changeableContent = (
        <SingleAnswerWrapper
          title={quiz.typeOfQuestion.title}
          type="date"
          question={quiz.question}
        />
      );
      break;
    case NAME:
      changeableContent = (
        <SingleAnswerWrapper
          title={quiz.typeOfQuestion.title}
          type="name"
          question={quiz.question}
        />
      );
      break;
    default:
      changeableContent = <h1>Нет вариантов</h1>;
      break;
  }
  const testButtonValue =
    quizItems.length === quiz.count ? "Finish" : "Next Question";
  return (
    <Wrapper>
      <Indicate className="test-indicate" />
      <Container>
        {showScore ? (
          <ScorePoints />
        ) : (
          <>
            <QuestionWrapper>
              {quiz.isQuestionImportant && <span>*</span>}
              <h1>{quiz.question}</h1>
            </QuestionWrapper>

            <VariantAnswersContainer>
              {changeableContent}
            </VariantAnswersContainer>
            <div className="button-container">
              <Button onClick={goToNexQuestionHandler}>
                {testButtonValue}
              </Button>
            </div>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default BodyOfTesstingForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  & .button-container {
    width: 860px;
    display: flex;
    justify-content: center;
    padding: 20px;
  }
`;
const QuestionWrapper = styled.section`
  padding: 20px 8px 20px 20px;
  width: 860px;
  display: flex;
  align-items: center;
  word-break: break-all;
  font-size: 14px;
  color: #034c4ce4;
  span {
    color: crimson;
    font-size: 25px;
    padding: 8px;
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
  /* height: 100%; */
  flex-direction: column;
  justify-content: space-evenly;
`;
