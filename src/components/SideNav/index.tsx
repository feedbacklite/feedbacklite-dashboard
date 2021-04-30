import React, { useState } from 'react'
import ListItem from './ListItem'

interface props {
  name: string
  list: Array<string>
  colors: { [key: string]: string }
}

const SideNav: React.FC<props> = ({ name, list, colors }) => {
  const [active, setActive] = useState(list[0])
  return (
    <nav className="flex flex-col justify-center h-full overflow-y-hidden w-1/5">
      <h3 className="my-3 text-md-txt font-fb-bold text-grey-700">
        {name.toUpperCase()}
      </h3>
      <ul className="w-full">
        {list.map(
          (
            item: string
          ): React.DetailedHTMLProps<
            React.LiHTMLAttributes<HTMLLIElement>,
            HTMLLIElement
          > => (
            <ListItem
              setActive={setActive}
              active={active}
              key={item}
              item={item}
              count={'0'}
              color={colors}
            />
          )
        )}
      </ul>
    </nav>
  )
}

export default SideNav
