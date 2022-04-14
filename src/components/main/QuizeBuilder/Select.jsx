import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {MdOutlineRadioButtonChecked} from 'react-icons/md'
import SelectModal from './SelectModal'
import { useDispatch, useSelector } from 'react-redux'
import { FormActions } from '../../../store/FormSlice'
import radio from '../../../assets/icon/radio.svg'


const Select = (props) => {
  const dispatch = useDispatch()
 
   let selectIcon = <img src={props.selectedSetting.icon? props.selectedSetting.icon : radio} alt="i" /> 
  
    const showSelectHandler =(e)=>{
      e.stopPropagation();
      dispatch(FormActions.showSelectModal(true))
        
      
    }
    
    const closeSelectHandler =(e)=>{
     dispatch(FormActions.showSelectModal(false))
    }

  return (
    <SelectWrapper onClick={showSelectHandler}>
             <div>
               {selectIcon}
          <div > {props.selectedSetting.title|| 'Один из списка'}</div>
        {props.showSelectModal && <SelectModal onClose={closeSelectHandler} /> }
           </div>
      <AiOutlineCaretDown color='gray'/>
     
              
    </SelectWrapper>
  )
}

export default Select

const SelectWrapper = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 8px;
    align-items: center;
    div{
        display: flex;
        align-items: center;
        div{
            margin-left: 8px;
            font-size: 15px;
        }
    }
   img{
     width: 25px;
   }
    &:active{
        background-color: #80808039;
    }
`