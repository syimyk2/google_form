import { configureStore } from '@reduxjs/toolkit'
import { formSlice } from './formSlice'
import { testingSlice } from './testingSlice'

const store = configureStore({
   reducer: {
      form: formSlice.reducer,
      testing: testingSlice.reducer,
   },
})

export default store
