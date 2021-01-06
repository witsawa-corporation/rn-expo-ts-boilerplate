import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { Item } from './components'
import Button from 'components/Button'

export const SubmitButton = ({
  title,
  style,
  fontSize,
  testID,
  disable = false,
  modal = false,
  ...rest
}) => {
  const { handleSubmit, onSubmit, reset } = useFormContext()
  return (
    <Item>
      <Button
        testID={testID}
        style={{ ...style }}
        title={title}
        onPress={handleSubmit((data, e) => onSubmit(data, e, reset))}
        fontSize={fontSize}
        disable={disable}
        modal={modal}
        {...rest}
      />
    </Item>
  )
}

SubmitButton.propTypes = {
  title: PropTypes.string,
  disable: PropTypes.bool,
  modal: PropTypes.bool,
  style: PropTypes.object,
  fontSize: PropTypes.string,
  testID: PropTypes.string.isRequired,
}
