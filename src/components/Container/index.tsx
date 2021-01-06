import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleProp, ViewStyle } from 'react-native'

export interface Props {
  testID?: string
  containerStyles?: StyleProp<ViewStyle>
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children, containerStyles, testID }) => {
  return (
    <SafeAreaView
      testID={testID}
      style={[
        {
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        containerStyles,
      ]}
    >
      {children}
    </SafeAreaView>
  )
}

Container.defaultProps = {
  containerStyles: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default Container
