import React, { useState } from "react";
import QuizeAnswers from "./QuizeAnswers";
import { MdOutlineImage } from "react-icons/md";
import styled from "styled-components";
import Select from "./Select";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../../hooks/useInput";
import { saveToLocalStorage } from "../../../utils/helpers/storageHelper";
import { ANSWER_SETTINGS } from "./SelectModal";
import { FormActions } from "../../../store/FormSlice";

const QuizeForm = ({ quizeFormId, quizeFormAnswerItems }) => {
  const dispatch = useDispatch();
  const [selectedSettingsType, setSelectedSettingsType] = useState(
    ANSWER_SETTINGS[0]
  );
  const { enteredValue: questionValue, changeInputHandler: questionChange } =
    useInput();

  //  -------------------------------------------------------------------

  const saveQuestionValueHandler = (formId) => {
    console.log(formId, questionValue);
    dispatch(FormActions.addFormQuestion({ formId, questionValue }));
  };

  const selectVariantsType = (selectedType) => {
    setSelectedSettingsType(selectedType);

    dispatch(FormActions.selectTypeOfQuestion({ selectedType, quizeFormId }));
  };

  return (
    <>
      <BuilderForm>
        <div>
          <input
            type="text"
            onChange={questionChange}
            onBlur={() => saveQuestionValueHandler(quizeFormId)}
            value={questionChange.enteredValue}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <MdOutlineImage className="icon-img" />
        <Select quizeFormId={quizeFormId} onSelected={selectVariantsType} />
      </BuilderForm>
      <QuizeAnswers
        selectedSetting={selectedSettingsType}
        quizeFormId={quizeFormId}
        quizeFormAnswerItems={quizeFormAnswerItems}
      />
    </>
  );
};

export default QuizeForm;

const BuilderForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 680px;
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
    height: 1.5px;
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
