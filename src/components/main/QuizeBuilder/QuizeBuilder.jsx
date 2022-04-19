import React from "react";
import { Indicate } from "./QuizeHeaderBuilder";
import styled from "styled-components";
import QuizeForm from "./QuizeForm";
import QuizeBuilderFooter from "./QuizeBuilderFooter";

const QuizeBuilder = ({  quizeFormId, quizeFormAnswerItems, isQuestionImportant, typeOfQuestion, question}) => {
  return (
    <QuizeWrapper>
      <Indicate className="indicate" />
      <div>
        <QuizeForm
          quizeFormId={quizeFormId}
          quizeFormAnswerItems={quizeFormAnswerItems}
          typeOfQuestion={typeOfQuestion}
          question={question}
        />
        <QuizeBuilderFooter
          quizeFormId={quizeFormId}
          isQuestionImportant={isQuestionImportant}
        />
      </div>
    </QuizeWrapper>
  );
};
export default QuizeBuilder;

const QuizeWrapper = styled.div`
  display: flex;
  margin: 15px 0 15px;
  width: 700px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 2px 5px 8px 0px;
  overflow: hidden;
  &:focus-within {
    .indicate {
      background-color: #3389f2f4;
    }
  }
`;


