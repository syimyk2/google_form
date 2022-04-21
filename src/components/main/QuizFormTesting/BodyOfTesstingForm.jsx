import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { saveToLocalStorage } from "../../../utils/helpers/storageHelper";
import {testingActions} from '../../../store/testingSlice'
import Button from "../../UI/Button";
import { Indicate } from "../QuizeBuilder/QuizeHeaderBuilder";
import AnswerVariant from "./AnswerVariant";

const BodyOfTesstingForm = () => {
  const dispatch = useDispatch();
  const { quizData, quizItems, quiz } = useSelector((state) => state.testing);
  const selectAnswerHandler = (variantId) => {
    alert("selected variant");
  };
  console.log(quiz);
  useEffect(() => {
    saveToLocalStorage("@questions", quizData.quizeForms);
    saveToLocalStorage("@quiz", quizData);
  }, [quizData]);
  
  const goToNexQuestionHandler = () => {
     dispatch(testingActions.goToNextQuestion())
  };
  return (
    <Wrapper>
      <Indicate className="test-indicate" />
      <Container>
        <section>
          <h1>{quizItems[0].question}</h1>
        </section>
        <VariantAnswersContainer>
          {quizItems[0].answerItems.map((question) => (
            <AnswerVariant
              key={question.id}
              id={question.id}
              onClick={selectAnswerHandler}
              variant={question.variantValue}
              checked={true}
            />
          ))}
        </VariantAnswersContainer>
        <div>
          <Button onClick={goToNexQuestionHandler}>Next question</Button>
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
  text-align: center;
  color: #034c4ce4;
  section {
    width: 860px;
    word-break: break-all;
  }
`;
const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 900px;
  height: 380px;
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
  align-items: center;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;
