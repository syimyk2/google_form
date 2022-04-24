import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateForms from '../components/pages/CreateForms'
import NotFoundPage from '../components/pages/NotFoundPage'
import Loading from '../components/UI/Loading'

const HomePage = React.lazy(() => import('../components/pages/HomePage'))
const Main = React.lazy(() => import('../components/main/Main'))
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
            <Route path="/" element={<HomePage />} />
            <Route path="quiz-create" element={<CreateForms />}>
               <Route path="/quiz-create" element={<Main />} />
               <Route path="quiz-forms" element={<QuizFormsPage />} />
            </Route>
            <Route path="testing/:id" element={<PassingQuizPage />} />

            <Route path="*" element={<NotFoundPage />} />
         </Routes>
      </Suspense>
   )
}
