import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'

const SimpleGrids = () => {
  return (
    <SimpleGrid columns={{sm:1,lg:2,xl:3}} spacing={10}
    bg={{base:"black",sm:'lightblue', lg:"lightpink",xl:"lightgreen"}}>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
  )
}

export default SimpleGrids