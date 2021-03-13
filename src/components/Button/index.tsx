import React from 'react'
import styled from '@emotion/native'
import Text from 'components/Text'

export type TouchableProps = {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  outline?: boolean
  block?: boolean
  disabled?: boolean
}

export type Props = {
  testID: string
  title: string
  onPress: () => void
} & TouchableProps

const Touchable = styled.TouchableOpacity<TouchableProps>`
  background-color: ${(props) => props.theme.color[props.color || 'primary']};
  padding: 10px;
  border-radius: 8px;
  align-items: center;
`
const ButtonText = styled(Text)`
  color: white;
`

const Button = ({
  testID,
  title,
  onPress,
  color = 'primary',
  outline = false,
  block = false,
  disabled = false,
}: Props): JSX.Element => {
  return (
    <Touchable
      testID={testID}
      onPress={onPress}
      color={color}
      outline={outline}
      block={block}
      disabled={disabled}
    >
      <ButtonText>{title}</ButtonText>
    </Touchable>
  )
}

export default Button
