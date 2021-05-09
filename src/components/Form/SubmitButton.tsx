import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import Button from 'components/Button'
import { Item } from './components'

interface Props {
  title: string
  testID: string
  disabled?: boolean
  onSubmit: (data: any, e: unknown, reset: unknown) => void
}

export const SubmitButton = ({
  title,
  testID,
  disabled = false,
  onSubmit,
  ...rest
}: Props): JSX.Element => {
  const { handleSubmit, reset } = useFormContext()
  return (
    <Item>
      <Button
        testID={testID}
        title={title}
        onPress={handleSubmit((data, e) => {
          onSubmit(data, e, reset)
        })}
        disabled={disabled}
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
