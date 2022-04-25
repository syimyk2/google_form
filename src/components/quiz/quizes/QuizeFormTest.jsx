import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { MdDeleteForever } from 'react-icons/md'
import { testingActions } from '../../../store/testingSlice'
import { saveToLocalStorage } from '../../../utils/helpers/storageHelper'
import Button from '../../UI/Button'
import { deleteQuizFormData } from '../../../store/asyncFunctions'
import { HeadIndicate } from '../quizeBuilder/quizBuilderHeader/QuizeHeaderBuilder'

const QuizeFormTest = ({ id, quiz, title, description }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const goToTestingQuizHandler = (quizId) => {
      navigate(`/testing/${quizId}`)
      dispatch(testingActions.selectQuizTest({ quizId, quiz }))
      saveToLocalStorage('@quiz', quiz)
   }
   const deleteQuizHandler = (quizId) => {
      dispatch(deleteQuizFormData(quizId))
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
               <MdDeleteForever onClick={() => deleteQuizHandler(id)} />
            </div>
            <div>
               <Button onClick={() => goToTestingQuizHandler(id)}>
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
   svg {
      color: grey;
      font-size: 25px;
      cursor: pointer;
      &:hover {
         color: #034c4ce4;
      }
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
