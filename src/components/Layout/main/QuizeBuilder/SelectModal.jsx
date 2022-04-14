import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import ReactDOM  from 'react-dom'
import {MdOutlineRadioButtonChecked,MdDateRange,MdAccessTime,MdOutlineEmail} from 'react-icons/md'
import {FaCheckSquare} from 'react-icons/fa'
export const ANSWER_SETTINGS =[
  {title: 'Один из списка', icon: <MdOutlineRadioButtonChecked fontSize={25} color={'grey'}/>, id: Math.random().toString()},
  {title: 'Несколько из списка', icon: <FaCheckSquare fontSize={25} color={'grey'}/>, id: Math.random().toString()},
  {title: 'Дата', icon: <MdDateRange fontSize={25} color={'grey'}/>, id: Math.random().toString()},
  {title: 'Время', icon: <MdAccessTime fontSize={25} color={'grey'}/>, id: Math.random().toString()},
  {title: 'Электронная почта', icon: <MdOutlineEmail fontSize={25} color={'grey'}/>, id: Math.random().toString()}

]


const Modal = (props) => {
   
  return (
    <CardModalWrapper>
       <ul>
         {ANSWER_SETTINGS.map((el)=><Item key={el.id}> {el.icon}<span>{el.title}</span></Item>)}
      </ul>
    </CardModalWrapper>
  )
}
const CardModalWrapper = styled.div`
    position: fixed;
    top: 13vh;
    left: 10%;
    width: 80%;
    z-index: 10;
    overflow: hidden;
    background: rgb(255, 251, 251);
    border-radius: 5px;
    cursor: pointer;
   overflow-y: scroll;
   height: 500px;

    ul{
      list-style: none;
      padding:0;
    }

@media (min-width: 80px) {
    & {
        left: calc(69% - 10rem);
        width: 16rem;
    }
}
`
const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  &:hover{
background-color: #8080802a;
  }
  
  span{
    padding-left:10px;
  }
  
  
`
const Backdrop =(props)=>{
  

    return  <Backdropp onClick={props.onClick} />
}
  const Backdropp = styled.div`
   position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background: rgba(0, 0, 0, 0);
    scroll-behavior: none;

  `
 const SelectModal= (props)=>{

   return <>

    {ReactDOM.createPortal(
        <Modal > {props.children}</Modal>,
        document.getElementById('modal-root')
    )},
     {ReactDOM.createPortal(
         <Backdrop onClick={props.onClose}/>,
         document.getElementById("backdrop-root")
    )}



    </>

 }




export default SelectModal
