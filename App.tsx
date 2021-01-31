import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './src/navigations'
import theme from './src/theme'

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
