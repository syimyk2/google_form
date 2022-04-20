import React from 'react'
import FlexBox from '../../UI/Flexbox'
import BodyOfTesstingForm from './BodyOfTesstingForm'
import HeadOfTestingForm from './HeadOfTestingForm'

const ContainerTestingForm = () => {
  return (
    <FlexBox direction='column' height='90vh' justify ='space-between' margin='0 auto'>
        <HeadOfTestingForm/>
        <BodyOfTesstingForm/>
    </FlexBox>
  )
}

export default ContainerTestingForm