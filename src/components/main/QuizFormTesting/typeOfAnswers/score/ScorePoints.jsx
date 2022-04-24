import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { testingActions } from '../../../../../store/testingSlice'
import Button from '../../../../UI/Button'
import FlexBox from '../../../../UI/Flexbox'

const ScorePoints = () => {
   const dispatch = useDispatch()
   const { checking, selectedQuiz } = useSelector((state) => state.testing)
   const navigate = useNavigate()
   const goBackTestsHandler = () => {
      navigate('/quiz/quiz-forms', { replace: true })
      localStorage.removeItem('@quiz')
      dispatch(testingActions.closeScore())
   }
   return (
      <FlexBox margin="0auto" padding="30px">
         <WrapperScore>
            <div>
               <h1>
                  Correct answers{checking.quantity} in
                  {selectedQuiz.quizeForms.length}
               </h1>
               <h2>Your Point {checking.point}</h2>
            </div>
            <div>
               <Button onClick={goBackTestsHandler}>Go Back to Tests</Button>
            </div>
         </WrapperScore>
      </FlexBox>
   )
}

export default ScorePoints

const WrapperScore = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #4a06f568;
   width: 700px;
   margin: 0 auto;
   padding: 40px;
   border-radius: 8px;
   div {
      padding: 20px;
   }
`
