import React from "react";
import styled from "styled-components";
import { HeadIndicate } from "../QuizeBuilder/QuizeHeaderBuilder";

const HeadOfTestingForm = ({ title, description }) => {
  return (
    <Wrapper>
      <HeadIndicate />
      <Container>
        <section>
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <input type="email" placeholder="email" required />
        </section>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  text-align: center;

  color: #034c4ce4;
  section {
    width: 800px;
    word-break: break-all;
    input {
      border: none;
      background-color: #c0bebe85;
      width: 300px;
      padding: 5px;
      border-bottom: groove;
      outline: none;
      &:hover {
        background-color: #ebdeded9;
      }
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 900px;
  border-radius: 5px;
  background-color: #fff;
  margin: 0 auto;
`;

export default HeadOfTestingForm;