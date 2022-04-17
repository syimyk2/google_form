import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import useInput from "../../../hooks/useInput";
import { FormActions } from "../../../store/FormSlice";
import FlexBox from "../../UI/Flexbox";

export const QuizeHeaderBuilder = () => {
  const quiz = useSelector((state) => state.form.quize);
  console.log(quiz);
  const dispatch = useDispatch();
  const {
    enteredValue: quizTitleValue,
    changeInputHandler: quizTitleValueChange,
  } = useInput();
  const {
    enteredValue: quizDescriptionValue,
    changeInputHandler: quizDescriptionValueChange,
  } = useInput();

  const saveQuizTitle = () => {};
  const saveQuizDescription = () => {
    dispatch(
      FormActions.saveQuizTitileAndDescription({
        quizTitleValue,
        quizDescriptionValue,
      })
    );
  };
  const focusedContainer = (e) => {
    console.log("focused");
  };
  return (
    <QuizeWrapper onClick={focusedContainer}>
      <HeadIndicate />
      <FlexBox>
        <Indicate className="indicate" />
        <QuizeBuilderForm>
          <div>
            <textarea
              className="big-textarea"
              onChange={quizTitleValueChange}
              onBlur={saveQuizTitle}
              name="new-form"
              rows={""}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          <div>
            <textarea
              className="little-textarea"
              onChange={quizDescriptionValueChange}
              onBlur={saveQuizDescription}
              name="description"
            />
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
        </QuizeBuilderForm>
      </FlexBox>
    </QuizeWrapper>
  );
};
const QuizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
  border-radius: 8px;
  background: #ffffff;
  overflow: hidden;

  &:focus-within {
    .indicate {
      background-color: #3389f2f4;
    }
  }
`;
export const Indicate = styled.div`
  padding: 3px;
  position: relative;
  z-index: 1;
  background-color: #fdfefff4;
`;
const HeadIndicate = styled.div`
  padding: 5px;
  position: relative;
  z-index: 2;
  background-color: #4910ab;
`;
const QuizeBuilderForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  padding-bottom: 24px;
  div {
    padding-left: 20px;
  }
  & textarea {
    overflow: auto;
    resize: none;
    font-size: 35px;
    font-weight: 700;

    -moz-appearance: none;
    align-items: center;

    /* padding: 10px 10px 10px 0; */
    display: block;
    width: 665px;
    height: auto;
    overflow-y: none scroll;
    /* min-height: 35px;
    max-height: 600px; */
    border: none;
    border-bottom: 1px solid #b2aaaae7;
    &:focus {
      outline: none;
    }
  }

  & .bar {
    position: relative;
    display: block;
    width: 665px;
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
    left: 50%;
  }
  & .bar:after {
    right: 50%;
  }
  & :focus ~ .bar:before,
  textarea:focus ~ .bar:after {
    width: 50%;
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
  .little-textarea {
    overflow: auto;
    resize: none;
    font-size: 11px;
    padding: 5px 0 0 0px;
    -moz-appearance: none;
    display: block;
    width: 665px;
    border: none;
    border-bottom: 1px solid #b2aaaae7;
    &:focus {
      outline: none;
    }
  }
`;

export default QuizeHeaderBuilder;
