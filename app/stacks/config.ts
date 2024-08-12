import React, { FC } from 'react'
import LoginScreen from '../screens/auth/login'
import { RootStackParamList } from './index'
import DashboardStack from './dashboard/dashboard'

type ComponentWithProps<T> = FC<T>

type Stacks<T = any> = {
  name: keyof RootStackParamList
  component: ComponentWithProps<T>
}

export const Stacks: Array<Stacks> = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Dashboard',
    component: DashboardStack,
  },
]
