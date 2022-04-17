import styled from "styled-components";
import {
  AiOutlinePlusCircle,
  AiOutlineImport,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { BiText } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import { GrChapterAdd } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { FormActions } from "../../../../store/FormSlice";

const StyledToolBar = styled.div`
  display: flex;
  position: fixed;
  z-index: 5;
  left: 1043px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 50px;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  svg {
    width: 50px;
    color: #4d4949;
  }
  svg:hover {
    background-color: #80808038;
  }
`;

export const ToolBar = () => {
  const dispatch = useDispatch()
  const addNewQuestionForm = (e) => {
    const quizeForm = {
      id: Math.random().toString(),
      isQuestionImportant: false,
      typeOfQuestion: 'Одно из списка'
    };
    dispatch(FormActions.addQuizForm(quizeForm))
  };
  return (
    <StyledToolBar>
      <AiOutlinePlusCircle
        onClick={addNewQuestionForm}
        size={26}
        display={"block"}
        cursor={"pointer"}
      />
      <AiOutlineImport size={26} display={"block"} cursor={"pointer"} />
      <BiText size={26} display={"block"} cursor={"pointer"} />
      <BsCardImage size={26} display={"block"} cursor={"pointer"} />
      <AiOutlineVideoCameraAdd size={26} display={"block"} cursor={"pointer"} />
      <GrChapterAdd size={26} display={"block"} cursor={"pointer"} />
    </StyledToolBar>
  );
};
