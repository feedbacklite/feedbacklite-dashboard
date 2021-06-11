import React, { useState, useRef } from 'react'
import { Popover } from 'react-tiny-popover'
import { ReactComponent as DownArrow } from '../../assets/Down.svg'
import { ReactComponent as Setting } from '../../assets/Setting.svg'
import { ReactComponent as Add } from '../../assets/Plus.svg'

import './styles.css'

interface props {
  type: string
}

const Dropdown: React.FC<props> = ({ type }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const dropdownRef = useRef() as React.MutableRefObject<HTMLInputElement>

  return (
    <div className="flex flex-col w-3/5 relative" ref={dropdownRef}>
      <Popover
        containerStyle={{
          position: 'absolute',
          top: '56.3476px',
          left: '0px',
          right: '0px',
          transform: 'translate(0px, 0px)',
          zIndex: '99',
        }}
        isOpen={isPopoverOpen}
        reposition={false}
        onClickOutside={() => setIsPopoverOpen(false)}
        containerParent={dropdownRef.current}
        content={
          <ul className="dropdown w-full rounded-md shadow-lg border border-grey-400 bg-white">
            <li className="flex w-full justify-between items-center py-4 px-6 hover:bg-grey-400 cursor-pointer">
              <span>Pitiano</span>{' '}
              <span className="icon">
                <Setting />
              </span>
            </li>
            <li className="flex w-full justify-between items-center py-4 px-6 hover:bg-grey-400 cursor-pointer">
              <span>Elesmush</span>{' '}
              <span className="icon">
                <Setting />
              </span>
            </li>
            <li className="flex w-full justify-between items-center py-4 px-6 hover:bg-grey-400 cursor-pointer">
              <span>Elesmush</span>{' '}
              <span className="icon">
                <Setting />
              </span>
            </li>
            <li className="flex w-full justify-between items-center py-4 px-6 bg-grey-400 cursor-pointer border-t border-grey-500">
              <span>New project</span>{' '}
              <span className="icon">
                <Add />
              </span>
            </li>
          </ul>
        }
      >
        <button
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          className="bg-grey-400 flex px-4 py-2 rounded-md w-full items-center"
        >
          Pitiano <DownArrow className="ml-auto" />
        </button>
      </Popover>
    </div>
  )
}

export default Dropdown
