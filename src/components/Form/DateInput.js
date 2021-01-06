import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/native'
import { useFormContext, Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import theme from '../../theme/index'
import RNDateTimePicker from 'react-native-datepicker'
import { format } from '../../static'

import { Item, Label, ErrorMessage } from './components'

const ErrorBox = styled.View`
  position: ${(props) => props.errorInside && 'absolute'};
  bottom: ${(props) => props.errorInside && '5px'};
  padding: ${(props) => props.errorInside && '8px'};
`

export const DateInput = ({
  name,
  // line = false,
  label,
  // style,
  testID,
  // defaultValue,
  itemStyle = {},
  errorInside = false,
  isEnabled,
  isBirthDate,
}) => {
  const { control, errors } = useFormContext()
  const lastDate = dayjs().format(format)
  // const [date, setDate] = useState(new Date(1598051730000))

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date
  //   setShow(Platform.OS === 'ios')
  //   setDate(currentDate)
  // }

  return (
    <Item style={{ ...itemStyle }}>
      {label && <Label>{label}</Label>}
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <>
            <Item style={itemStyle}>
              <RNDateTimePicker
                style={{
                  width: '100%',
                  padding: 0,
                  marginBottom: 3,
                }}
                testID={testID}
                date={value}
                mode="date"
                placeholder=" "
                format="DD-MMM-YYYY"
                maxDate={isBirthDate && lastDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                disabled={isEnabled}
                showIcon={false}
                androidMode="spinner"
                customStyles={{
                  datePicker: {
                    backgroundColor: 'white',
                  },
                  disabled: {
                    backgroundColor: 'white',
                    opacity: 0.3,
                  },
                  dateText: {
                    fontFamily: 'Kanit_400Regular',
                  },
                  placeholderText: {
                    fontFamily: 'Kanit_400Regular',
                  },
                  dateInput: {
                    // backgroundColor: 'purple',
                    margin: 0,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    paddingBottom: 3,
                    height: 27,
                    borderWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.greyInput,
                  },
                }}
                onDateChange={(value) => onChange(value)}
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

DateInput.propTypes = {
  name: PropTypes.string,
  line: PropTypes.bool,
  label: PropTypes.string,
  isEnabled: PropTypes.bool,
  value: PropTypes.any,
  style: PropTypes.object,
  itemStyle: PropTypes.object,
  errorInside: PropTypes.bool,
  testID: PropTypes.string,
  isBirthDate: PropTypes.bool,
}
