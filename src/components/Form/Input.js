import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/native'
import { useFormContext, Controller } from 'react-hook-form'

import { Item, Label, ErrorMessage } from './components'

const TextInput = styled.TextInput`
  ${({ theme, line }) => {
    if (line) {
      return `
    border-bottom-width:1;
    border-bottom-color: ${theme.colors.greyInput};
    border-radius: 0px;
    `
    }
    return `
  border: 1px solid ${theme.colors.secondary};
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
  `
  }}
  background-color: transparent;
  font-family: Kanit_400Regular;
`
const ErrorBox = styled.View`
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
  defaultValue,
  errorInside = false,
  ...props
}) => {
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
                // ref={register}
                testID={testID}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value && value.toString()}
                defaultValue={defaultValue}
                style={style}
                line={line}
                {...props}
              />
            </Item>
            {errors[name] && (
              <ErrorBox errorInside={errorInside}>
                {errors[name].type === 'required' ? (
                  <ErrorMessage>* Required</ErrorMessage>
                ) : (
                  <ErrorMessage>{errors[name].message}</ErrorMessage>
                )}
              </ErrorBox>
            )}
          </>
        )}
        name={name}
      />
    </Item>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  line: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.any,
  style: PropTypes.object,
  itemStyle: PropTypes.object,
  errorInside: PropTypes.bool,
  defaultValue: PropTypes.any,
  testID: PropTypes.string.isRequired,
}
