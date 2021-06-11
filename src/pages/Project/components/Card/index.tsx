import React from 'react'
import Pill from '../Pill'
import { ReactComponent as DownArrow } from '../../../../assets/Down.svg'
import './style.css'

interface props {
  id: string
  type: string
  active: string
  setActive: (item: string) => void
}

const Card: React.FC<props> = ({ id, type, active, setActive }) => {
  const onClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setActive(id)
  }

  return (
    <button
      onClick={(e: React.MouseEvent) => onClick(e, id)}
      className={`${
        id === active ? 'fbl-active cursor-default' : ''
      } focus:outline-none p-5 mb-5 rounded-md ${
        id !== active ? 'hover:bg-grey-600' : ''
      }  hover:bg-opacity-10 feed w-11/12`}
    >
      <div className="flex justify-between items-center mb-5">
        <Pill type={type} />
        <p className="text-nm-txt text-grey-700 font-fb-regular">1 day ago</p>
      </div>
      <p className="text-black-900 text-nm-txt font-fb-regular mb-8 text-left">
        Screen is too large when I try to edit Screen is too large when I try to
        edit Screen is too large when I try to edit
      </p>
      <div className="flex down-arrow">
        <DownArrow className="ml-auto" />
      </div>
      <div className="hidden fbl-card-footer">
        <div className="flex flex-col md:flex-row">
          <div className="mr-5">
            <h4 className="text-sm-txt font-fb-bold text-grey-600 text-left">
              USER
            </h4>
            <p className="text-black-700 text-sm-txt font-fb-regular">
              aquilaafuadajo@gmail.com
            </p>
          </div>
          <div className="mr-5 md:mr-0">
            <h4 className="text-sm-txt font-fb-bold text-grey-600 text-left">
              USER
            </h4>
            <p className="text-black-700 text-sm-txt font-fb-regular">
              aquilaafuadajo@gmail.com
            </p>
          </div>
        </div>
        <button className="py-2 px-8 text-grey-700 text-sm-txt font-fb-bold bg-grey-500 rounded-md ml-auto focus:outline-none hover:bg-opacity-40 transition duration-300 ease mt-auto">
          Archive
        </button>
      </div>
    </button>
  )
}

export default Card
