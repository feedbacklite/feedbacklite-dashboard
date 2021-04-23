import React from 'react'
// import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/Logo.svg'

const Header: React.FC = () => (
  <nav className="flex justify-between">
    <Logo />
    <p className="text-success">Hello</p>
    <p>testing testing</p>
  </nav>
)

export default Header
