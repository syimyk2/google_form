import React from 'react'
import styled from 'styled-components'
import QuizeBuilder from '../../QuizeBuilder'
import QuizeHeaderBuilder from './QuizeHeaderBuilder'

const Main = () => {
  return (
    <MainWrapper>
        <Container>
                <QuizeHeaderBuilder/>
                <QuizeBuilder/>
        </Container>
    </MainWrapper>
  )
}
const MainWrapper = styled.main`
display: flex;
margin-top: 12px;

    
`

const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto; 
padding-bottom: 64px;
width: 770px;
    `
export default Main