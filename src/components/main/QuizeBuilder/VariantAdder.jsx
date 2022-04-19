import React from "react";
import styled from "styled-components";

const VariantAdder = ({ onClick, type, className, id }) => {
  return (
    <AnswerAdder>
      <form action="" onClick={() => onClick(id)}>
        <input disabled={true} type={type ? type : "radio"} id="" />
        <input
          className="input"
          type="text"
          disabled={true}
          placeholder="Добавить вариант"
        />
      </form>
      <span>или</span>
      <span className="btn-other">добавить вариант "Другое"</span>
    </AnswerAdder>
  );
};

export default VariantAdder;

const AnswerAdder = styled.div`
  display: flex;
  width: 600px;
  align-items: center;
  input {
    cursor: pointer;
    outline: none;
    border: none;
    padding: 5px;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid grey;
    }
  }

  & span {
    padding: 0 0 0 20px;
  }
  & .btn-other {
    &:hover {
      background: #4297dd17;
    }
    color: #338fda;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
  }
`;
