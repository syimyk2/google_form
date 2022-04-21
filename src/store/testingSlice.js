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
      if(state.quiz.count===state.quizItems.length){
        alert('finsh')
        return
      }
      state.quiz = {
        ...state.quizItems[state.quiz.count],
        count: state.quiz.count+1,
      };
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
