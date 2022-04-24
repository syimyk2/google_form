/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants/general'
import { transformDataFromFireBase } from '../utils/helpers/transformDataFromFIreBase'

export const saveQuizFormData = createAsyncThunk(
   'form/saveQuizFormData',
   async (_, { rejectWithValue, getState }) => {
      const quizeData = getState().form.quize
      try {
         const response = await fetch(`${BASE_URL}/quiz-data.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'aplication/json' },
            body: JSON.stringify(quizeData),
         })
         const result = await response.json()
         console.log(result)
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)

export const getQuizFormData = createAsyncThunk(
   'testing/getQuizFormData',
   async (_, { rejectWithValue }) => {
      try {
         const response = await fetch(`${BASE_URL}/quiz-data.json`)
         const result = await response.json()
         if (!response.ok) {
            throw new Error('Something went wrong with Server Firebase!')
         }
         const transformedData = transformDataFromFireBase(result)
         return transformedData
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
