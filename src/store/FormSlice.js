import { createSlice } from '@reduxjs/toolkit'
import { SOMEOFLIST } from '../utils/constants/general'
import { getFromLocalStorage } from '../utils/helpers/storageHelper'
import { saveQuizFormData } from './asyncFunctions'

const localData = getFromLocalStorage('@quiz-data')
const initialState = {
   status: 'pending',
   quize: localData || {
      quizeForms: [],
   },
   answersSettings: [],
}

export const formSlice = createSlice({
   name: 'form',
   initialState,
   reducers: {
      // -----quize form title and descriptions action --------
      saveQuizTitileAndDescription(state, action) {
         const { quizTitleValue, quizDescriptionValue } = action.payload
         state.quize.quizTitle = quizTitleValue
         state.quize.quizDescription = quizDescriptionValue
      },
      saveQuizData(state) {
         state.quize.quizeForms = []
      },

      // ---------forms actions-----
      addQuizForm(state, actions) {
         state.quize.quizeForms = [
            ...state.quize.quizeForms,
            {
               ...actions.payload,
               answerItems: [{ id: Math.random().toString() }],
            },
         ]
      },
      deleteQuizForm(state, actions) {
         const formId = actions.payload
         const index = state.quize.quizeForms.findIndex(
            (el) => el.id === formId
         )
         state.quize.quizeForms.splice(index, 1)
      },
      duplicateQuizForm(state, actions) {
         const formId = actions.payload
         const focusedFormItem = state.quize.quizeForms.find(
            (quizeForm) => quizeForm.id === formId
         )
         const index = state.quize.quizeForms.findIndex(
            (el) => el.id === formId
         )
         state.quize.quizeForms.splice(index + 1, 0, {
            ...focusedFormItem,
            id: Math.random().toString(),
         })
      },
      addFormQuestion(state, actions) {
         const { formId, questionValue } = actions.payload
         state.quize.quizeForms.map((el) => {
            if (el.id === formId) {
               // eslint-disable-next-line no-param-reassign
               el.question = questionValue
            }
            return el
         })
      },
      selectTypeOfQuestion(state, actions) {
         const { selectedType, quizeFormId } = actions.payload
         state.quize.quizeForms.map((quizeForm) => {
            if (quizeForm.id === quizeFormId) {
               // eslint-disable-next-line no-param-reassign
               quizeForm.typeOfQuestion = selectedType
               // eslint-disable-next-line array-callback-return
               quizeForm.answerItems.map((el) => {
                  // eslint-disable-next-line no-param-reassign
                  el.isVariantCorrect = false
               })
            }
            return quizeForm
         })
      },
      setQuestionImportant(state, actions) {
         const formId = actions.payload
         state.quize.quizeForms.map((quizeForm) => {
            if (quizeForm.id === formId) {
               // eslint-disable-next-line no-param-reassign
               quizeForm.isQuestionImportant = !quizeForm.isQuestionImportant
            }
            return quizeForm
         })
      },

      // -----------question variants actions ------------
      addVariants(state, actions) {
         const { formId, quizeVariants } = actions.payload
         state.quize.quizeForms.map((quizeForm) => {
            if (quizeForm.id === formId) {
               quizeForm.answerItems.push({
                  ...quizeVariants,
                  count: quizeForm.answerItems.length + 1,
               })
            }
            return quizeForm
         })
      },
      deleteVariants(state, actions) {
         const { formId, itemId } = actions.payload
         const focusedFormItem = state.quize.quizeForms.find(
            (el) => el.id === formId
         )
         const index = focusedFormItem.answerItems.findIndex(
            (el) => el.id === itemId
         )
         focusedFormItem.answerItems.splice(index, 1)
      },
      saveVariantsValue(state, actions) {
         const { formId, itemId, variantValue } = actions.payload
         const focusedFormItem = state.quize.quizeForms.find(
            (el) => el.id === formId
         )
         focusedFormItem.answerItems.map((el) => {
            if (el.id === itemId) {
               // eslint-disable-next-line no-param-reassign
               el.variantValue = variantValue
            }
            return el
         })
      },
      selectVariantAsAcorrect(state, actions) {
         const { formId, itemId } = actions.payload
         const focusedFormItem = state.quize.quizeForms.find(
            (el) => el.id === formId
         )

         if (focusedFormItem.typeOfQuestion.title === SOMEOFLIST) {
            focusedFormItem.answerItems.map((el) => {
               if (el.id === itemId) {
                  // eslint-disable-next-line no-param-reassign
                  el.isVariantCorrect = !el.isVariantCorrect
               }

               return el
            })
         } else {
            focusedFormItem.answerItems.map((el) => {
               // eslint-disable-next-line no-param-reassign
               el.isVariantCorrect = false
               if (el.id === itemId) {
                  // eslint-disable-next-line no-param-reassign
                  el.isVariantCorrect = !el.isVariantCorrect
               }

               return el
            })
         }
      },
      addSettings(state, actions) {
         state.answersSettings = [...actions.payload]
      },
   },
   extraReducers: {
      [saveQuizFormData.fulfilled]: (state) => {
         state.status = 'resolved'
      },
   },
})

export const formActions = formSlice.actions
