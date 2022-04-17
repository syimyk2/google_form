import React, { useState,useEffect } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/helpers/storageHelper";

const useInput = (RegExp, showmodal) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enterdNameTouch, setEnteredNameTouch] = useState(null);
  let enteredNameIsValid = RegExp && RegExp.test(enteredValue);
  
  const nameInputIsValid = enterdNameTouch && !enteredNameIsValid;
  useEffect(() => {  
    const localData = getFromLocalStorage(enteredValue)
    setEnteredValue( localData ? localData : '')
  }, [])
  
  const inputBlurHandler = () => {
    setEnteredNameTouch(true);
  };
  const changeInputHandler = (e) => {
    setEnteredValue(e.target.value);
    showmodal && showmodal(true);
    if (e.target.name === "email") {
      setEnteredEmail(e.target.value);
    }
  };

  const nameInputClasses = !nameInputIsValid ? "" : "invalid";

  return {
    enteredValue,
    enterdNameTouch,
    enteredNameIsValid,
    nameInputIsValid,
    changeInputHandler,
    inputBlurHandler,
    setEnteredValue,
    setEnteredNameTouch,
    nameInputClasses,
  };
};

export default useInput;
