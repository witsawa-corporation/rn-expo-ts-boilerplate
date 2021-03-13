import React from 'react'
import { TextInputProps } from 'react-native'
import styled from '@emotion/native'
import { useFormContext, Controller } from 'react-hook-form'

import { Item, Label, ErrorMessage } from './components'

interface Props extends TextInputProps {
  name: string
  line?: boolean
  label?: string
  style?: {
    [key: string]: unknown
  }
  testID: string
  itemStyle?: {
    [key: string]: unknown
  }
  errorInside?: boolean
}
interface InputProps {
  line: boolean
}
interface ErrorBoxProps {
  errorInside: boolean
}

const TextInput = styled.TextInput<InputProps>`
  ${({ theme, line }) => {
    if (line) {
      return `
        border-bottom-width:1;
        border-bottom-color: ${theme.input.borderColor};
        border-radius: 0px;
      `
    }
    return `
      border: 1px solid ${theme.color.primary};
      border-radius: 10px;
      margin-top: 10px;
      padding: 10px;
     `
  }}
  background-color: transparent;
  /* font-family: Kanit_400Regular; */
`
const ErrorBox = styled.View<ErrorBoxProps>`
  position: ${(props) => props.errorInside && 'absolute'};
  bottom: ${(props) => props.errorInside && '5px'};
  padding: ${(props) => props.errorInside && '8px'};
`

export const Input = ({
  name,
  line = false,
  label,
  style,
  testID,
  itemStyle = {},
  errorInside = false,
  ...props
}: Props): JSX.Element => {
  const { control, errors } = useFormContext()
  return (
    <Item style={{ ...itemStyle }}>
      {label && <Label>{label}</Label>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <>
            <Item style={itemStyle}>
              <TextInput
                testID={testID}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value && value.toString()}
                style={style}
                line={line}
                {...props}
              />
            </Item>
            {errors[name] && (
              <ErrorBox errorInside={errorInside}>
                <ErrorMessage>{errors[name].message}</ErrorMessage>
              </ErrorBox>
            )}
          </>
        )}
        name={name}
      />
    </Item>
  )
}
