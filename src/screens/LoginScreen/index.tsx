import React from 'react'
import * as yup from 'yup'
import Container from 'components/Container'
import Content from 'components/Content'
import Text from 'components/Text'
import { Form, Input, SubmitButton } from 'components/Form'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const defaultValues = {
  email: '',
  password: '',
}

const LoginScreen = (): JSX.Element => {
  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  return (
    <Container>
      <Content>
        <Text>LoginScreen</Text>
        <Form schema={schema} defaultValues={defaultValues}>
          <Input testID="login.input.email" name="email" placeholder="Email" />
          <Input
            testID="login.input.password"
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <SubmitButton
            testID="loginButton"
            title="Log in"
            onSubmit={onSubmit}
          />
        </Form>
      </Content>
    </Container>
  )
}

export default LoginScreen
