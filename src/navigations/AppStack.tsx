import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainTab from './MainTab'
import DetailScreen from 'screens/DetailScreen'

export type StackParamList = {
  Main: undefined
  Details: undefined
}

const Stack = createStackNavigator<StackParamList>()

const AppStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default AppStack
