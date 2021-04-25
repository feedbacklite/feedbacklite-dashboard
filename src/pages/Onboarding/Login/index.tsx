import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Login: React.FC = () => (
  <div className="flex flex-col items-center">
    <Card title="Login" type="login" />
    <p className="text-grey-800 text-nm-txt font-fb-regular my-8">
      Do not have an account?{' '}
      <Link className="underline" to="/sign-up">
        SignUp
      </Link>{' '}
    </p>
  </div>
)

export default Login
