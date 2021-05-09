import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from 'contexts/AuthContext'
import AuthStack from './AuthStack'
import AppStack from './AppStack'

const Navigation = (): JSX.Element => {
  const {
    state: { userToken },
  } = useAuth()
  const isAuth = !!userToken
  return (
    <NavigationContainer>
      {isAuth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Navigation
