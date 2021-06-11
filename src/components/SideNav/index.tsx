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
    <nav className="flex flex-col w-full md:pt-0 justify-center md:h-full md:overflow-y-hidden md:w-1/5 text-grey-700 px-8 md:px-0">
      {back && (
        <Link
          className="flex items-center text-primary-normal text-nm-txt font-fb-regular mb-4"
          to="/app/lakd"
        >
          <Back className="h-5 w-5" /> Back
        </Link>
      )}
      <h3 className="hidden md:block my-3 text-md-txt font-fb-bold text-grey-700">
        {name.toUpperCase()}
      </h3>
      <ul className="w-full flex overflow-x-scroll md:block md:overflow-x-hidden">
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
