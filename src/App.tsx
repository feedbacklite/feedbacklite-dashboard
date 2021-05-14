import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Onboarding/Login'
import SignUp from './pages/Onboarding/SignUp'
import Header from './components/Header'
import Project from './pages/Project'
import Settings from './pages/Settings'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      <BrowserRouter>
        <Header authenticated={false} />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/" exact component={Project} />
          <Route path="/app/:projectId/settings" exact component={Settings} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
