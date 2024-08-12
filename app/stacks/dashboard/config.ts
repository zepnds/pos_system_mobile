import React, { FC } from 'react'
import { DashboardRootStackParamList } from './dashboard'
import MainDashboard from '../../screens/dashboard/main'
import PosDashboard from '../../screens/dashboard/post'

type ComponentWithProps<T> = FC<T>

type Stacks<T = any> = {
  name: keyof DashboardRootStackParamList
  component: ComponentWithProps<T>
}

export const dashboardConfig: Array<Stacks> = [
  {
    name: 'MainDashboard',
    component: MainDashboard,
  },
  {
    name: 'Pos',
    component: PosDashboard,
  },
]
