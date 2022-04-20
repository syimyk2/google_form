import React from "react";
import QuizeAnswers from "./QuizeAnswers";
import { MdOutlineImage } from "react-icons/md";
import styled from "styled-components";
import Select from "./Select";
import { useDispatch} from "react-redux";
import useInput from "../../../hooks/useInput";
import { formActions } from "../../../store/formSlice";

const QuizeForm = ({ quizeFormId, quizeFormAnswerItems, typeOfQuestion,question }) => {
  const dispatch = useDispatch();

  const { enteredValue: questionValue, changeInputHandler: questionChange } =
    useInput();

  //  ---------------------------------------------------

  const saveQuestionValueHandler = (formId) => {
    console.log(formId, questionValue);
    dispatch(formActions.addFormQuestion({ formId, questionValue }));
  };

  const selectVariantsType = (selectedType) => {
    dispatch(formActions.selectTypeOfQuestion({ selectedType, quizeFormId }));
  };

  return (
    <>
      <BuilderForm>
        <div>
          <input
            onFocus={(e) => e.target.select()}
            type="text"
            onChange={questionChange}
            onBlur={() => saveQuestionValueHandler(quizeFormId)}
            defaultValue={question}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <MdOutlineImage className="icon-img" />
        <Select
          quizeFormId={quizeFormId}
          typeOfQuestion={typeOfQuestion}
          onSelected={selectVariantsType}
        />
      </BuilderForm>
      <QuizeAnswers
        selectedSetting={typeOfQuestion}
        quizeFormId={quizeFormId}
        quizeFormAnswerItems={quizeFormAnswerItems}
        typeOfQuestion={typeOfQuestion}
      />
    </>
  );
};

export default QuizeForm;

const BuilderForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 780px;
  margin: 0 auto;
  padding: 15px;
  .icon-img {
    font-size: 25px;
    color: #656262;
    cursor: pointer;
  }

  & input {
    width: 300px;
    border: none;
    border-bottom: 1px solid grey;
    background: #c0bfbf20;
    outline: none;
    padding: 10px 10px 10px;
    &:hover {
      background: #85848428;
    }
  }
  & .bar {
    position: relative;
    display: block;
    width: 300px;
  }
  & .bar:before,
  .bar:after {
    content: "";
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #611dd6;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  & .bar:before {
    left: 0%;
  }
  & .bar:after {
    right: 50%;
  }
  & :focus ~ .bar:before,
  textarea:focus ~ .bar:after {
    width: 100%;
  }
  /* active state */
  & :focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }

  /* ANIMATIONS ================ */
  @-webkit-keyframes inputHighlighter {
    from {
      background: #5e1dcd;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @-moz-keyframes inputHighlighter {
    from {
      background: #4910ab;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @keyframes inputHighlighter {
    from {
      background: #673ab7;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;
