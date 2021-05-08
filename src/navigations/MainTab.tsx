import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from 'screens/HomeScreen'
import SettingsScreen from 'screens/SettingsScreen'
import { useLocalization } from 'contexts/LocalizationContext'

const Tab = createBottomTabNavigator()

const MainTab = (): JSX.Element => {
  const { t } = useLocalization()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t('screens.HomeScreen.title', { defaultValue: 'Home' })}
        component={HomeScreen}
      />
      <Tab.Screen
        name={t('screens.SettingsScreen.title', { defaultValue: 'Settings' })}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  )
}

export default MainTab
