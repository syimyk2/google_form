import React, { useEffect } from "react";
import styled from "styled-components";
import { MdOutlineImage, MdClose, MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import useInput from "../../../hooks/useInput";
import { useDispatch } from "react-redux";
import { FormActions } from "../../../store/FormSlice";
import { Variant } from "./AnswerItem";
import VariantAdder from "./VariantAdder";

const QuizeAnswers = ({
  quizeFormId,
  quizeFormAnswerItems,
  typeOfQuestion,
}) => {
  const dispatch = useDispatch();

  const { changeInputHandler: variantChange, enteredValue: variantValue } =
    useInput();

  const addVariantItemHandler = (formId) => {
    const quizeVariants = {
      id: Math.random().toString(),
      variantValue: "",
      isVariantCorrect: false,
    };

    dispatch(FormActions.addVariants({ quizeVariants, formId }));
  };

  const deleteVariantItemHandler = (formId, itemId) => {
    dispatch(FormActions.deleteVariants({ formId, itemId }));
  };
  const saveVariantValueHandler = (formId, itemId) => {
    dispatch(FormActions.saveVariantsValue({ formId, itemId, variantValue }));
  };
  const selctAsAcorrectVariantHandler = (formId, itemId) => {
    dispatch(FormActions.selectVariantAsAcorrect({ formId, itemId }));
  };

  // ----------------Changeing answer form ---------------------
  let changebleForm;

  if (typeOfQuestion.title === "Текст") {
    changebleForm = (
      <AnswerWithText>
        <span>Текстовый ответ</span>
      </AnswerWithText>
    );
  } else if (typeOfQuestion.title === "Номер") {
    changebleForm = (
      <AnswerWithDate>
        <span>{typeOfQuestion.title}</span>
        <img src={typeOfQuestion.icon} alt="icon" />
      </AnswerWithDate>
    );
  } else if (typeOfQuestion.title === "Электронная почта") {
    changebleForm = (
      <AnswerWithDate>
        <span>{typeOfQuestion.title}</span>
        <img src={typeOfQuestion.icon} alt="icon" />
      </AnswerWithDate>
    );
  } else if (typeOfQuestion.title === "Время") {
    changebleForm = (
      <AnswerWithDate>
        <span>{typeOfQuestion.title}</span> <IoMdTime fontSize={20} />
      </AnswerWithDate>
    );
  } else if (typeOfQuestion.title === "Имя") {
    changebleForm = (
      <AnswerWithDate>
        <span>{typeOfQuestion.title}</span>{" "}
        <img src={typeOfQuestion.icon} alt="icon" />
      </AnswerWithDate>
    );
  } else if (typeOfQuestion.title === "Несколько из списка") {
    changebleForm = (
      <>
        {quizeFormAnswerItems.map((quizeFormAnswerItem) => (
          <Variant
            type={"checkbox"}
            placeholder={quizeFormAnswerItem.count}
            key={quizeFormAnswerItem.id}
            id={quizeFormAnswerItem.id}
            formId={quizeFormId}
            onChange={variantChange}
            value={variantValue}
            defaultValue={quizeFormAnswerItem.variantValue}
            onBlur={saveVariantValueHandler}
            onDelete={deleteVariantItemHandler}
            onChecked={selctAsAcorrectVariantHandler}
            checked={quizeFormAnswerItem.isVariantCorrect}
          />
        ))}

        <VariantAdder
          type={"checkbox"}
          onClick={addVariantItemHandler}
          id={quizeFormId}
        />
      </>
    );
  } else if (typeOfQuestion.title === "Дата") {
    changebleForm = (
      <AnswerWithDate>
        <span>День, месяц, год</span>
        <MdDateRange fontSize="20px" color="grey" />
      </AnswerWithDate>
    );
  } else {
    changebleForm = (
      <>
        {quizeFormAnswerItems.map((quizeFormAnswerItem) => (
          <Variant
            key={quizeFormAnswerItem.id}
            id={quizeFormAnswerItem.id}
            placeholder={quizeFormAnswerItem.count}
            formId={quizeFormId}
            onChange={variantChange}
            defaultValue={quizeFormAnswerItem.variantValue}
            value={variantValue}
            onBlur={saveVariantValueHandler}
            onDelete={deleteVariantItemHandler}
            type={"radio"}
            onChecked={selctAsAcorrectVariantHandler}
            checked={quizeFormAnswerItem.isVariantCorrect}
          />
        ))}
        <VariantAdder
          onClick={addVariantItemHandler}
          type={"radio"}
          id={quizeFormId}
        />
      </>
    );
  }

  return <QuzeAnswersContainer>{changebleForm}</QuzeAnswersContainer>;
};

export default QuizeAnswers;

const QuzeAnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 680px;
  padding: 15px;
  margin: 0 auto;
`;
const AnswerWithDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  height: 40px;
  width: 220px;
  border-bottom-style: ridge;
  img {
    width: 25px;
  }
`;
const AnswerWithText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  height: 40px;
  width: 600px;
  border-bottom: 1px solid grey;
  border-bottom-style: dashed;
  color: grey;
`;
