import React from 'react'
import styled from 'styled-components'
import {MdOutlineImage,MdClose} from 'react-icons/md'
export const Variant = ({onChange,onBlur, onDelete, value,id, className, type, placeholder, formId}) => {
  console.log(placeholder);
  return (
    <AnswerItemWrapper >
   <div>
      <input type={type} className ={'answer-checkbox'|| className}  />
      <input className='input'  onChange={onChange} onBlur={()=>onBlur(formId, id)} type="text" placeholder={`Вариант ${placeholder? placeholder: 1}`} /> 
      <span className="highlight"></span>
      <span className="bar"></span>
   </div>
   <MdOutlineImage className='icon-img'/>  
    <div id={id} onClick={()=>onDelete(formId, id)}>
       <MdClose  className='icon-close'/>
    </div>

</AnswerItemWrapper>
  )
}



const AnswerItemWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 650px;
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
    width: 550px;
    outline: none;
    border: none;
    padding: 5px ;
    border-bottom: 1px solid  transparent;  
    &:hover{
      border-bottom: 1px solid grey;  
    }
}
& .bar { position:relative; display:block; width:550px; }
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