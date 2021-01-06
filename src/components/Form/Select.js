import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/native'
import { useFormContext, Controller } from 'react-hook-form'
import { Item, Label, ErrorMessage } from './components'
import RNPickerSelect from 'react-native-picker-select'
import { StyleSheet } from 'react-native'

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingTop: 7,
    paddingHorizontal: 10,
    // paddingBottom: 12,
    // borderWidth: 1,
    borderColor: '#CBCDCF',
    borderRadius: 10,
    // backgroundColor: 'white',
    color: '#000',
    fontFamily: 'Kanit_400Regular',
  },
  inputAndroid: {
    fontSize: 14,
    paddingTop: 7,
    borderColor: '#CBCDCF',
    color: '#000',
    height: 35,
    fontFamily: 'Kanit_400Regular',
  },
  IconStyle: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginTop: '50%',
  },
})

const SelectWrapper = styled.View`
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
  `
  }}
  margin-bottom: 10px;
`

const ErrorBox = styled.View`
  position: ${(props) => props.errorInside && 'absolute'};
  bottom: ${(props) => props.errorInside && '5px'};
  padding: ${(props) => props.errorInside && '8px'};
`

export const Select = ({
  defaultValue,
  name,
  line = false,
  label,
  style,
  itemStyle = {},
  errorInside = false,
  options = [],
  testID,
}) => {
  const { control, errors } = useFormContext()
  const { inputAndroid, inputIOS /*, IconStyle*/ } = pickerSelectStyles
  const customStyled = {
    inputAndroid: { ...inputAndroid, ...style },
    inputIOS: { ...inputIOS, ...style },
  }
  const listData = options.map((item, index) => ({
    key: index,
    label: item.label,
    value: item.value,
  }))
  //   const customIconStyled = {
  //     IconStyle: { ...IconStyle, ...newIconStyle },
  //   }
  return (
    <Item style={{ ...itemStyle }}>
      {label && <Label>{label}</Label>}
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <>
            <SelectWrapper line={line}>
              <RNPickerSelect
                touchableWrapperProps={{ testID }}
                useNativeAndroidPickerStyle={false}
                value={value !== null ? value : defaultValue}
                placeholder={{
                  label: 'เลือกเพศ',
                  value: '',
                }}
                onValueChange={(value) => onChange(value)}
                items={listData}
                style={customStyled}
                // Icon={() => {
                //   return (
                //     <Image
                //       source={HomeIcon}
                //       style={{
                //         width: 20,
                //         height: 20,
                //         marginRight: 5,
                //         marginTop: '30%',
                //       }}
                //       resizeMode="contain"
                //     />
                //   )
                // }}
              />

              {/* <Picker
                onBlur={onBlur}
                style={{ ...style }}
                selectedValue={value}
                onValueChange={(value) => onChange(value)}
                {...props}
              >
                {options.map((option, indx) => {
                  return (
                    <Picker.Item
                      label={option.label}
                      value={option.value}
                      key={indx}
                    />
                  )
                })}
              </Picker> */}
            </SelectWrapper>
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

Select.propTypes = {
  name: PropTypes.string,
  line: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.any,
  style: PropTypes.object,
  itemStyle: PropTypes.object,
  errorInside: PropTypes.bool,
  options: PropTypes.array,
  testID: PropTypes.string.isRequired,
  defaultValue: PropTypes.object,
}
