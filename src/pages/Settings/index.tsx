/* eslint-disable */
import React from 'react'
import SideNav from '../../components/SideNav'
import { sideBarList, sideBarColors } from './config'

const Settings: React.FC = () => {
  return (
    <div className="flex w-full px-28 h-full">
      <SideNav name="setings" colors={sideBarColors} list={sideBarList} />
      <div></div>
    </div>
  )
}

export default Settings
