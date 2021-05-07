import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { setCustomTextInput, setCustomText } from 'react-native-global-props'
import Navigation from './src/navigations'
import theme from './src/theme'

setCustomText({
  allowFontScaling: false,
})
setCustomTextInput({
  allowFontScaling: false,
})

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
