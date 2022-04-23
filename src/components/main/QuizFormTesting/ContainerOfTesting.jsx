import React from 'react'
import { useSelector } from 'react-redux'
import FlexBox from '../../UI/Flexbox'
import BodyOfTesstingForm from './BodyOfTesstingForm'
import HeadOfTestingForm from './HeadOfTestingForm'

const ContainerOfTesting = () => {
   // const dispatch = useDispatch()

   const { selectedQuiz, quizItems } = useSelector((state) => state.testing)
   console.log(quizItems)

   return (
      <FlexBox direction="column" justify="space-between" margin="0 auto">
         <HeadOfTestingForm
            title={selectedQuiz.quizTitle}
            description={selectedQuiz.quizDescription}
         />
         <BodyOfTesstingForm />
      </FlexBox>
   )
}

export default ContainerOfTesting
