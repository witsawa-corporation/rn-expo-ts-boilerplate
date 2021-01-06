import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/native'
import { useFormContext, Controller } from 'react-hook-form'
import dayjs from 'dayjs'
// import 'dayjs/locale/th'
import theme from '../../theme/index'
import RNDateTimePicker from 'react-native-datepicker'

import { Item, Label, ErrorMessage } from './components'

const ErrorBox = styled.View`
  position: ${(props) => props.errorInside && 'absolute'};
  bottom: ${(props) => props.errorInside && '5px'};
  padding: ${(props) => props.errorInside && '8px'};
`

export const TimeInput = ({
  name,
  // line = false,
  label,
  // style,
  itemStyle = {},
  errorInside = false,
  isEnabled,
  startBeforeEnd = true,
  startKey,
  endKey,
  // ...props
}) => {
  const { control, errors, getValues } = useFormContext()
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)
  let minDate
  if (startBeforeEnd) {
    const start = getValues(startKey) || '00:00'
    // const end = getValues(endKey)
    if (name === endKey) {
      const time = start.split(':')
      console.log({ time })
      minDate = dayjs().set('h', time[0]).set('m', time[1]).format('HH:mm')
    }
  }

  //   const lastDate = dayjs().format('DD-MM-YYYY')
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
                date={value}
                mode="time"
                placeholder=" "
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                disabled={isEnabled}
                showIcon={false}
                androidMode="spinner"
                is24Hour={false}
                format="HH:mm"
                minDate={minDate}
                customStyles={{
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
                onDateChange={(value) => {
                  onChange(value)
                  setCount((c) => c + 1)
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

TimeInput.propTypes = {
  name: PropTypes.string,
  line: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.any,
  style: PropTypes.object,
  itemStyle: PropTypes.object,
  errorInside: PropTypes.bool,
  isEnabled: PropTypes.bool,
  startBeforeEnd: PropTypes.bool,
  startKey: PropTypes.string,
  endKey: PropTypes.string,
}
