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
      <div></div>
    </div>
  )
}

export default Project
