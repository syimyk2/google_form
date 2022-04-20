import { createSlice } from "@reduxjs/toolkit";
import { getQuizFormData } from "./asyncFunctions";

const initialState = { status: "pending", error: null, quizes: [], quiz: {} };

export const testingSlice = createSlice({
  name: "testing",
  initialState: initialState,
  reducers: {
    selectQuizTest(state, actions) {
        state.quiz = actions.payload
    },
  },
  extraReducers: {
    [getQuizFormData.pending]: (state) => {
      state.status = "loading";
    },
    [getQuizFormData.fulfilled]: (state, actions) => {
      state.status = "resolved";
      state.quizes = actions.payload;
      console.log(actions.payload);
    },
  },
});

export const testingActions = testingSlice.actions;
