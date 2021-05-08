import React from 'react'
import i18n from 'i18n-js'
import * as Localization from 'expo-localization'
import th from '../translations/th.json'
import en from '../translations/en.json'
import dayjs from 'dayjs'
import 'dayjs/locale/th'

i18n.fallbacks = true
i18n.translations = { th, en }

interface Props {
  children: JSX.Element
}

interface Context {
  t: (scope: i18n.Scope, options?: i18n.TranslateOptions) => string
  locale: string
  setLocale: React.Dispatch<React.SetStateAction<string>>
}

const LocalizationContext = React.createContext<Context>({
  t: () => '',
  locale: '',
  setLocale: () => '',
})

export const LocalizationProvider: React.FC<Props> = ({ children }) => {
  const [locale, setLocale] = React.useState(Localization.locale)
  const localizationContext = React.useMemo(
    () => ({
      t: (scope: i18n.Scope, options: i18n.TranslateOptions | undefined) =>
        i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  )

  React.useEffect(() => {
    dayjs.locale(locale)
  }, [locale])

  return (
    <LocalizationContext.Provider value={localizationContext}>
      {children}
    </LocalizationContext.Provider>
  )
}

export const useLocalization = (): Context => {
  const context = React.useContext(LocalizationContext)
  if (!context) {
    throw new Error('useLocalization can be use in LocalizationContext only')
  }
  return context
}
