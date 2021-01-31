import React from 'react'
import { Text as RNText, StyleSheet, TextProps } from 'react-native'

export type Props = {
  children: string
} & TextProps

const Text = ({ children, ...props }: Props): JSX.Element => {
  return (
    <RNText style={styles.text} {...props}>
      {children}
    </RNText>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
})

export default Text
