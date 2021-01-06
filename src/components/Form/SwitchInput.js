import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/native'
import { useFormContext, Controller } from 'react-hook-form'
import { Switch } from 'react-native'
import { Item, Label, ErrorMessage } from './components'

const ErrorBox = styled.View`
  position: ${(props) => props.errorInside && 'absolute'};
  bottom: ${(props) => props.errorInside && '5px'};
  padding: ${(props) => props.errorInside && '8px'};
`

export const SwitchInput = ({
  name,
  label,
  itemStyle = {},
  errorInside = false,
}) => {
  const { control, errors } = useFormContext()
  return (
    <Item style={{ ...itemStyle }}>
      {label && <Label>{label}</Label>}
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <>
            <Item style={itemStyle}>
              <Switch
                trackColor={{ false: '#D3D3D3', true: '#11BCC5' }}
                thumbColor={value ? '#FFF' : '#FFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onChange}
                value={value}
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

SwitchInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  itemStyle: PropTypes.object,
  errorInside: PropTypes.bool,
  testID: PropTypes.string.isRequired,
}
