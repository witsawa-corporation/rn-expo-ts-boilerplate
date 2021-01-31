import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

export type Props = {
  enabledScroll?: boolean
  noPadding?: boolean
  children: React.ReactNode
}

const Content = ({
  noPadding = false,
  enabledScroll = true,
  children,
}: Props): JSX.Element => {
  if (enabledScroll) {
    return (
      <ScrollView
        style={[styles.contentStyle, noPadding ? styles.noPaddingStyle : {}]}
      >
        {children}
      </ScrollView>
    )
  }
  return (
    <View style={[styles.contentStyle, noPadding ? styles.noPaddingStyle : {}]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  contentStyle: {
    width: '100%',
    paddingLeft: 22,
    paddingRight: 22,
    flex: 1,
  },
  noPaddingStyle: {
    paddingLeft: 0,
    paddingRight: 0,
  },
})

export default Content
