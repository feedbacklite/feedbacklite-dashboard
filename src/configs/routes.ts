import React from 'react'
// import { Redirect } from 'react-router-dom'

interface Route {
  path: string
  exact: boolean
  component: React.FC
  authenticated?: boolean
  showSideBar?: boolean
}

const routes: Route[] = [
  // {
  //   path: '/signup'
  // }
]

export default routes
