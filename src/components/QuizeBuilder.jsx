import React from 'react'
import { Indicate } from './Layout/main/QuizeHeaderBuilder'
import styled from 'styled-components'
import {MdOutlineImage}from 'react-icons/md'
import {MdClose}from 'react-icons/md'
import {MdOutlineContentCopy} from 'react-icons/md'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {BsThreeDotsVertical} from 'react-icons/bs'

const QuizeBuilder = () => {
  return (
    <QuizeWrapper>
        <Indicate/>
        <div>
             <BuilderForm>
            <form action="">
                <input type="text" />
                <span className="highlight"></span>
                 <span className="bar"></span>
            </form>
            <MdOutlineImage className='icon-img' />
            <select name="settings" id="">
                <option value=""> Несолько из списка</option>
                <option value="">Один из списка</option>
                <option value="">text</option>
            </select>
        </BuilderForm>
        <QuzeAnswersContainer>
            <AnswerItem>
                <form>
                  <input className='answer-checkbox' type="radio"  name="" id="" />
                  <input className='input' type="text" placeholder='answers' /> 
                  <span className="highlight"></span>
                 <span className="bar"></span>
                </form>
              <MdOutlineImage className='icon-img'/>  
              <MdClose className='icon-close'/>
            </AnswerItem>
            {/* --duplicateted here must be render-- */}
            <AnswerItem>
                <form>
                  <input type="radio" name="" id="" />
                  <input className='input' type="text" placeholder='answers' /> 
                  <span className="highlight"></span>
                 <span className="bar"></span>
                </form>
              <MdOutlineImage className='icon-img'/>  
              <MdClose className='icon-close'/>
            </AnswerItem>
            <AnswerAdder>
                <form action="">
                     <input type="radio" name="" id="" />
                      <input className='input' type="text" disabled ={true}  placeholder ="Добавить вариант"/>
                </form>
                <span>или</span>
                 <span className='btn-other'>добавить вариант "Другое"</span>
               
            </AnswerAdder>  
            <hr />
            <QuizeBuilderFooterOptions>
                <div>
                    <MdOutlineContentCopy/>
                    <RiDeleteBin6Line/>
                </div>
                <div>
                 <span>Обязательный вопрос</span>
                 <input type="checkbox" name="" id="" />
                 <BsThreeDotsVertical/>
                </div>
            </QuizeBuilderFooterOptions>          
        </QuzeAnswersContainer>
        </div>
       



    </QuizeWrapper>
  )
}
const QuizeWrapper = styled.div`
    display: flex;
    margin: 15px 0 15px 0;
    width: 700px;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 2px 5px 8px 0px;
    overflow: hidden;
    
    `
   
    const BuilderForm = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 660px;
        margin: 0 auto;
        padding: 20px;
        .icon-img{
         font-size: 25px;
         color: #656262;
         cursor: pointer;
        }
       & select{
           width: 230px;
            cursor: pointer;
        }
       & input{
            width: 300px;
            border:none;
            border-bottom: 1px solid grey;
            background: #80808049;
            outline: none;
            padding: 10px  0 10px 0;
        }
        & .bar { position:relative; display:block; width:300px; }
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
        left:0%;
        }
        & .bar:after {
        right:50%; 
        }
        & :focus ~ .bar:before, textarea:focus ~ .bar:after {
            width:100%;
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
    `
    const QuzeAnswersContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 660px;
        padding: 20px;
        margin: 0 auto;

    `
    const AnswerItem = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 600px;
        margin: 20px 0 20px;
        .answer-checkbox{
            margin-top: 8px;
        }
        .icon-close{
         font-size: 25px;
         color: #656262;
         cursor: pointer;
        }
        .icon-img{
         font-size: 25px;
         color: #656262;
         cursor: pointer;
        }
      
        & .input{
            width: 500px;
            outline: none;
            border: none;
            padding: 5px ;
            &:hover{
              border-bottom: 1px solid grey;  
            }
        }
        & .bar { position:relative; display:block; width:500px; }
        & .bar:before, .bar:after{
        content:'';
        height:1.5px; 
        width:0;
        bottom:0px; 
        position:absolute;
        background: #611dd6; 
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all;
        }
        & .bar:before {
        left:4%;
        }
        & .bar:after {
        right:0%; 
        }
        & :focus ~ .bar:before, textarea:focus ~ .bar:after {
            width:100%;
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
    
    `
     const AnswerAdder = styled.div`
     display: flex;
     width: 600px;
     align-items: center;
     input{
         cursor: pointer;
         outline: none;
        border: none;
        padding: 5px ;
        &:hover{
        border-bottom: 1px solid grey;  
}
     }
     
     & span{
       padding: 0 0 0 20px;
     }
     & .btn-other{
         &:hover{
             background: #4297dd17;}
         color: #338fda;
         padding: 10px;
         border-radius: 8px;
         cursor: pointer;
     }
     
 `
 const QuizeBuilderFooterOptions =styled.div`
     display: flex;
     flex: end;
     div{
         width: 200px;
         display: flex;
         justify-content: space-between;
     }
 `

export default QuizeBuilder