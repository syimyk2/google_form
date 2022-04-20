import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizFormData } from "../../../store/asyncFunctions";
import FlexBox from "../../UI/Flexbox";
import BodyOfTesstingForm from "./BodyOfTesstingForm";
import HeadOfTestingForm from "./HeadOfTestingForm";

const ContainerTestingForm = () => {
  const dispatch = useDispatch();
  const {quiz} = useSelector(state=>state.testing)
   console.log(quiz);
  return (
    <FlexBox
      direction="column"
      height="90vh"
      justify="space-between"
      margin="0 auto"
    >
      <HeadOfTestingForm  title={quiz.quizTitle} description={quiz.quizDescription} />
      <BodyOfTesstingForm quiz={quiz} />
    </FlexBox>
  );
};

export default ContainerTestingForm;
