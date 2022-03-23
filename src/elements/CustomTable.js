import React from 'react'
import CustomText from './CustomText'
import { Table, Thead, Tbody, Tr, Th, TableCaption } from '@chakra-ui/react'

const CustomTable = (props) => {
  return (
    <Table
      className={`custom-table ${props.className || ''}`}
      variant={props.variant || 'simple'}
    >
      {props.caption && (
        <TableCaption>
          <CustomText>{props.caption}</CustomText>
        </TableCaption>
      )}

      <Thead>
        <Tr>
          {props.columns.map((column, index) => {
            return (
              <Th>
                <CustomText>{column}</CustomText>
              </Th>
            )
          })}
        </Tr>
      </Thead>
      <Tbody>{props.children}</Tbody>
    </Table>
  )
}

export default CustomTable
