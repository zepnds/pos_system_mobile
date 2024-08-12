import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { Stacks } from './config'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { titleShow } from '../helpers/stack'

export type RootStackParamList = {
  Login: undefined
  Dashboard: undefined
}
const RootStack = createNativeStackNavigator<RootStackParamList>()
const { Navigator, Screen } = RootStack

export default function MainStack() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        {Stacks.map((stack) => (
          <Screen
            options={{ headerShown: titleShow[stack.name] ?? true }}
            key={stack.name}
            name={stack.name}
            component={stack.component}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  )
}
