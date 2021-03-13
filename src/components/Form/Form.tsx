import React from 'react'
import { View } from 'react-native'
import { AnyObjectSchema } from 'yup'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface Props {
  defaultValues: {
    [key: string]: unknown
  }
  children: JSX.Element | JSX.Element[]
  schema: AnyObjectSchema
}

export const Form = ({
  defaultValues = {},
  children,
  schema,
}: Props): JSX.Element => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  return (
    <FormProvider {...methods}>
      <View>{children}</View>
    </FormProvider>
  )
}
