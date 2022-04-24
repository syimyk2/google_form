// import React, { useState } from 'react'
import styled from 'styled-components'
import { BiPalette } from 'react-icons/bi'
import { FiEye } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdCloudDone } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ReactComponent as FormLogo } from '../../../assets/icons/logo.svg'
import { saveQuizFormData } from '../../../store/asyncFunctions'
import { formActions } from '../../../store/formSlice'
import { removeFromLocalStorage } from '../../../utils/helpers/storageHelper'

const Header = () => {
   const status = useSelector((state) => state.form.status)
   const [showSavedIcon, setShowSavedIcon] = useState(false)
   const dispatch = useDispatch()
   const location = useLocation()
   const saveQuizDataHandler = () => {
      dispatch(saveQuizFormData())
      removeFromLocalStorage('@quiz-data')
      dispatch(formActions.saveQuizData())
   }
   const changeThemeHandler = () => {
      alert(
         'sorry , temproary this functionalyty do not works , will fix soon (gobal styled)'
      )
   }

   useEffect(() => {
      if (status === 'resolved') {
         setShowSavedIcon(true)
      }
      const timer = setTimeout(() => {
         setShowSavedIcon(false)
      }, 4000)
      return () => {
         clearTimeout(timer)
      }
   }, [setShowSavedIcon, status])

   return (
      <HeaderWrapper>
         <FirsHeaderWrapper>
            <Logo>
               <FormLogo />
               <span>Новая форма</span>
            </Logo>
            <HeaderSettings>
               <BiPalette onClick={changeThemeHandler} />
               <FiEye />
               {location.pathname === '/' ? (
                  <button onClick={saveQuizDataHandler}>Сохранить</button>
               ) : (
                  ''
               )}
               {showSavedIcon && <MdCloudDone />}

               <BsThreeDotsVertical />
               <CgProfile />
            </HeaderSettings>
         </FirsHeaderWrapper>

         <Nav>
            <ul>
               <NavLink
                  end
                  className={({ isActive }) => (isActive ? 'activeLink' : '')}
                  to="/"
               >
                  Вопросы
               </NavLink>
               <NavLink
                  className={({ isActive }) => (isActive ? 'activeLink' : '')}
                  to="quiz-forms"
               >
                  Тесты
               </NavLink>
            </ul>
         </Nav>
      </HeaderWrapper>
   )
}
export default Header

const HeaderWrapper = styled.header`
   height: 110px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding-top: 10px;
   background: white;
   border-bottom: 0.3px solid #d2cbdd;
   position: relative;
   z-index: 1;
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

   svg {
      width: 30px;
      cursor: pointer;
      height: 47px;
   }
`
const HeaderSettings = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   width: 350px;

   svg {
      font-size: 25px;
      color: #787575e9;
      cursor: pointer;
      &:hover {
         color: #673ab7;
      }
   }
   button {
      background-color: #673ab7;
      color: #fff;
      width: 160px;
      border: none;
      border-radius: 5px;
      height: 47px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      &:hover {
         background-color: #754eb9;
      }
   }
`
const Nav = styled.nav`
   display: flex;
   justify-content: center;
   margin: 0 auto;
   ul {
      width: 300px;
      padding: 0;
      display: flex;
      align-items: center;
      list-style: none;
      justify-content: space-around;
      cursor: pointer;
      a {
         text-decoration: none;
         color: black;
      }
      .activeLink {
         border-bottom: 2px dotted violet;
      }
   }
`
