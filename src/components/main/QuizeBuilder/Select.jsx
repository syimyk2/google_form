import React, {  useState } from "react";
import styled from "styled-components";
import { AiOutlineCaretDown } from "react-icons/ai";
import SelectModal, { ANSWER_SETTINGS } from "./SelectModal";
import { useDispatch } from "react-redux";
import { FormActions } from "../../../store/FormSlice";

const Select = ({ quizeFormId, onSelected }) => {
  const dispatch = useDispatch();
  const [showSelectModal, setShowSelectModal] = useState(null);
  const [selectedSetting, setSelectedSetting] = useState(ANSWER_SETTINGS[0]);

  const selectSettingHandler = (selectedSetting) => {
    setSelectedSetting(selectedSetting);
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
        <img src={selectedSetting.icon} alt={selectedSetting.title} />
        <div id={quizeFormId}> {selectedSetting.title}</div>
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
  border: 1px solid gray;
  border-radius: 3px;
  padding: 8px;
  align-items: center;
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
