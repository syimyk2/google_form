import React from 'react'
import styled from 'styled-components'
import {MdOutlineImage,MdClose, MdDateRange} from 'react-icons/md'
import {IoMdTime} from 'react-icons/io'
import {FaCheckSquare} from 'react-icons/fa'


const QuizeAnswers = (props) => {
 
  let changebleForm 

  if(props.selectedSetting.title === 'Время'){

    changebleForm = <AnswerWithDate> <span>{props.selectedSetting.title}</span> <IoMdTime fontSize={20}/> </AnswerWithDate>

  }else if(props.selectedSetting.title === 'Несколько из списка'){

    changebleForm = <>
    <AnswerItem>
   <form>
     <input type="checkbox" name="" id="" />
     <input className='input' type="text" placeholder='answers' /> 
     <span className="highlight"></span>
    <span className="bar"></span>
   </form>
 <MdOutlineImage className='icon-img'/>  
 <MdClose className='icon-close'/>
</AnswerItem>
{/* --duplicateted here must be render-- */}
<AnswerAdder>
   <form action="">
        <input type="checkbox" name="" id="" />
         <input className='input' type="text" disabled ={true}  placeholder ="Добавить вариант"/>
   </form>
   <span>или</span>
    <span className='btn-other'>добавить вариант "Другое"</span>
  
</AnswerAdder> </>


  }else if(props.selectedSetting.title === 'Дата'){
      changebleForm = <AnswerWithDate> <span>День, месяц, год</span> <MdDateRange fontSize='20px' color='grey'/></AnswerWithDate>


  }else{
      changebleForm = <>
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
  <AnswerAdder>
      <form action="">
           <input type="radio" name="" id="" />
            <input className='input' type="text" disabled ={true}  placeholder ="Добавить вариант"/>
      </form>
      <span>или</span>
       <span className='btn-other'>добавить вариант "Другое"</span>
     
  </AnswerAdder> </>
  }


  return (
    <QuzeAnswersContainer>  
      {changebleForm}     
    </QuzeAnswersContainer>
  )
}

export default QuizeAnswers



const QuzeAnswersContainer = styled.div`
display: flex;
flex-direction: column;
width: 680px;
padding: 15px;
margin: 0 auto;

`
const AnswerWithDate = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 14px;
 height: 40px;
 width: 220px;
 border-bottom: 1px solid grey;
 

`
const AnswerItem = styled.div`
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
const AnswerAdder = styled.div`
display: flex;
width: 600px;
align-items: center;
input{
 cursor: pointer;
 outline: none;
border: none;
padding: 5px ;
border-bottom: 1px solid transparent;  
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