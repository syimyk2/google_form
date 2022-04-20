import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuizFormData } from "../../../store/asyncFunctions";
import FlexBox from "../../UI/Flexbox";
import BodyOfTesstingForm from "./BodyOfTesstingForm";
import HeadOfTestingForm from "./HeadOfTestingForm";

const ContainerTestingForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuizFormData());
  }, []);
  return (
    <FlexBox
      direction="column"
      height="90vh"
      justify="space-between"
      margin="0 auto"
    >
      <HeadOfTestingForm />
      <BodyOfTesstingForm />
    </FlexBox>
  );
};

export default ContainerTestingForm;
