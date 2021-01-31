import React from 'react'
import Container from 'components/Container'
import Content from 'components/Content'
import Text from 'components/Text'
import Button from 'components/Button'

export type Props = {
  navigation: any
}

const HomeScreen = ({ navigation }: Props): JSX.Element => {
  return (
    <Container>
      <Content>
        <Text>HomeScreen</Text>
        <Button
          title="See Detail"
          onPress={() => navigation.navigate('Details')}
        />
      </Content>
    </Container>
  )
}

export default HomeScreen
