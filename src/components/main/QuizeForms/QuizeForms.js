import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getQuizFormData } from '../../../store/asyncFunctions'
import { testingActions } from '../../../store/testingSlice'
import { removeFromLocalStorage } from '../../../utils/helpers/storageHelper'
import Loading from '../../UI/Loading'
import QuizeFormTest from './QuizeFormTest'

const QuizeForms = () => {
   const dispatch = useDispatch()
   const { quizes, status } = useSelector((state) => state.testing)

   useEffect(() => {
      removeFromLocalStorage('@quiz')
      dispatch(testingActions.closeScore())
      dispatch(getQuizFormData())
   }, [])
   const loading = status === 'loading' && <Loading />
   return (
      <QuizFormsContainer>
         {loading}
         {quizes.map((quiz) => (
            <QuizeFormTest
               key={quiz.id}
               id={quiz.id}
               title={quiz.quizTitle}
               description={quiz.quizDescription}
               quiz={quiz}
            />
         ))}
      </QuizFormsContainer>
   )
}

export default QuizeForms

const QuizFormsContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 800px;
   /* height: 100vmin; */
   background-color: transparent;
   margin: 0 auto;
   padding: 40px 20px 20px;
`
