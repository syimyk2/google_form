import React from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Main from '../main/Main'

const CreateForms = () => {
  return (
    <Fragment>
        <Header/>
        <Outlet/>
    </Fragment>
  )
}

export default CreateForms