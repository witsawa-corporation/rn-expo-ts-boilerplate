import React from 'react'
import Container from 'components/Container'
import Content from 'components/Content'
import Text from 'components/Text'
import Button from 'components/Button'
import { useAuth } from 'contexts/AuthContext'

export type Props = {
  navigation: any
}

const HomeScreen = ({ navigation }: Props): JSX.Element => {
  const {
    authContext: { logout },
  } = useAuth()
  return (
    <Container>
      <Content>
        <Text>HomeScreen</Text>
        <Button
          testID="see-detail"
          title="See Detail"
          onPress={() => navigation.navigate('Details')}
        />
        <Button testID="logout" title="Logout" onPress={() => logout()} />
      </Content>
    </Container>
  )
}

export default HomeScreen
