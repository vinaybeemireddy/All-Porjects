import React from 'react'
import { Stack, HStack, VStack,Box } from '@chakra-ui/react'

const Stacks = () => {
  return (
    <Stack direction={{base:"column", lg:"row"}} spacing='24px'>
  <Box w='40px' h='40px' bg="brand.100">
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
</Stack>
  )
}

export default Stacks