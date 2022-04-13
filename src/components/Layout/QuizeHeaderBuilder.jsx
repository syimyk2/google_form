import React from 'react'
import styled from 'styled-components'

const QuizeHeaderBuilder = () => {
  return (
    <QuizeWrapper>
        <HeadIndicate/>
        <QuizeHeaderBuilderForm>
            <Indicate/>
             <QuizeBuilderForm>
                 <div>
                     <textarea className='big-textarea'value='new form' name="new-form" id="" />
                     <span className="highlight"></span>
                     <span className="bar"></span>
                 </div>
                 <div>
                    <textarea className='little-textarea' value='description' name="description" id=""/>
                    <span className="highlight"></span>
                     <span className="bar"></span>
                 </div>
             </QuizeBuilderForm>
           
        </QuizeHeaderBuilderForm>
        
        
    </QuizeWrapper>
  )
}
const QuizeWrapper = styled.div`
    display: flex;
    flex-direction:column;
    width: 700px;
    margin: 0 auto;
    border-radius: 8px;
    background: #ffffff;
    overflow: hidden;
`
export const Indicate = styled.div`
    padding: 3px;
    position:relative;
    z-index: 1;
    background-color: #3389f2f4;
  
    `
const HeadIndicate = styled.div`
    padding: 5px;
    position:relative;
    z-index: 2;
    background-color: #4910ab;
  
`
const QuizeBuilderForm = styled.form`
    display: flex;
    flex-direction: column;
    padding-top: 22px;
    padding-bottom: 24px;
    div{
        padding-left: 20px;
        
    }
    & textarea{
        overflow: auto;
        resize: none;
        font-size: 40px;
        -moz-appearance: none;
        font-size:18px;
        padding:10px 10px 10px 0px;
        display:block;
        width:665px;
        border:none;
        border-bottom:1px solid #b2aaaae7;
        &:focus{
            outline: none;
        }
       
            }

       & .bar { position:relative; display:block; width:665px; }
        & .bar:before, .bar:after{
        content:'';
        height:1.5px; 
        width:0;
        bottom:1px; 
        position:absolute;
        background: #611dd6; 
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all;
        }
        & .bar:before {
        left:50%;
        }
        & .bar:after {
        right:50%; 
        }
        & :focus ~ .bar:before, textarea:focus ~ .bar:after {
            width:50%;
         }
        /* active state */
        & :focus ~ .highlight {
        -webkit-animation:inputHighlighter 0.3s ease;
        -moz-animation:inputHighlighter 0.3s ease;
        animation:inputHighlighter 0.3s ease;
        }

        /* ANIMATIONS ================ */
        @-webkit-keyframes inputHighlighter {
            from { background: #5e1dcd; }
        to 	{ width:0; background:transparent; }
        }
        @-moz-keyframes inputHighlighter {
            from { background: #4910ab; }
        to 	{ width:0; background:transparent; }
        }
        @keyframes inputHighlighter {
            from { background: #673ab7; }
        to 	{ width:0; background:transparent; }
        }
    .little-textarea{
        overflow: auto;
        resize: none;
        font-size: 11px;
        padding: 5px 0 0 0px;
        -moz-appearance: none;
         display:block;
        width:665px;
        border:none;
        border-bottom:1px solid #b2aaaae7;
        &:focus{
            outline: none;
        }
       
    }

`
const QuizeHeaderBuilderForm = styled.div`
display: flex;

    
`

export default QuizeHeaderBuilder