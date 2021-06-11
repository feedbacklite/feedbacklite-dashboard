import React, { useState } from 'react'
import SideNav from '../../components/SideNav'
import ProjectCard from './components/Card/ProjectCard'
import TeamCard from './components/Card/TeamCard'
import { sideBarList, sideBarColors } from './config'

const Settings: React.FC = () => {
  const [active, setActive] = useState(sideBarList[0])
  return (
    <div className="flex flex-col pt-28 md:pt-0 md:flex-row w-full md:px-28 md:h-full">
      <SideNav
        active={active}
        setActive={setActive}
        name="setings"
        colors={sideBarColors}
        list={sideBarList}
        back
      />
      <div className="w-full px-5 md:px-0 mt-8 md:mt-0 md:h-full md:w-4/5 md:pt-28 md:pl-28">
        <h2 className="hidden md:block text-heading-2 text-black-700 font-fb-bold text-center mb-12">
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
