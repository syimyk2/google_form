// import React, { useState } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { testingActions } from '../../../store/testingSlice'
// import { testingActions } from '../../../store/testingSlice'
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
   const { selectedQuiz, question, showScore, count } = useSelector(
      (state) => state.testing
   )
   const [answerCount, setAnswerCount] = useState(0)

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

   console.log(selectedQuiz.quizeForms.length, count)

   // useEffect(() => {
   //   // saveToLocalStorage("@questions",selectedQuiz.quizeForms );
   //   saveToLocalStorage("@question", questions);
   //   saveToLocalStorage('@selectedQuiz', selectedQuiz)
   // }, [questions, selectedQuiz]);

   const goToNexQuestionHandler = () => {
      dispatch(testingActions.gotoNextQuestion())
   }

   // ------------changeable content-------------------------
   let changeableContent = null

   switch (selectedQuiz.quizeForms[count].typeOfQuestion.title) {
      case TEXT:
         changeableContent = (
            <AnswerWithText
               id={selectedQuiz.quizeForms[count].id}
               question={selectedQuiz.quizeForms[count].question}
            />
         )
         break
      case SOMEOFLIST:
         changeableContent = selectedQuiz.quizeForms[count].answerItems.map(
            (questionVariant) => (
               <AnswerVariant
                  key={questionVariant.id}
                  id={questionVariant.id}
                  onClick={selectMultipalAnswerHandler}
                  variantValue={questionVariant.variantValue}
                  checked={questionVariant.isSelected}
                  type="checkbox"
                  variant={questionVariant}
               />
            )
         )
         break
      case ONEOFLIST:
         changeableContent = selectedQuiz.quizeForms[count].answerItems.map(
            (questionVariant) => (
               <AnswerVariant
                  key={questionVariant.id}
                  id={questionVariant.id}
                  onClick={selectOneAnswerHandler}
                  variantValue={questionVariant.variantValue}
                  checked={questionVariant.isSelected}
                  variant={questionVariant}
               />
            )
         )
         break
      case TIME:
         changeableContent = (
            <SingleAnswerWrapper
               title={selectedQuiz.quizeForms[count].typeOfQuestion.title}
               question={selectedQuiz.quizeForms[count].question}
               type="time"
            />
         )
         break
      case NUMBER:
         changeableContent = (
            <SingleAnswerWrapper
               title={selectedQuiz.quizeForms[count].typeOfQuestion.title}
               type="tel"
               id="phone"
               name="phone"
               pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
               question={question.question}
            />
         )
         break
      case EMAIL:
         changeableContent = (
            <SingleAnswerWrapper
               title={selectedQuiz.quizeForms[count].typeOfQuestion.title}
               type="email"
               question={question.question}
            />
         )
         break
      case DATE:
         changeableContent = (
            <SingleAnswerWrapper
               title={selectedQuiz.quizeForms[count].typeOfQuestion.title}
               type="date"
               question={selectedQuiz.quizeForms[count].question}
            />
         )
         break
      case NAME:
         changeableContent = (
            <SingleAnswerWrapper
               title={selectedQuiz.quizeForms[count].typeOfQuestion.title}
               type="name"
               question={selectedQuiz.quizeForms[count].question}
            />
         )
         break
      default:
         changeableContent = <h1>Нет вопросов</h1>
         break
   }
   const testButtonValue =
      selectedQuiz.quizeForms.length - 1 === count ? 'Finish' : 'Next Question'
   return (
      <Wrapper>
         <Indicate className="test-indicate" />
         <Container>
            {showScore ? (
               <ScorePoints />
            ) : (
               <>
                  <QuestionWrapper>
                     {selectedQuiz.quizeForms[count].isQuestionImportant && (
                        <span>*</span>
                     )}
                     <h1>{selectedQuiz.quizeForms[count].question}</h1>
                  </QuestionWrapper>

                  <VariantAnswersContainer>
                     {changeableContent}
                  </VariantAnswersContainer>
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
   /* height: 380px; */
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
   /* align-items: center; */
   /* height: 100%; */
   flex-direction: column;
   justify-content: space-evenly;
`
