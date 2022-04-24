/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styled from 'styled-components'
import { MdOutlineImage, MdClose } from 'react-icons/md'

export const Variant = ({
   onChange,
   onBlur,
   onDelete,
   id,
   className,
   type,
   placeholder,
   formId,
   defaultValue,
   onChecked,
   checked,
}) => {
   return (
      <AnswerItemWrapper>
         <div>
            <input
               type={type}
               className={'answer-checkbox' || className}
               onChange={() => onChecked(formId, id)}
               checked={checked || false}
            />
            <input
               className="input"
               defaultValue={defaultValue}
               onChange={onChange}
               onFocus={(e) => e.target.select()}
               onBlur={() => onBlur(formId, id)}
               type="text"
               placeholder={`Вариант ${placeholder || 1}`}
            />
            <span className="highlight" />
            <span className="bar" />
         </div>
         <MdOutlineImage />
         <div id={id} onClick={() => onDelete(formId, id)}>
            <MdClose />
         </div>
      </AnswerItemWrapper>
   )
}

const AnswerItemWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 700px;
   margin: 20px 0 20px;
   .answer-checkbox {
      margin-top: 8px;
   }
   svg {
      font-size: 25px;
      color: #656262;
      cursor: pointer;
      &:hover {
         color: #3d0789ef;
      }
   }

   & .input {
      width: 550px;
      outline: none;
      border: none;
      padding: 5px;
      border-bottom: 1px solid transparent;
      &:hover {
         border-bottom: 1px solid grey;
      }
   }
   & .bar {
      position: relative;
      display: block;
      width: 550px;
   }
   & .bar:before,
   .bar:after {
      content: '';
      height: 1.5px;
      width: 0;
      bottom: 0px;
      position: absolute;
      background: #611dd6;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
   }
   & .bar:before {
      left: 4%;
   }
   & .bar:after {
      right: 0%;
   }
   & :focus ~ .bar:before,
   textarea:focus ~ .bar:after {
      width: 100%;
   }
   /* active state */
   & :focus ~ .highlight {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: inputHighlighter 0.3s ease;
   }

   /* ANIMATIONS ================ */
   @-webkit-keyframes inputHighlighter {
      from {
         background: #5e1dcd;
      }
      to {
         width: 0;
         background: transparent;
      }
   }
   @-moz-keyframes inputHighlighter {
      from {
         background: #4910ab;
      }
      to {
         width: 0;
         background: transparent;
      }
   }
   @keyframes inputHighlighter {
      from {
         background: #673ab7;
      }
      to {
         width: 0;
         background: transparent;
      }
   }
`
