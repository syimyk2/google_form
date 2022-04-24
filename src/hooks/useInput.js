import { useState } from 'react'

const useInput = (regexp) => {
   const [enteredValue, setEnteredValue] = useState('')
   const [enterdNameTouch, setEnteredNameTouch] = useState(null)
   const enteredNameIsValid = regexp && regexp.test(enteredValue)

   const nameInputIsValid = enterdNameTouch && !enteredNameIsValid

   const inputBlurHandler = () => {
      setEnteredNameTouch(true)
   }
   const changeInputHandler = (e) => {
      setEnteredValue(e.target.value)
   }
   const clearInputValue = () => {
      setEnteredValue('')
   }

   const nameInputClasses = !nameInputIsValid ? '' : 'invalid'

   return {
      enteredValue,
      enterdNameTouch,
      enteredNameIsValid,
      nameInputIsValid,
      nameInputClasses,
      changeInputHandler,
      inputBlurHandler,
      clearInputValue,
      setEnteredValue,
   }
}

export default useInput
