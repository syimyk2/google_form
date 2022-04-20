import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { Indicate } from "../QuizeBuilder/QuizeHeaderBuilder";
import AnswerVariant from "./AnswerVariant";

const BodyOfTesstingForm = () => {
  const selectAnswerHandler = (variantId) => {
    alert("selected variant");
  };
  return (
    <Wrapper>
      <Indicate className="test-indicate" />
      <Container>
        <section>
          <h1>{"Here must be current question?"}</h1>
        </section>
        <VariantAnswersContainer>
          <AnswerVariant
            key={""}
            id={"id"}
            onClick={selectAnswerHandler}
            variant={"some variant"}
          />
          <AnswerVariant
            key={""}
            id={"id"}
            onClick={selectAnswerHandler}
            variant={"some variant"}
          />
        </VariantAnswersContainer>
        <div>
            <Button>Next question</Button>
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
`
