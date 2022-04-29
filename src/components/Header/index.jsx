import { BsCart3 } from 'react-icons/bs'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Center, Circle, Flex, Heading, Icon, Link } from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex
      as='header'
      padding={4}
      paddingX={6}
      justify='space-between'
      bg='teal.100'
      boxShadow='md'
    >
      <Heading
        as='h1'
        size='lg'
        color='gray.700'
        textShadow='-9px 9px 5px rgb(0, 0, 0, 0.5)'
      >
        Kenzie Shop
      </Heading>
      <Center as='nav'>
        <Link
          as={RouterLink}
          to='/'
          color='red.500'
          fontWeight='bold'
          p={2}
          borderRadius={3}
        >Produtos</Link>
        <Link
          as={RouterLink}
          to='/cart'
          color='teal.500'
          ml='2.5'
          fontWeight='bold'
          p={2}
          borderRadius={3}
        >
          <Box display='inline-block' pos='relative'>
            <Icon as={BsCart3} w={4} h={4} mr={2} />
            <Circle
              pos='absolute'
              top={-2}
              right={0}
              w={4}
              h={4}
              bg='twitter.500'
              color='yellow.100'
              fontSize='x-small'
            >5</Circle>
          </Box>
          Carrinho
        </Link>
      </Center>
    </Flex>
  )
}

export { Header }
