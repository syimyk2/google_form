import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { saveToLocalStorage } from '../../utils/helpers/storageHelper'
import { QuizeHeaderBuilder } from './quizeBuilder/QuizeHeaderBuilder'
import { QuizeQuestionBuilder } from './quizeBuilder/quizFormBuilder/QuizeQuestionBuilder'
import { ToolBar } from './quizeBuilder/quizFormBuilder/toolbar/ToolBar'

const QuizBuilder = () => {
   const { quize } = useSelector((state) => state.form)
   useEffect(() => {
      saveToLocalStorage('@quiz-data', quize)
   }, [quize])
   return (
      <MainWrapper>
         <Container>
            <QuizeHeaderBuilder />
            <ToolBar />
            {quize.quizeForms.map((quizeForm) => (
               <QuizeQuestionBuilder
                  key={quizeForm.id}
                  quizeFormId={quizeForm.id}
                  quizeFormAnswerItems={quizeForm.answerItems}
                  isQuestionImportant={quizeForm.isQuestionImportant}
                  typeOfQuestion={quizeForm.typeOfQuestion}
                  question={quizeForm.question}
               />
            ))}
         </Container>
      </MainWrapper>
   )
}
const MainWrapper = styled.main`
   display: flex;
   margin-top: 12px;
`

const Container = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   justify-content: center;
   padding-bottom: 64px;
   width: 800px;
   margin: 0 auto;
`
export default QuizBuilder
