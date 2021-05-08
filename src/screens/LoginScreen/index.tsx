import React from 'react'
import * as yup from 'yup'
import { useLocalization } from 'contexts/LocalizationContext'
import Container from 'components/Container'
import Content from 'components/Content'
import Text from 'components/Text'
import { Form, Input, SubmitButton } from 'components/Form'

const defaultValues = {
  email: '',
  password: '',
}

const LoginScreen = (): JSX.Element => {
  const { t } = useLocalization()

  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .lowercase()
      .email(t('screens.LoginScreen.errors.emailInvalid'))
      .required(t('screens.LoginScreen.errors.emailRequired')),
    password: yup
      .string()
      .required(t('screens.LoginScreen.errors.passwordRequired')),
  })
  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  return (
    <Container>
      <Content>
        <Text>{t('screens.LoginScreen.title')}</Text>
        <Form schema={schema} defaultValues={defaultValues}>
          <Input
            testID="login.input.email"
            name="email"
            placeholder={t('screens.LoginScreen.form.email')}
            keyboardType="email-address"
          />
          <Input
            testID="login.input.password"
            name="password"
            placeholder={t('screens.LoginScreen.form.password')}
            secureTextEntry
          />
          <SubmitButton
            testID="loginButton"
            title={t('screens.LoginScreen.button')}
            onSubmit={onSubmit}
          />
        </Form>
      </Content>
    </Container>
  )
}

export default LoginScreen
