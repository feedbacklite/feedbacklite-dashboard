import React, { useState } from 'react'
import SideNav from '../../components/SideNav'
import ProjectCard from './components/Card/ProjectCard'
import TeamCard from './components/Card/TeamCard'
import { sideBarList, sideBarColors } from './config'

const Settings: React.FC = () => {
  const [active, setActive] = useState(sideBarList[0])
  return (
    <div className="flex w-full px-28 h-full">
      <SideNav
        active={active}
        setActive={setActive}
        name="setings"
        colors={sideBarColors}
        list={sideBarList}
        back
      />
      <div className="h-full w-4/5 pt-28 pl-28">
        <h2 className="text-heading-2 text-black-700 font-fb-bold text-center mb-12">
          Settings
        </h2>
        <div className="flex flex-col w-full">
          {active === 'general' && <ProjectCard />}
          {active === 'team' && <TeamCard />}
        </div>
      </div>
    </div>
  )
}

export default Settings
