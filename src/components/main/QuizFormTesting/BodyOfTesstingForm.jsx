import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RiErrorWarningLine } from 'react-icons/ri'
import { testingActions } from '../../../store/testingSlice'
import {
   DATE,
   EMAIL,
   NAME,
   NUMBER,
   ONEOFLIST,
   SOMEOFLIST,
   TEXT,
   TIME,
} from '../../../utils/constants/general'
import Button from '../../UI/Button'
import { Indicate } from '../QuizeBuilder/QuizeHeaderBuilder'
import AnswerVariant from './typeOfAnswers/AnswerVariant'
import { AnswerWithText } from './typeOfAnswers/AnswerWithText'
import ScorePoints from './typeOfAnswers/score/ScorePoints'
import { SingleAnswerWrapper } from './typeOfAnswers/SingleAnswerWrapper'

const BodyOfTesstingForm = () => {
   const dispatch = useDispatch()
   const { selectedQuiz, showScore, count, showAlert } = useSelector(
      (state) => state.testing
   )
   const [answerCount, setAnswerCount] = useState(0)
   const QUESTION = selectedQuiz.quizeForms[count]

   const selectMultipalAnswerHandler = (answerId, selectedVariant) => {
      if (selectedVariant.isVariantCorrect) {
         setAnswerCount((prev) => prev + 1)
      }
      dispatch(testingActions.selectAnswerMultupal({ answerId, answerCount }))
   }

   const selectOneAnswerHandler = (answerId, selectedVariant) => {
      if (selectedVariant.isVariantCorrect) {
         setAnswerCount((prev) => prev + 1)
      }
      dispatch(testingActions.selectAnswerOneVariant({ answerId, answerCount }))
   }

   const goToNexQuestionHandler = () => {
      dispatch(testingActions.gotoNextQuestion())
   }
   useEffect(() => {
      dispatch(testingActions.showAlert())
   }, [count])

   // ------------changeable content-------------------------
   let changeableContent = null

   switch (QUESTION.typeOfQuestion.title) {
      case TEXT:
         changeableContent = (
            <AnswerWithText id={QUESTION.id} question={QUESTION.question} />
         )
         break
      case SOMEOFLIST:
         changeableContent = QUESTION.answerItems.map((questionVariant) => (
            <AnswerVariant
               key={questionVariant.id}
               id={questionVariant.id}
               onClick={selectMultipalAnswerHandler}
               variantValue={questionVariant.variantValue}
               checked={questionVariant.isSelected}
               type="checkbox"
               variant={questionVariant}
            />
         ))
         break
      case ONEOFLIST:
         changeableContent = QUESTION.answerItems.map((questionVariant) => (
            <AnswerVariant
               key={questionVariant.id}
               id={questionVariant.id}
               onClick={selectOneAnswerHandler}
               variantValue={questionVariant.variantValue}
               checked={questionVariant.isSelected}
               variant={questionVariant}
            />
         ))
         break
      case TIME:
         changeableContent = (
            <SingleAnswerWrapper
               title={QUESTION.typeOfQuestion.title}
               question={QUESTION.question}
               type="time"
            />
         )
         break
      case NUMBER:
         changeableContent = (
            <SingleAnswerWrapper
               title={QUESTION.typeOfQuestion.title}
               type="tel"
               id="phone"
               name="phone"
               pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
               question={QUESTION.question}
            />
         )
         break
      case EMAIL:
         changeableContent = (
            <SingleAnswerWrapper
               title={QUESTION.typeOfQuestion.title}
               type="email"
               question={QUESTION.question}
            />
         )
         break
      case DATE:
         changeableContent = (
            <SingleAnswerWrapper
               title={QUESTION.typeOfQuestion.title}
               type="date"
               question={QUESTION.question}
            />
         )
         break
      case NAME:
         changeableContent = (
            <SingleAnswerWrapper
               title={QUESTION.typeOfQuestion.title}
               type="name"
               question={QUESTION.question}
            />
         )
         break
      default:
         changeableContent = <h1>Нет вопросов</h1>
         break
   }
   const testButtonValue =
      selectedQuiz.quizeForms.length - 1 === count ? 'Finish' : 'Next Question'
   const WarningAlert = showAlert && (
      <WarninAlert>
         <RiErrorWarningLine />
         <p>It is an important question!</p>
      </WarninAlert>
   )

   return (
      <Wrapper>
         <Indicate className="test-indicate" />
         <Container>
            {showScore ? (
               <ScorePoints />
            ) : (
               <>
                  <QuestionWrapper>
                     {QUESTION.isQuestionImportant && <span>*</span>}
                     <h1>{QUESTION.question}</h1>
                  </QuestionWrapper>

                  <VariantAnswersContainer>
                     {changeableContent}
                  </VariantAnswersContainer>
                  {WarningAlert}
                  <div className="button-container">
                     <Button onClick={goToNexQuestionHandler}>
                        {testButtonValue}
                     </Button>
                  </div>
               </>
            )}
         </Container>
      </Wrapper>
   )
}

export default BodyOfTesstingForm

const Container = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;
   & .button-container {
      width: 860px;
      display: flex;
      justify-content: center;
      padding: 20px;
   }
`
const QuestionWrapper = styled.section`
   padding: 20px 8px 20px 20px;
   width: 860px;
   display: flex;
   align-items: center;
   word-break: break-all;
   font-size: 14px;
   color: #034c4ce4;
   span {
      color: crimson;
      font-size: 25px;
      padding: 8px;
   }
`
const Wrapper = styled.div`
   display: flex;
   overflow: hidden;
   width: 900px;
   border-radius: 5px;
   background-color: #fff;
   margin: 0 auto;
   margin-top: 30px;
   .test-indicate {
      background-color: blue;
   }
`
const VariantAnswersContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`
const WarninAlert = styled.div`
   display: flex;
   align-items: center;
   color: crimson;
   padding-left: 20px;
   svg {
      color: crimson;
      font-size: 30px;
   }
   p {
      padding-left: 10px;
   }
`
