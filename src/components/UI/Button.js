import React from 'react'
import styled from 'styled-components'

const Button = ({ children, onClick, className }, ...props) => {
   return (
      <ButtonStyled onClick={onClick} className={className} {...props}>
         {children}
      </ButtonStyled>
   )
}

export default Button

const ButtonStyled = styled.button`
   border: none;
   border-radius: 5px;
   background-color: #673ab7;
   color: white;
   padding: 10px;
   font-size: 14px;
   outline: none;
   cursor: pointer;
   &:hover {
      background-color: #775ab0;
   }
   &:active {
      background-color: #665ee7;
   }
   box-shadow: 2px 2px 7px 0px grey;
`
