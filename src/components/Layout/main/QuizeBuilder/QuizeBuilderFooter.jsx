import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {MdOutlineContentCopy} from 'react-icons/md'
import styled from 'styled-components'

const QuizeBuilderFooter = () => {
  return (
    <QuizeBuilderFooterOptions>
        <Icons>
            <MdOutlineContentCopy fontSize={20}/>
            <RiDeleteBin6Line fontSize={20}/>
        </Icons>
        <div className='setting'>
         <span className='span'>Обязательный вопрос</span>
         <label className="checkbox-google">
          <input type="checkbox" />
          <span className="checkbox-google-switch"></span>
        </label>
         <BsThreeDotsVertical fontSize={17}/>
        </div>
    </QuizeBuilderFooterOptions>  
  )
}

export default QuizeBuilderFooter

const QuizeBuilderFooterOptions = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
padding: 0 10px 25px 30px;

.setting{
   width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  .span{
    font-size: 13px;
  }
  .checkbox-google {
	display: inline-block;    
	height: 28px;    
	line-height: 28px;      
	margin-right: 10px;       
	position: relative;
	vertical-align: middle;
	font-size: 14px;
	user-select: none;	
}
.checkbox-google .checkbox-google-switch {
	display: inline-block;	
	width: 36px;
	height: 14px;	
	border-radius: 20px;
	position: relative;
	top: 6px;			
	vertical-align: top;
	background: #9f9f9f;
	transition: .2s;
}
.checkbox-google .checkbox-google-switch:before {
	content: '';
	display: inline-block;	
	width: 20px;	
	height: 20px;
	position: absolute;
	top: -3px;
	left: -1px;
	background: #fff;
	border-radius: 50%;
	box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);
	transition: .15s;		
}
.checkbox-google input[type=checkbox] {
	display: block;	
	width: 0;
	height: 0;	
	position: absolute;
	z-index: -1;
	opacity: 0;
}
.checkbox-google input[type=checkbox]:checked + .checkbox-google-switch {
	background: #7e62ae68;
}
.checkbox-google input[type=checkbox]:checked + .checkbox-google-switch:before {
	background: #673ab7;
	transform:translateX(18px);
}
 
/* Hover */
.checkbox-google input[type="checkbox"]:not(:disabled) + .checkbox-google-switch {
	cursor: pointer;
	border-color: rgba(0, 0, 0, .3);
}
 
/* Active/Focus */
.checkbox-google input[type="checkbox"]:not(:disabled):active + .checkbox-google-switch:before, 
.checkbox-google input[type="checkbox"]:not(:disabled):focus + .checkbox-google-switch:before {
	animation: checkbox-active-on 0.5s forwards linear;
}
@keyframes checkbox-active-on {
	0% {
		box-shadow: 0 0 0 0 rgba(212,212,212, 0);
	}
	99% {
		box-shadow: 0 0 0 10px rgba(212,212,212, 0.5);
	}
}
}

`
const Icons = styled.div`
    width: 50px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`