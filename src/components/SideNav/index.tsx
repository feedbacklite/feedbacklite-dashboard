import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from './ListItem'
import { ReactComponent as Back } from '../../assets/Right.svg'

interface props {
  name: string
  list: Array<string>
  colors: { [key: string]: string }
  active: string
  setActive: (item: string) => void
  back?: boolean
}

const SideNav: React.FC<props> = ({
  name,
  list,
  colors,
  active,
  setActive,
  back,
}) => {
  return (
    <nav className="flex flex-col justify-center h-full overflow-y-hidden w-1/5 text-grey-700">
      {back && (
        <Link
          className="flex items-center text-primary-normal text-nm-txt font-fb-regular mb-4"
          to="/app/lakd"
        >
          <Back className="h-5 w-5" /> Back
        </Link>
      )}
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
