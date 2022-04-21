import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FlexBox from "../../UI/Flexbox";
import BodyOfTesstingForm from "./BodyOfTesstingForm";
import HeadOfTestingForm from "./HeadOfTestingForm";

const ContainerOfTesting = () => {
  const dispatch = useDispatch();
  

  const { quizData } = useSelector((state) => state.testing);
  return (
    <FlexBox direction="column" justify="space-between" margin="0 auto">
      <HeadOfTestingForm
        title={quizData.quizTitle}
        description={quizData.quizDescription}
      />
      <BodyOfTesstingForm />
    </FlexBox>
  );
};

export default ContainerOfTesting;
