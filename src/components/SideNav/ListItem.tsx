import React from 'react'

interface props {
  count?: string
  item: string
  active: string
  color: { [key: string]: string }
  setActive: (item: string) => void
}

// interface colors {
//   [key: string]: string
// }

// const color: colors = {
//   all: 'primary-normal',
//   issue: 'error',
//   idea: 'warning',
//   other: 'grey-700',
//   archive: 'grey-500',
// }

const ListItem: React.FC<props> = ({
  item,
  count,
  active,
  setActive,
  color,
}) => {
  return (
    <li
      onClick={() => setActive(item)}
      className={`flex items-center justify-between w-full text-md-txt p-1 cursor-pointer rounded-md text-${
        active === 'archive' ? color.other : ''
      } bg-${
        active === item
          ? `${color[item]} bg-opacity-40 text-${color[item]} font-fb-bold border border-${color[item]}`
          : ''
      } hover:bg-${color[item]} hover:bg-opacity-40 my-3`}
      key={item}
    >
      <div className="flex items-center capitalize">
        <span className={`bg-${color[item]} mx-2 w-2 h-2 rounded-full`}></span>
        <span className="">{item}</span>
      </div>
      {count && <span className="mx-2">{count}</span>}
    </li>
  )
}

export default ListItem
