import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../components/main/Main'
import CreateForms from '../components/pages/CreateForms'
import HomePage from '../components/pages/HomePage'
import NotFoundPage from '../components/pages/NotFoundPage'
import PassingQuizPage from '../components/pages/TestingQuizeFormPage'
import QuizFormsPage from '../components/pages/QuizFormsPage'
// ------here componenets  must be lazy loading----------
export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="quiz" element={<CreateForms />}>
            <Route path="quiz-forms" element={<QuizFormsPage />} />
            <Route path="quiz-create" element={<Main />} />
         </Route>
         <Route path="testing/:id" element={<PassingQuizPage />} />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   )
}
