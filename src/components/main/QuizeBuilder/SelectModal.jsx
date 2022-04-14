import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ReactDOM  from 'react-dom'
import {MdOutlineRadioButtonChecked,MdDateRange,MdAccessTime,MdOutlineEmail} from 'react-icons/md'
import {FaCheckSquare} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { FormActions } from '../../../store/FormSlice'
import email from '../../../assets/icon/email.svg'
import time from '../../../assets/icon/time.svg'
import date from '../../../assets/icon/date.svg'
import check from '../../../assets/icon/check.svg'
import radio from '../../../assets/icon/radio.svg'

export const ANSWER_SETTINGS =[
  {title: 'Один из списка', icon: radio , id: 'i1'},
  {title: 'Несколько из списка', icon: check , id: 'i2'},
  {title: 'Дата', icon: date , id: 'i3'},
  {title: 'Время', icon: time, id: 'i4'},
  {title: 'Электронная почта', icon: email, id: 'i5'}

]



const Modal = (props) => {
  const dispatch = useDispatch()
  const selectSettingHandler =(e)=>{ 
    e.stopPropagation();
    dispatch(FormActions.selectSetting(e.currentTarget.id))
   
  }
  useEffect(()=>{
     dispatch(FormActions.addSettings(ANSWER_SETTINGS))
  },[])
  return (
    <CardModalWrapper>
       <ul>
         {ANSWER_SETTINGS.map((el)=><Item onClick={selectSettingHandler} id={el.id} key={el.id}><img src={el.icon} alt="ico" /><span>{el.title}</span></Item>)}
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
  img{
    width: 25px;
  }
  
`
const Backdrop =(props)=>{
  const dispatch = useDispatch()
   const closeHandler =(e)=>{
    e.stopPropagation();
     dispatch(FormActions.showSelectModal(false))
   }

    return  <Backdropp onClick={closeHandler} />
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
        <Modal onClose={props.onClose} > {props.children}</Modal>,
        document.getElementById('modal-root')
    )},
     {ReactDOM.createPortal(
         <Backdrop onClick={props.onClose}/>,
         document.getElementById("backdrop-root")
    )}



    </>

 }




export default SelectModal
