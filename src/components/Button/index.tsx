import React from 'react'
import { TouchableOpacity } from 'react-native'
import Text from '../Text'

export interface Props {
  title: string
  onPress: () => void
  type?: string
}

const Button: React.FC<Props> = ({ title, onPress, type }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
