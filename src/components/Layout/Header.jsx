import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/logo.svg'
import {BiPalette} from 'react-icons/bi'
import {FiEye} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {BsThreeDotsVertical} from 'react-icons/bs'
const Header = () => {
  return (
    <HeaderWrapper>
      <FirsHeaderWrapper>
        <Logo>
        <img src={logo} alt="logo" />
        <span>Новая форма</span>
      </Logo>
       <HeaderSettings>
         <BiPalette className='icon'/>
         <FiEye className='icon'/>
         <button>Отправить</button>
         <BsThreeDotsVertical className='icon'/>
          <CgProfile className='icon'/>
       </HeaderSettings>
      </FirsHeaderWrapper>
      
       <Nav>
         <ul>
           <li>Вопросы</li>
           <li>Ответы</li>
           <li>Настройки</li>
         </ul>
       </Nav>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
 height: 120px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding-top: 10px;
 background: white;
 border-bottom: 0.3px solid #d2cbdd;
 .icon{
   font-size: 25px;
   color: #787575e9;
   cursor: pointer;
 }

`
const FirsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
`
const Logo = styled.div`
 display: flex;
 align-items: center;
 width: 200px;
 justify-content: space-evenly;
 
 img{
   width: 30px;
   cursor: pointer;
 }
 
`
const HeaderSettings = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 350px;
button{
  background-color: #673ab7;
  color: #fff;
  width: 160px;
  border: none;
  border-radius: 5px;
  height: 47px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  &:hover{
    background-color: #754eb9;
  }
}
`
const Nav = styled.nav`
display: flex;
justify-content: center;
margin: 0 auto;
  ul{
    width: 300px;
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-around;
    cursor: pointer;
   
  }
  

`


export default Header