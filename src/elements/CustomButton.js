import React from 'react'
import { Button } from '@chakra-ui/react'
import CustomText from './CustomText'

const CustomButton = (props) => {
  return (
    <Button {...props}>
      <CustomText>{props.title}</CustomText>
    </Button>
  )
}

export default CustomButton
