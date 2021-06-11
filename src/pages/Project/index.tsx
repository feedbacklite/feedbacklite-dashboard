/* eslint-disable */
import React, { useState } from 'react'
import Card from './components/Card'
import SideNav from '../../components/SideNav'
import { sideBarList, sideBarColors } from './config'
import './style.css'

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
  const [active, setActive] = useState(sideBarList[0])

  return (
    <div className="flex flex-col pt-28 md:pt-0 md:flex-row w-full md:px-28 md:h-full">
      <h2 className="md:hidden text-heading-2 text-black-700 font-fb-bold text-center mb-6 md:mb-12">Feedback</h2>
      <SideNav active={active} setActive={setActive} name="filters" colors={sideBarColors} list={sideBarList} />
      <div className="w-full md:h-full md:w-4/5 md:pt-28 md:pl-28">
        <h2 className="hidden md:block text-heading-2 text-black-700 font-fb-bold text-center mb-12">Feedback</h2>
        <div className="fbl-card-area flex flex-col w-full h-4/5 overflow-y-scroll items-center relative pt-3">
          <Card type="issue" id={'1'} active={active} setActive={setActive} />
          <Card type="idea" id={'2'} active={active} setActive={setActive} />
          <Card type="issue" id={'3'} active={active} setActive={setActive} />
          <Card type="other" id={'4'} active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  )
}

export default Project
