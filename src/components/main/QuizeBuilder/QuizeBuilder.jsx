import React from 'react'
import { Indicate } from './QuizeHeaderBuilder'
import styled from 'styled-components'
import QuizeForm from './QuizeForm'
import QuizeBuilderFooter from './QuizeBuilderFooter'

const QuizeBuilder = () => {
  
  return (
    <QuizeWrapper>
        <Indicate/>
            <div>
                <QuizeForm/>
                <QuizeBuilderFooter/>
            </div>
    </QuizeWrapper>
  )
}

const QuizeWrapper = styled.div`
    display: flex;
    margin: 15px 0 15px;
    width: 700px;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 2px 5px 8px 0px;
    overflow: hidden;
    
    `
   
   
   


export default QuizeBuilder