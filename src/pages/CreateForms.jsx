import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Layout/header/Header'

const CreateForms = () => {
   return (
      <>
         <Header />
         <Outlet />
      </>
   )
}

export default CreateForms
