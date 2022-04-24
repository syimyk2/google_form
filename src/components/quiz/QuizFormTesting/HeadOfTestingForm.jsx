import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { testingActions } from '../../../store/testingSlice'
import { removeFromLocalStorage } from '../../../utils/helpers/storageHelper'
import Button from '../../UI/Button'
import { HeadIndicate } from '../quizeBuilder/QuizeHeaderBuilder'

const HeadOfTestingForm = ({ title, description }) => {
   const dispatch = useDispatch()

   const navigate = useNavigate()
   const goBackToTestsHandler = () => {
      navigate('/quiz-create/quiz-forms', { replace: true })
      removeFromLocalStorage('@quiz')
      dispatch(testingActions.closeScore())
   }

   return (
      <Wrapper>
         <HeadIndicate />
         <Container>
            <section>
               <div>
                  <h1>{title}</h1>
               </div>
               <hr />
               <div>
                  <p>{description}</p>
               </div>

               <QuizSettings>
                  <span>*</span>
                  <p>Обязательный</p>
               </QuizSettings>
               <div>
                  <Button onClick={goBackToTestsHandler}>GoBack</Button>
               </div>
            </section>
         </Container>
      </Wrapper>
   )
}

const Container = styled.div`
   display: flex;
   align-items: center;
   padding: 20px;
   color: #034c4ce4;
   h1 {
      font-size: 30px;
   }
   hr {
      position: relative;
      left: -50px;
      width: 900px;
   }
   section {
      width: 800px;
      margin: 0 auto;
      word-break: break-all;
      input {
         border: none;
         background-color: #c0bebe85;
         width: 300px;
         padding: 5px;
         border-bottom: groove;
         outline: none;
         &:hover {
            background-color: #ebdeded9;
         }
      }
   }
`
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   overflow: hidden;
   width: 900px;
   border-radius: 5px;
   background-color: #fff;
   margin: 0 auto;
`
const QuizSettings = styled.div`
   display: flex;
   align-items: center;
   justify-content: start;
   & span {
      color: #d90f0fe0;
      font-size: 25px;
      padding-top: 7px;
   }
   & p {
      font-size: 14px;
      color: #f11919e4;
   }
`
export default HeadOfTestingForm
