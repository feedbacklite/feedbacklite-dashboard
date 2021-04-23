import React from 'react'
import Login from './pages/Onboarding/Login'
import SignUp from './pages/Onboarding/SignUp'

const App: React.FC = () => (
  <footer className="flex justify-start">
    <Login />
    <SignUp />
  </footer>
)

export default App
