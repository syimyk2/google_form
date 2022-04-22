import React from "react";
import styled from "styled-components";

const AnswerVariant = ({ id, variantValue, onClick, type, checked, variant}) => {
  return (
    <VariantWrapper onClick={() => onClick(id, variant)}>
      <input  type={type || "radio"} onChange={()=>onClick(id, variant)} checked={checked} /> <span>{variantValue}</span>
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
  margin-bottom: 20px;
  margin-left: 20px;
  cursor: pointer;
  input{
    cursor: pointer;
  }
  &:hover{
    background-color: #6f3bd67c;
  }

  span {
    padding-left: 30px;
  }
`;
