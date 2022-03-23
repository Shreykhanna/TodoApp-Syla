import React from "react";
import { Text } from '@chakra-ui/react'

const CustomText  = (props) => {
    return (
        <Text {...props}>{props.children}</Text>
    )
};

export default CustomText;