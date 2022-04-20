import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/constants/general";

export const saveQuizFormData = createAsyncThunk(
  "form/saveQuizFormData",
  async (_ ,{ rejectWithValue,getState }) => {
    const quizeData = getState().form.quize
    // console.log(quizeData);
    try {
      const response = await fetch(`${BASE_URL}/quiz-data.json`, {
        method: "POST",
        headers: { "Content-Type": "aplication/json" },
        body: JSON.stringify(quizeData),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getQuizFormData = createAsyncThunk(
    "testing/getQuizFormData",
    async (_,{ rejectWithValue }) => {
      try {
        const response = await fetch(`${BASE_URL}/quiz-data.json`);
        const result = await response.json();
        // console.log(result);
        if (!response.ok) {
          throw new Error("Something went wrong with Server Firebase!");
        }
        let transformedQuizData = [];
        for (const key in result) {
          transformedQuizData.push({
            quizeData: result[key],
            id: key,
          });
        }
        // console.log(transformedQuizData);
        return transformedQuizData
      } catch (error) {
        rejectWithValue(error.message);
      }
    }
  );
