import React, { useEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { FormActions } from "../../../store/FormSlice";
import email from "../../../assets/icon/email.svg";
import time from "../../../assets/icon/time.svg";
import date from "../../../assets/icon/date.svg";
import check from "../../../assets/icon/check.svg";
import radio from "../../../assets/icon/radio.svg";
import text from "../../../assets/icon/text-icon.svg";
import name from "../../../assets/icon/name.svg";
import phone from "../../../assets/icon/phone.svg";

export const ANSWER_SETTINGS = [
  { id: "00i1", icon: radio, title: "Один из списка" },
  { id: "00i2", icon: check, title: "Несколько из списка" },
  { id: "00i3", icon: date, title: "Дата" },
  { id: "00i4", icon: time, title: "Время" },
  { id: "00i85", icon: email, title: "Электронная почта" },
  { id: "00i650", icon: text, title: "Текст" },
  { id: "00i8701", icon: phone, title: "Номер" },
  { id: "00i8601", icon: name, title: "Имя" },
];

const Backdrop = (props) => {
  return <Backdropp onClick={() => props.onClose} />;
};

const Modal = (props) => {
  const dispatch = useDispatch();
  const selectSettingHandler = (selectedSetting) => {
    props.onSelect(selectedSetting);
  };
  useEffect(() => {
    dispatch(FormActions.addSettings(ANSWER_SETTINGS));
  }, []);
  return (
    <CardModalWrapper>
      <ul id={props.id}>
        {ANSWER_SETTINGS.map((setting) => (
          <SelecSettingOption
            onClick={() => selectSettingHandler(setting)}
            key={setting.id}
          >
            <img src={setting.icon} alt="ico" />
            <span>{setting.title}</span>
          </SelecSettingOption>
        ))}
      </ul>
    </CardModalWrapper>
  );
};

const SelectModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal onClose={props.onClose} id={props.id} onSelect={props.onSelect}>
          {props.children}
        </Modal>,
        document.getElementById("modal-root")
      )}
      ,
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default SelectModal;

const CardModalWrapper = styled.div`
  position: fixed;
  top: 13vh;
  left: 10%;
  width: 80%;
  z-index: 10;
  overflow: hidden;
  background: rgb(255, 251, 251);
  border-radius: 5px;
  cursor: pointer;
  overflow-y: scroll;
  height: 500px;

  ul {
    list-style: none;
    padding: 0;
  }

  @media (min-width: 80px) {
    & {
      left: calc(69% - 10rem);
      width: 16rem;
    }
  }
`;
const SelecSettingOption = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  &:hover {
    background-color: #8080802a;
  }

  span {
    padding-left: 10px;
  }
  img {
    width: 25px;
  }
`;

const Backdropp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0);
  scroll-behavior: none;
`;
