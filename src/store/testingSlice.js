import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../utils/helpers/storageHelper";
import { getQuizFormData } from "./asyncFunctions";
const quizFromLocal = getFromLocalStorage("@quiz");
const questionsFromLocal = getFromLocalStorage("@questions");
const initialState = {
  status: "pending",
  error: null,
  quizes: [],
  quizData: quizFromLocal || {},
  quizItems: questionsFromLocal || [],
  quiz: { ...questionsFromLocal[0], count: 1 },
  checking: {
    quantity: 0,
    point: 0,
    enteredAnswers: [],
  },
  showScore: false,
};

export const testingSlice = createSlice({
  name: "testing",
  initialState: initialState,
  reducers: {
    selectQuizTest(state, actions) {
      const quizId = actions.payload;
      const testingQuiz = state.quizes.find((quiz) => quiz.id === quizId);
      state.quizData = testingQuiz.quizeData;
    },
    gotoNextQuestion(state) {
      if (state.quiz.count === state.quizItems.length) {
        state.showScore = true
        return;
      }
      state.quiz = {
        ...state.quizItems[state.quiz.count],
        count: state.quiz.count + 1,
      };
    },
    selectAnswerMultupal(state, actions) {
      let { answerId, answerCount } = actions.payload;
      const selectedVariant = state.quiz.answerItems.map((el) => {
        if (el.isVariantCorrect && el.id === answerId) {
          el.isSelected = true;
          if (answerCount === 1 || answerCount === 0) {
            state.checking.quantity = state.checking.quantity + 1;
            state.checking.point = state.checking.point + 10;
          } else {
            state.checking.quantity = state.checking.quantity + 0.1;
            state.checking.point = state.checking.point + 5;
          }
        } else if (el.id === answerId) {
          el.isSelected = true;
        }
        return el;
      });
      state.quiz.answerItems = selectedVariant;
    },
    selectAnswerOneVariant(state, actions) {
      let { answerId, answerCount } = actions.payload;
      console.log(answerCount);
      const selectedVariant = state.quiz.answerItems.map((el) => {
        el.isSelected = false;
        if (
          el.isVariantCorrect &&
          el.id === answerId &&
          answerCount + 1 === 1
        ) {
          state.checking.quantity = state.checking.quantity + 1;
          state.checking.point = state.checking.point + 10;
          el.isSelected = true;
        } else if (el.id === answerId) {
          el.isSelected = true;
        }

        return el;
      });
      state.quiz.answerItems = selectedVariant;
    },
    saveInputsValue(state, actions) {
      const { enteredValue, question } = actions.payload;
      state.checking.enteredAnswers.push({
        question,
        answerToQuestion: enteredValue,
        id: Date.now().toString(),
      });
    },
  },

  //  -------extra reducers-----------
  extraReducers: {
    [getQuizFormData.pending]: (state) => {
      state.status = "loading";
    },
    [getQuizFormData.fulfilled]: (state, actions) => {
      state.status = "resolved";
      state.quizes = actions.payload;
    },
  },
});

export const testingActions = testingSlice.actions;
