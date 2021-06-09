import React from 'react'
import './style.css'

interface props {
  count?: string
  item: string
  active: string
  color: { [key: string]: string }
  setActive: (item: string) => void
}

const ListItem: React.FC<props> = ({
  item,
  count,
  active,
  setActive,
  color,
}) => {
  return (
    <li>
      <button
        onClick={() => setActive(item)}
        className={`focus:outline-none flex items-center justify-between w-full text-md-txt p-1 cursor-pointer rounded-md fbl-text-${
          active === 'archive' ? color.other : ''
        } fbl-li-active-${active === item ? `${color[item]}` : ''} fbl-hover-${
          color[item]
        } my-3`}
        key={item}
      >
        <div className="flex items-center capitalize">
          <span
            className={`fbl-dot-${color[item]} mx-2 w-2 h-2 rounded-full`}
          ></span>
          <span className="">{item}</span>
        </div>
        {count && <span className="mx-2">{count}</span>}
      </button>
    </li>
  )
}

export default ListItem
