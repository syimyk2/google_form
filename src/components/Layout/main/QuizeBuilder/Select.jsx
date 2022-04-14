import React,{useState} from 'react'
import styled from 'styled-components'
import {FaCheckSquare} from 'react-icons/fa'
import {AiOutlineCaretDown} from 'react-icons/ai'
import SelectModal from './SelectModal'

const ANSWER_SETTINGS =[
  {title: 'Один из списка', icon: 'FaCheckSquare', id: Math.random().toString()},
  {title: 'Несколько из списка', icon: 'FaCheckSquare', id: Math.random().toString()},
  {title: 'Дата', icon: '', id: Math.random().toString()},
  {title: 'Время', icon: '', id: Math.random().toString()},
  {title: 'Электронная почта', icon: '', id: Math.random().toString()}

]

const Select = (props) => {
    const [showSelect, setShowSelect] = useState(null)
    const showSelectHandler =()=>{
        setShowSelect(true)
      
    }
    const closeSelectHandler =(e)=>{
        e.stopPropagation();
     setShowSelect(false)
    }
  return (
    <SelectWrapper onClick={showSelectHandler}>
             <div>
          <FaCheckSquare color='gray' />
          <div >{props.selectedItem|| 'Select'}</div>
        {showSelect && <SelectModal onClose={closeSelectHandler} /> }
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
    div{
        display: flex;
        div{
            margin-left: 8px;
            font-size: 15px;
        }
    }

    &:active{
        background-color: #80808039;
    }
`