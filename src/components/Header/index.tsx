import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown'
import { ReactComponent as Logo } from '../../assets/Logo.svg'

interface props {
  authenticated: boolean
}

const Header: React.FC<props> = ({ authenticated }) =>
  !authenticated ? (
    <nav className="flex justify-between px-24 mb-8 absolute left-0 right-0 top-0">
      <div className="flex items-center w-4/12">
        <Logo className="mr-10" />
        <Dropdown type="btn" />
      </div>
      <li className="flex justify-between items-center text-nm-txt font-fb-bold text-grey-700">
        <Link className="mr-4 hover:text-grey-800" to="/help">
          Help
        </Link>
        <Link className=" hover:text-grey-800" to="/feedback">
          Give us feedback
        </Link>
      </li>
    </nav>
  ) : (
    <nav className="flex justify-between">
      <Logo />
      <li className="flex justify-between">
        <Link to="/help">Help</Link>
        <Link to="/help">Get Feedback</Link>
      </li>
    </nav>
  )

export default Header
