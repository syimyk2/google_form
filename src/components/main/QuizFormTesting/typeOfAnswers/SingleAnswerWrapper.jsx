import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import useInput from '../../../../hooks/useInput'
import { testingActions } from '../../../../store/testingSlice'

export const SingleAnswerWrapper = ({ type, id, title, question }) => {
   const dispatch = useDispatch()
   const { enteredValue, changeInputHandler, clearInputValue } = useInput()

   const saveInputValueHandler = () => {
      if (enteredValue.trim().length === 0) {
         return
      }
      dispatch(testingActions.saveInputsValue({ question, enteredValue }))
      clearInputValue()
   }
   return (
      <Wrapper type={type}>
         <p>{title}</p>
         <input
            type={type}
            name="singleanswer"
            onChange={changeInputHandler}
            value={enteredValue}
            onBlur={saveInputValueHandler}
            id={id}
            required
         />
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   font-size: 14px;
   padding: 20px 0 20px;
   width: 400px;
   padding-left: 50px;
   color: grey;
   & input {
      width: 200px;
      outline: none;
      border: none;
      border-bottom-style: ridge;
      color: grey;
   }
`
