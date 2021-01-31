import React from 'react'
import { TouchableOpacity } from 'react-native'
import Text from '../Text'

export type Props = {
  title: string
  onPress: () => void
  type?: string
}

const Button = ({ title, onPress, type }: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
