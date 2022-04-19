import { createSlice } from "@reduxjs/toolkit";
import { SOMEOFLIST } from "../utils/constants/general";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils/helpers/storageHelper";

const initialState = {
  quize: {},
  quizeForms: [],
  answersSettings: [],
};

export const FormSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    // -----quize form title and descriptions action --------
    saveQuizTitileAndDescription(state, action) {
      const { quizTitleValue, quizDescriptionValue } = action.payload;
      state.quize.quizTitle = quizTitleValue;
      state.quize.quizDescription = quizDescriptionValue;
    },
    saveQuizData(state, actions) {
      state.quize.quizeForms = state.quizeForms;
    },

    // ---------forms actions-----
    addQuizForm(state, actions) {
      state.quizeForms = [
        ...state.quizeForms,
        {
          ...actions.payload,
          answerItems: [{ id: Math.random().toString() }],
        },
      ];
    },
    deleteQuizForm(state, actions) {
      let formId = actions.payload;
      let index = state.quizeForms.findIndex((el) => el.id === formId);
      state.quizeForms.splice(index, 1);
    },
    duplicateQuizForm(state, actions) {
      let formId = actions.payload;
      let focusedFormItem = [...state.quizeForms].find(
        (quizeForm) => quizeForm.id === formId
      );
      let index = state.quizeForms.findIndex((el) => el.id === formId);
      const newArray = state.quizeForms.splice(index + 1, 0, {
        ...focusedFormItem,
        id: Math.random().toString(),
      });
    },
    addFormQuestion(state, actions) {
      let { formId, questionValue } = actions.payload;
      state.quizeForms.map((quizeForm) => {
        if (quizeForm.id === formId) {
          quizeForm.question = questionValue;
        }
        return quizeForm;
      });
    },
    selectTypeOfQuestion(state, actions) {
      let { selectedType, quizeFormId } = actions.payload;
      state.quizeForms.map((quizeForm) => {
        if (quizeForm.id === quizeFormId) {
          quizeForm.typeOfQuestion = selectedType;
          quizeForm.answerItems.map((el) => {
            el.isVariantCorrect = false;
          });
        }
        return quizeForm;
      });
    },
    setQuestionImportant(state, actions) {
      let formId = actions.payload;
      state.quizeForms.map((quizeForm) => {
        if (quizeForm.id === formId) {
          quizeForm.isQuestionImportant = !quizeForm.isQuestionImportant;
        }
        return quizeForm;
      });
    },

    // -----------question variants actions ------------
    addVariants(state, actions) {
      let { formId, quizeVariants } = actions.payload;
      state.quizeForms.map((quizeForm) => {
        if (quizeForm.id === formId) {
          quizeForm.answerItems.push({
            ...quizeVariants,
            count: quizeForm.answerItems.length + 1,
          });
        }
        return quizeForm;
      });
    },
    deleteVariants(state, actions) {
      let { formId, itemId } = actions.payload;
      let focusedFormItem = state.quizeForms.find((el) => el.id === formId);
      let index = focusedFormItem.answerItems.findIndex(
        (el) => el.id === itemId
      );
      focusedFormItem.answerItems.splice(index, 1);
    },
    saveVariantsValue(state, actions) {
      let { formId, itemId, variantValue } = actions.payload;
      let focusedFormItem = state.quizeForms.find((el) => el.id === formId);
      focusedFormItem.answerItems.map((el) => {
        if (el.id === itemId) {
          el.variantValue = variantValue;
        }
        return el;
      });
    },
    selectVariantAsAcorrect(state, actions) {
      let { formId, itemId } = actions.payload;
      let focusedFormItem = state.quizeForms.find((el) => el.id === formId);

      if (focusedFormItem.typeOfQuestion.title === SOMEOFLIST) {
        focusedFormItem.answerItems.map((el) => {
          if (el.id === itemId) {
            el.isVariantCorrect = !el.isVariantCorrect;
          }

          return el;
        });
      } else {
        focusedFormItem.answerItems.map((el) => {
          el.isVariantCorrect = false;
          if (el.id === itemId) {
            el.isVariantCorrect = !el.isVariantCorrect;
          }

          return el;
        });
      }
    },
    addSettings(state, actions) {
      state.answersSettings = [...actions.payload];
    },
  },
});

export const FormActions = FormSlice.actions;
