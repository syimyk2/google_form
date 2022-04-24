import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateForms from '../components/pages/CreateForms'
import NotFoundPage from '../components/pages/NotFoundPage'
import Loading from '../components/UI/Loading'

const QuizBuilder = React.lazy(() => import('../components/quiz/QuizBuilder'))
const QuizFormsPage = React.lazy(
   () => import('../components/pages/QuizFormsPage')
)
const PassingQuizPage = React.lazy(
   () => import('../components/pages/TestingQuizeFormPage')
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
