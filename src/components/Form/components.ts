import styled from '@emotion/native'
import Text from 'components/Text'

export const Item = styled.View`
  margin-bottom: 10px;
`

export const Label = styled(Text)``

export const ErrorMessage = styled(Text)`
  color: ${({ theme }) => theme.color.danger};
`
