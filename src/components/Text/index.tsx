import React from 'react'
import { Text as RNText, StyleSheet, TextProps } from 'react-native'

const Text: React.FC<TextProps> = (props) => {
  return <RNText style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
})

export default Text
