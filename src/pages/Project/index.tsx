/* eslint-disable */
import React from 'react'
import SideNav from '../../components/SideNav'
import { sideBarList, sideBarColors } from './config'

const data: object = {
  feedback: [
    {
      type: 'issue',
      message: 'problem signing up',
      user: 'aquilaafuadajo@gmail.com'
    },
    {
      type: 'issue',
      message: 'problem signing up',
      user: 'aquilaafuadajo@gmail.com'
    },
    {
      type: 'idea',
      message: 'problem signing up',
      user: 'aquilaafuadajo@gmail.com'
    },
    {
      type: 'idea',
      message: 'problem signing up',
      user: 'aquilaafuadajo@gmail.com'
    },
    {
      type: 'other',
      message: 'problem signing up',
      user: 'aquilaafuadajo@gmail.com'
    },
    {
      type: 'other',
      message: 'problem signing up',
      user: 'aquilaafuadajo@gmail.com'
    },
    {
      type: 'issue',
      message: 'problem signing up',
      user: 'aquilaafuadajo@gmail.com'
    }
  ]
}

const Project: React.FC = () => {
  return (
    <div className="flex w-full px-28 h-full">
      <SideNav name="filters" colors={sideBarColors} list={sideBarList} />
      <div className="h-full w-4/5 pt-28 pl-28">
        <h2 className="text-heading-2 text-black-700 font-fb-bold text-center mb-12">Feedback</h2>
        <div className="flex flex-col w-full">
          <div className="p-5 mb-5 border border-primary-normal rounded-md">
            <div className="flex justify-between items-center mb-5">
              <p className="text-sm-txt font-fb-bold text-error px-6 py-1 bg-error bg-opacity-20 rounded-full">Error</p>
              <p className="text-nm-txt text-grey-700 font-fb-regular">1 day ago</p>
            </div>
            <p className="text-black-900 text-nm-txt font-fb-regular mb-8">Screen is too large when I try to edit</p>
            <div className="flex">
              <div className="mr-5">
                <h4 className="text-sm-txt font-fb-bold text-grey-600 text-left">USER</h4>
                <p className="text-black-700 text-sm-txt font-fb-regular">aquilaafuadajo@gmail.com</p>
              </div>
              <div className="">
                <h4 className="text-sm-txt font-fb-bold text-grey-600 text-left">USER</h4>
                <p className="text-black-700 text-sm-txt font-fb-regular">aquilaafuadajo@gmail.com</p>
              </div>
              <button className="py-2 px-8 text-grey-700 text-sm-txt font-fb-bold bg-grey-500 rounded-md ml-auto">Archive</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
