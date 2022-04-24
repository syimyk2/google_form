/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { getFromLocalStorage } from '../utils/helpers/storageHelper'
import { getQuizFormData } from './asyncFunctions'

const selectedQuiz = getFromLocalStorage('@quiz')

const initialState = {
   status: 'pending',
   quizes: [],
   selectedQuiz: selectedQuiz || {},
   checking: {
      quantity: 0,
      point: 0,
      enteredAnswers: [],
   },
   count: 0,
   showScore: false,
   showAlert: false,
   isSelectedAnswer: false,
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
         const question = state.selectedQuiz.quizeForms
         if (state.count + 1 === question.length) {
            state.showScore = true
            state.count = 0
         } else if (
            question[state.count].isQuestionImportant &&
            !state.isSelectedAnswer
         ) {
            state.showAlert = true
         } else {
            state.count += 1
         }
      },
      selectAnswerMultupal(state, actions) {
         const question = state.selectedQuiz.quizeForms
         const { answerId, answerCount } = actions.payload
         state.isSelectedAnswer = true
         const selectedVariant = question[state.count].answerItems.map((el) => {
            if (el.isVariantCorrect && el.id === answerId) {
               // eslint-disable-next-line no-param-reassign
               el.isSelected = true
               if (answerCount === 1 || answerCount === 0) {
                  state.checking.quantity += 1
                  state.checking.point += 10
               } else {
                  state.checking.quantity += 0.5
                  state.checking.point += 5
               }
            } else if (el.id === answerId) {
               // eslint-disable-next-line no-param-reassign
               el.isSelected = true
            }
            return el
         })
         question[state.count].answerItems = selectedVariant
      },
      selectAnswerOneVariant(state, actions) {
         const question = state.selectedQuiz.quizeForms
         const { answerId, answerCount } = actions.payload
         const selectedVariant = question[state.count].answerItems.map((el) => {
            // eslint-disable-next-line no-param-reassign
            el.isSelected = false
            if (
               el.isVariantCorrect &&
               el.id === answerId &&
               answerCount + 1 === 1
            ) {
               state.isSelectedAnswer = true
               state.checking.quantity += 1
               state.checking.point += 10
               el.isSelected = true
            } else if (el.id === answerId) {
               el.isSelected = true
            }

            return el
         })
         state.isSelectedAnswer = true
         question[state.count].answerItems = selectedVariant
      },
      saveInputsValue(state, actions) {
         state.isSelectedAnswer = true
         const { enteredValue, question } = actions.payload
         state.checking.enteredAnswers.push({
            question,
            answerToQuestion: enteredValue,
            id: Date.now().toString(),
         })
      },
      closeScore(state) {
         state.showScore = false
      },
      showAlert(state) {
         state.isSelectedAnswer = false
         state.showAlert = false
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
