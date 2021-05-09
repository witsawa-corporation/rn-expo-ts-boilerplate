import React from 'react'
import { TextProps } from 'react-native'
import styled from '@emotion/native'

export type Props = {
  children: string
  bold?: boolean
} & TextProps

const RNText = styled.Text<Props>`
  font-family: ${({ bold }) => (bold ? 'bold' : 'regular')};
`

const Text = ({ children, bold, ...props }: Props): JSX.Element => {
  return (
    <RNText bold={bold} {...props}>
      {children}
    </RNText>
  )
}

export default Text
