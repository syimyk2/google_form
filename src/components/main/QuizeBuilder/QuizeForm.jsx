import React from 'react'
import QuizeAnswers from './QuizeAnswers'
import {MdOutlineImage}from 'react-icons/md'
import styled from 'styled-components'
import Select from './Select'
import { useSelector } from 'react-redux'


const QuizeForm = () => {
    const {selectedSetting, showSelectModal} = useSelector((state)=>state.form)

  return (
      <>
       <BuilderForm>
            <form action="">
                <input type="text" />
                <span className="highlight"></span>
                <span className="bar"></span>
            </form>
            <MdOutlineImage className='icon-img' />
            <Select selectedSetting={selectedSetting} showSelectModal={showSelectModal}/>
             
            
    </BuilderForm>
    <QuizeAnswers selectedSetting={selectedSetting}/>
      </>
   
  )
}

export default QuizeForm

const BuilderForm = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 680px;
margin: 0 auto;
padding: 15px;
.icon-img{
 font-size: 25px;
 color: #656262;
 cursor: pointer;
}
& select{
   width: 230px;
    cursor: pointer;
    option{
        background-color: #8080806f;
        position:absolute;
        top: 1px;
        left: 1px;
    }
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