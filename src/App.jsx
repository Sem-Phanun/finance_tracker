import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Expense from './pages/Expense'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'
import Auth from './components/layouts/Auth'
const App = () => {

  return (
    <>
          <Routes>
            <Route path='/auth/' element={<Auth/>}>
              <Route path='signin' element={<Signin/>}/>
              <Route path='signup' element={<Signup/>}/>
            </Route>
            <Route path='/' element={<Layout/>}>
            <Route path='' element={<Dashboard/>}/>
              <Route path='expenses' element={<Expense/>}/>
              <Route path='income' element={<Income/>}/>
            </Route>
          </Routes>
    </>
  )
}

export default App