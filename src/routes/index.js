import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import Loading from '../components/UI/Loading'

const CreateForms = React.lazy(() => import('../pages/CreateForms'))
const QuizBuilder = React.lazy(
   () => import('../components/quiz/quizeBuilder/QuizBuilder')
)
const QuizFormsPage = React.lazy(() => import('../pages/QuizFormsPage'))
const PassingQuizPage = React.lazy(
   () => import('../pages/TestingQuizeFormPage')
)
export const AppRoutes = () => {
   return (
      <Suspense fallback={<Loading />}>
         <Routes>
            <Route path="/" element={<CreateForms />}>
               <Route path="/" element={<QuizBuilder />} />
               <Route path="quiz-forms" element={<QuizFormsPage />} />
            </Route>
            <Route path="testing/:id" element={<PassingQuizPage />} />

            <Route path="*" element={<NotFoundPage />} />
         </Routes>
      </Suspense>
   )
}
