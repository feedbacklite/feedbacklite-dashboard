import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const SignUp: React.FC = () => (
  <div className="flex flex-col items-center h-full pt-8 overflow-y-scroll">
    <Card
      title="Get started for free"
      subtitle="Try the widget for free with no time limit or credit card requirement.
      Upgrade to unlock unlimited feedback submissions if you are happy."
      type="signUp"
    />
    <p className="text-grey-800 text-nm-txt font-fb-regular my-8">
      Already have an account?{' '}
      <Link className="underline" to="/login">
        Login
      </Link>{' '}
    </p>
  </div>
)

export default SignUp
