import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../UI/Button";
import { HeadIndicate } from "../QuizeBuilder/QuizeHeaderBuilder";
const QuizeFormTest = () => {
  const navigate =useNavigate()
  const goToTestingQuizeFormHandler = ({id}) => {
    navigate(`/testing/${id}`)
    
  };
  return (
    <Wrapper>
      <HeadIndicate />
      <Container>
        <section>
          <div>
            <h1>{"Title of Test"}</h1>
          </div>
          <div>
            <p>
              {
                "Description of Test long long logn long llooooooooong loooggggggggggggggggggg"
              }
            </p>
          </div>
        </section>
        <div>
          <Button onClick={goToTestingQuizeFormHandler}>
            Пройти тестирование
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default QuizeFormTest;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-around;

  color: #034c4ce4;
  section {
    width: 500px;
    word-break: break-all;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 5px;
  background-color: #fff;
`;
