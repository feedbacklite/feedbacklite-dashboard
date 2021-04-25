import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Onboarding/Login'
import SignUp from './pages/Onboarding/SignUp'
import Header from './components/Header'
import './App.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header authenticated={false} />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
