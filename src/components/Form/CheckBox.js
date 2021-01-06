import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/native'
import { useFormContext, Controller } from 'react-hook-form'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Item, Label, ErrorMessage } from './components'
import Check from 'assets/images/Cool_kidz_icon_Check-blue.png'

const ErrorBox = styled.View`
  position: ${(props) => props.errorInside && 'absolute'};
  bottom: ${(props) => props.errorInside && '5px'};
  padding: ${(props) => props.errorInside && '8px'};
`

export const CheckBox = ({
  name,
  text,
  label,
  defaultValue = false,
  itemStyle = {},
  errorInside = false,
}) => {
  const { control, errors } = useFormContext()
  return (
    <Item style={{ ...itemStyle }}>
      {label && <Label>{label}</Label>}
      <Controller
        control={control}
        render={({ onChange }) => (
          <>
            <Item style={itemStyle}>
              <BouncyCheckbox
                isChecked={defaultValue}
                fillColor="#fff"
                borderRadius={4}
                borderColor="#D3D3D3"
                borderWidth={1}
                size={20}
                text={text}
                textStyle={{ color: '#9F9B9B', paddingRight: 10 }}
                textDecoration={true}
                fontFamily="Kanit_400Regular"
                checkImageWidth={15}
                checkImageSource={Check}
                onPress={(value) => onChange(value)}
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

CheckBox.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  itemStyle: PropTypes.object,
  errorInside: PropTypes.bool,
  testID: PropTypes.string.isRequired,
  defaultValue: PropTypes.object,
}
