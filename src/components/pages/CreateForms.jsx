import React, { Fragment } from 'react'

import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

const CreateForms = () => {
   return (
      <>
         <Header />
         <Outlet />
      </>
   )
}

export default CreateForms
