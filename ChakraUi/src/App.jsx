import React from 'react'
import { Box, Container} from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { StarIcon} from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import SimpleGrids from './Components/SimpleGrids'
import Stacks from './Components/Stacks'

const App = () => {

 return(
  <>
  {/* <Center>
  <Box bg="pink" p={8}>
    this is box
  </Box>

  </Center>
  <Container maxW='100%' p={2}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda optio id corrupti? Eum necessitatibus a sequi ipsam ad explicabo molestias, ducimus cumque magni ut sit voluptates! Aliquam, non et.
    Odio repellat adipisci doloremque enim illo. Aspernatur a nisi id alias ratione tempore officia magni explicabo sit inventore quisquam, distinctio earum placeat quod dolorem enim accusantium aperiam veritatis ab reprehenderit?
    Accusantium quaerat, alias libero atque deserunt necessitatibus temporibus sint magni non ipsum omnis saepe ut, molestiae beatae magnam voluptatem sequi ducimus cumque, corporis nam. Tempora quos quo incidunt illum ad?
  </Container> */}
  {/* <SimpleGrids/> */}
  <Stacks/>
  </>
 )
}

export default App