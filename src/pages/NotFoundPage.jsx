import React from 'react'
import styled from 'styled-components'
import FlexBox from '../components/UI/Flexbox'

const NotFoundPage = () => {
   return (
      <FlexBox height="100vh" align="center">
         <NotFoundPageWrapper>
            <div>Page not found !</div>
         </NotFoundPageWrapper>
      </FlexBox>
   )
}

export default NotFoundPage
const NotFoundPageWrapper = styled.div`
   display: flex;
   width: 500px;
   height: 60vh;
   margin: 0 auto;
   align-items: center;
   justify-content: center;
   background-color: #00ffff57;
   color: #603c3c;
   font-size: 40px;
   font-weight: 500;
`
