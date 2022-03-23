import React from 'react'
import CustomText from './CustomText'
import CustomButton from './CustomButton'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const CustomModel = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.cancelEvent}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <CustomText>{props.title}</CustomText>
        </ModalHeader>
        {props.cancelEvent && <ModalCloseButton />}
        <ModalBody pb={6}>{props.modelBody}</ModalBody>
        {!props.noFooterBtn && (
          <ModalFooter>
            <CustomButton
              mr={3}
              title={props.okayBtnTxt}
              onClick={props.okayEvent}
            />
            <CustomButton
              title={props.cancelBtnTxt}
              onClick={props.cancelEvent}
            />
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
}

export default CustomModel
