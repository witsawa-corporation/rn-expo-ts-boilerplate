import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from 'screens/HomeScreen'
import SettingsScreen from 'screens/SettingsScreen'
import { useLocalization } from 'contexts/LocalizationContext'

export type TabParamList = {
  Home: undefined
  Settings: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

const MainTab = (): JSX.Element => {
  const { t } = useLocalization()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('screens.HomeScreen.title', { defaultValue: 'Home' }),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: t('screens.SettingsScreen.title', {
            defaultValue: 'Settings',
          }),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTab
