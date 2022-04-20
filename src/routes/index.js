import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateForms from "../components/pages/CreateForms";
import HomePage from "../components/pages/HomePage";
import NotFoundPage from "../components/pages/NotFoundPage";
import PassingQuizPage from "../components/pages/PassingQuizPage";
import QuizFormsPage from "../components/pages/QuizFormsPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="quiz-create" element={<CreateForms />} />
      <Route path="quiz-forms" element={<QuizFormsPage />} />
      <Route path="quiz-passing" element={<PassingQuizPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
