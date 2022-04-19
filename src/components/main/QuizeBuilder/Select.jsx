import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCaretDown } from "react-icons/ai";
import SelectModal, { ANSWER_SETTINGS } from "./SelectModal";
import { useDispatch } from "react-redux";
import { FormActions } from "../../../store/FormSlice";

const Select = ({ quizeFormId, onSelected, typeOfQuestion }) => {
  const dispatch = useDispatch();
  const [showSelectModal, setShowSelectModal] = useState(null);

  const selectSettingHandler = (selectedSetting) => {
    onSelected(selectedSetting);
  };
  const showSelectHandler = () => {
    setShowSelectModal((prev) => !prev);
  };

  const closeSelectHandler = (e) => {
    dispatch(FormActions.showSelectModal(false));
  };

  return (
    <SelectWrapper onClick={showSelectHandler}>
      <div>
        <img src={typeOfQuestion.icon} alt={typeOfQuestion.title} />
        <div id={quizeFormId}> {typeOfQuestion.title}</div>
        {showSelectModal && (
          <SelectModal
            id={quizeFormId}
            onClose={closeSelectHandler}
            onSelect={selectSettingHandler}
          />
        )}
      </div>
      <AiOutlineCaretDown color="gray" />
    </SelectWrapper>
  );
};

export default Select;

const SelectWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  border: 1px solid #96969682;
  border-radius: 3px;
  padding: 8px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #a598a52d;
    border-color: #9696969e;
  }
  div {
    display: flex;
    align-items: center;
    div {
      margin-left: 8px;
      font-size: 15px;
    }
  }
  img {
    width: 25px;
  }
  &:active {
    background-color: #80808039;
  }
`;
