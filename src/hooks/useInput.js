import { useState, useEffect } from 'react'
import { getFromLocalStorage } from '../utils/helpers/storageHelper'

const useInput = (regexp) => {
   const [enteredValue, setEnteredValue] = useState('')
   const [enterdNameTouch, setEnteredNameTouch] = useState(null)
   const enteredNameIsValid = regexp && regexp.test(enteredValue)

   const nameInputIsValid = enterdNameTouch && !enteredNameIsValid
   useEffect(() => {
      const localData = getFromLocalStorage(enteredValue)
      setEnteredValue(localData || '')
   }, [])

   const inputBlurHandler = () => {
      setEnteredNameTouch(true)
   }
   const changeInputHandler = (e) => {
      setEnteredValue(e.target.value)
   }

   const nameInputClasses = !nameInputIsValid ? '' : 'invalid'

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
