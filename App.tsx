import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { setCustomTextInput, setCustomText } from 'react-native-global-props'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Sarabun_400Regular,
  Sarabun_600SemiBold,
} from '@expo-google-fonts/sarabun'
import Navigation from './src/navigations'
import theme from './src/theme'
import { LocalizationProvider } from 'contexts/LocalizationContext'
import { AuthProvider } from 'contexts/AuthContext'

setCustomText({
  allowFontScaling: false,
})
setCustomTextInput({
  allowFontScaling: false,
})

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    regular: Sarabun_400Regular,
    bold: Sarabun_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <LocalizationProvider>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </LocalizationProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
