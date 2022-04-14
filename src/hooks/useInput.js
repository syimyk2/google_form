import React,{useState} from 'react'

const useInput = (RegExp, showmodal) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enterdNameTouch, setEnteredNameTouch] = useState(null);
    let enteredNameIsValid = RegExp.test(enteredValue);

    const nameInputIsValid = enterdNameTouch && !enteredNameIsValid




    const inputBlurHandler = () => {

      setEnteredNameTouch(true)

    };
    const changeInputHandler = (e) => {
      setEnteredValue(e.target.value);
      showmodal(true)
      if(e.target.name === 'email'){
        setEnteredEmail(e.target.value)
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

  }

}

export default useInput
