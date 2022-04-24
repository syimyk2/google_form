import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { testingActions } from '../../../store/testingSlice'
import { saveToLocalStorage } from '../../../utils/helpers/storageHelper'
import Button from '../../UI/Button'
import { HeadIndicate } from '../QuizeBuilder/QuizeHeaderBuilder'

const QuizeFormTest = ({ id, quiz, title, description }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const goToTestingQuizeFormHandler = (quizId) => {
      navigate(`/testing/${quizId}`)
      dispatch(testingActions.selectQuizTest({ quizId, quiz }))
      saveToLocalStorage('@quiz', quiz)
   }
   return (
      <Wrapper>
         <HeadIndicate />
         <Container>
            <section>
               <div>
                  <h1>{title}</h1>
               </div>
               <div>
                  <p>{description}</p>
               </div>
            </section>
            <div>
               <Button onClick={() => goToTestingQuizeFormHandler(id)}>
                  Пройти тестирование
               </Button>
            </div>
         </Container>
      </Wrapper>
   )
}

export default QuizeFormTest

const Container = styled.div`
   display: flex;
   align-items: center;
   padding: 20px;
   justify-content: space-around;

   color: #034c4ce4;
   section {
      width: 500px;
      word-break: break-all;
   }
`
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   overflow: hidden;
   border-radius: 5px;
   background-color: #fff;
   margin-top: 30px;
`
