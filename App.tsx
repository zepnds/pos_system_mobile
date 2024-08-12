/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import MainStack from './app/stacks'
import './gesture-handler'
import { Provider } from 'react-redux'
import store from './app/store/index'

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  )
}

export default App
