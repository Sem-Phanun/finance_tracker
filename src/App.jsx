import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Dashboard from './views/Dashboard'
import Income from './views/Income'
import Expense from './views/Expense'
import Signup from './views/auth/Signup'
import Signin from './views/auth/Signin'
import Auth from './components/layouts/Auth'
const App = () => {

  return (
    <>
      <Routes>
        <Route path='/auth/' element={<Auth/>}>
          <Route path='signin' element={<Signin/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Route>
      </Routes>
      <Routes>
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