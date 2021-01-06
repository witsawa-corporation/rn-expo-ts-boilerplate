import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/native'
import { useFormContext, Controller } from 'react-hook-form'
import TagInput from 'react-native-tags-input'
import theme from '../../theme/index'
import { Item, Label, ErrorMessage } from './components'

const ErrorBox = styled.View`
  position: ${(props) => props.errorInside && 'absolute'};
  bottom: ${(props) => props.errorInside && '5px'};
  padding: ${(props) => props.errorInside && '8px'};
`

export const TagsInput = ({
  name,
  // line = false,
  label,
  // style,
  itemStyle = {},
  errorInside = false,
  // updateState,
  // tags,
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
              <TagInput
                keysForTag={'?'}
                updateState={onChange}
                tags={value}
                containerStyle={{
                  paddingHorizontal: 0,
                }}
                inputContainerStyle={{
                  borderBottomWidth: 1,
                  borderColor: theme.colors.greyInput,
                }}
                inputStyle={{
                  fontSize: 14,
                  paddingTop: 5,
                  fontFamily: 'Kanit_400Regular',
                  marginHorizontal: 0,
                  minHeight: 15,
                  marginLeft: 0,
                  marginRight: 0,
                  color: theme.colors.primary,
                }}
                tagStyle={{
                  borderWidth: 1,
                  backgroundColor: 'transparent',
                  borderRadius: 10,
                  height: 35,
                  borderColor: theme.colors.primary,
                }}
                tagTextStyle={{
                  color: theme.colors.primary,
                }}
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

TagsInput.propTypes = {
  name: PropTypes.string,
  line: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.any,
  style: PropTypes.object,
  itemStyle: PropTypes.object,
  errorInside: PropTypes.bool,
}
