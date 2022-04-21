import React from "react";
import styled from "styled-components";

const AnswerVariant = ({ id, variant, onClick, type, checked}) => {
  return (
    <VariantWrapper onClick={() => onClick(id)}>
      <input onChange={onClick} type={type || "radio"} checked ={checked} /> <span>{variant}</span>
    </VariantWrapper>
  );
};

export default AnswerVariant;
const VariantWrapper = styled.div`
  background-color: #5207e97d;
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  height: 50px;
  width: 700px;
  cursor: pointer;
  &:hover{
    background-color: #6f3bd67c;
  }

  span {
    padding-left: 30px;
  }
`;
