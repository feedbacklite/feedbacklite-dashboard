import React from 'react'
import { ReactComponent as Google } from '../../../assets/google.svg'

interface props {
  title: string
  subtitle?: string
  type: string
  center?: boolean
}

const Card: React.FC<props> = ({ title, subtitle, type, center }) => (
  <div className="flex flex-col justify-center items-center p-8 border-grey-600 shadow rounded-md max-w-md mt-16 sm:min-w-onboardingCard">
    <h3
      className={`${
        center ? 'text-center' : 'text-left'
      } text-heading-3 font-fb-bold w-full text-black-700  mb-4`}
    >
      {title}
    </h3>
    {subtitle && (
      <p className="text-grey-800 text-lg-txt font-fb-regular">{subtitle}</p>
    )}
    <div className="flex flex-col w-full">
      <label
        className="text-grey-800 text-sm-txt font-fb-bold my-3"
        htmlFor="email"
      >
        Email
      </label>
      <input
        name="email"
        type="text"
        placeholder="arnold@gmail.com"
        className="border border-grey-600 rounded-sm placeholder-grey-600 w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-grey-700"
      />
      <button className="text-white bg-primary-normal px-4 py-3 my-3 w-full hover:bg-primary-deep focus:outline-none rounded-sm">
        {type === 'login' ? 'Login' : 'Sign Up'} With Email
      </button>
      <div className="flex items-center">
        <hr className="h-1 w-1/2 text-grey-500" />
        <p className="mx-5 text-grey-700">Or</p>
        <hr className="h-1 w-1/2 text-grey-500" />
      </div>
      <button className="flex justify-center items-center text-black-800 border-2 border-primary-normal px-4 py-2 my-3 w-full hover:border-primary-deep focus:outline-none rounded-sm max-h-12">
        <Google /> {type === 'login' ? 'Login' : 'Sign Up'} With Google
      </button>
    </div>
  </div>
)

export default Card
