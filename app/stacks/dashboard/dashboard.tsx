import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { dashboardConfig } from './config'

const Drawer = createDrawerNavigator()

export type DashboardRootStackParamList = {
  MainDashboard: undefined
  Pos: undefined
}

export default function DashboardStack() {
  return (
    <Drawer.Navigator initialRouteName="Pos">
      {dashboardConfig.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Drawer.Navigator>
  )
}
