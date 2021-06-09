import React from 'react'
import { ReactComponent as DownArrow } from '../../assets/Down.svg'
import { ReactComponent as Setting } from '../../assets/Setting.svg'

interface props {
  type: string
}

const Dropdown: React.FC<props> = ({ type }) => {
  return (
    <div className="flex flex-col w-3/5">
      <button className="bg-grey-400 flex px-4 py-2 rounded-md w-full items-center">
        Pitiano <DownArrow className="ml-auto" />
      </button>
      <ul className="dropdown w-full rounded-md shadow-lg border border-grey-700">
        <li className="flex w-full justify-between items-center">
          <span>Pitiano</span> <Setting />
        </li>
        {/* <li>Elesmush</li> */}
      </ul>
    </div>
  )
}

export default Dropdown
