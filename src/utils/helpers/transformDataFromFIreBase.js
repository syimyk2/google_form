/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export const transformDataFromFireBase = (data) => {
   const transformedData = []
   for (const key in data) {
      transformedData.push({
         quizDescription: data[key].quizDescription,
         quizTitle: data[key].quizTitle,
         quizeForms: data[key].quizeForms,
         id: key,
      })
   }

   return transformedData
}
