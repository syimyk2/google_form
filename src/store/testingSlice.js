/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { getFromLocalStorage } from '../utils/helpers/storageHelper'
import { getQuizFormData } from './asyncFunctions'

// const questionFromLocal = getFromLocalStorage('@question')
// const questionsFromLocal = getFromLocalStorage('@questions')
const selectedQuizFromLocal = getFromLocalStorage('@selectedQuiz')
const selectedQuiz = getFromLocalStorage('@quiz')
console.log(selectedQuizFromLocal)

const initialState = {
   status: 'pending',
   error: null,
   quizes: [],
   selectedQuiz: selectedQuiz || {},
   questions: [],
   question: {},
   checking: {
      quantity: 0,
      point: 0,
      enteredAnswers: [],
   },
   count: 0,
   showScore: false,
}

export const testingSlice = createSlice({
   name: 'testing',
   initialState,
   reducers: {
      selectQuizTest(state, actions) {
         const { quiz } = actions.payload
         state.selectedQuiz = quiz
      },
      gotoNextQuestion(state) {
         if (state.count === state.selectedQuiz.quizeForms.length - 1) {
            state.showScore = true
            return
         }
         state.count += 1
      },
      selectAnswerMultupal(state, actions) {
         const { answerId, answerCount } = actions.payload
         const selectedVariant = state.quiz.answerItems.map((el) => {
            if (el.isVariantCorrect && el.id === answerId) {
               // eslint-disable-next-line no-param-reassign
               el.isSelected = true
               if (answerCount === 1 || answerCount === 0) {
                  state.checking.quantity += 1
                  state.checking.point += 10
               } else {
                  state.checking.quantity += 0.1
                  state.checking.point += 5
               }
            } else if (el.id === answerId) {
               // eslint-disable-next-line no-param-reassign
               el.isSelected = true
            }
            return el
         })
         state.quiz.answerItems = selectedVariant
      },
      selectAnswerOneVariant(state, actions) {
         const { answerId, answerCount } = actions.payload
         console.log(answerCount)
         const selectedVariant = state.quiz.answerItems.map((el) => {
            // eslint-disable-next-line no-param-reassign
            el.isSelected = false
            if (
               el.isVariantCorrect &&
               el.id === answerId &&
               answerCount + 1 === 1
            ) {
               state.checking.quantity += 1
               state.checking.point += 10
               el.isSelected = true
            } else if (el.id === answerId) {
               el.isSelected = true
            }

            return el
         })
         state.quiz.answerItems = selectedVariant
      },
      saveInputsValue(state, actions) {
         const { enteredValue, question } = actions.payload
         state.checking.enteredAnswers.push({
            question,
            answerToQuestion: enteredValue,
            id: Date.now().toString(),
         })
      },
   },

   //  -------extra reducers-----------
   extraReducers: {
      [getQuizFormData.pending]: (state) => {
         state.status = 'loading'
      },
      [getQuizFormData.fulfilled]: (state, actions) => {
         state.status = 'resolved'
         state.quizes = actions.payload
      },
   },
})

export const testingActions = testingSlice.actions
