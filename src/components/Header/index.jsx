import { BsCart3 } from 'react-icons/bs'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Center, Circle, Flex, Heading, Icon, Link } from "@chakra-ui/react"
import { useSelector } from 'react-redux'

const Header = () => {
  const cart = useSelector(({ cart }) => cart)

  return (
    <Flex
      as='header'
      padding={4}
      paddingX={6}
      justify='space-between'
      bg='teal.100'
      boxShadow='md'
      position='fixed'
      top={0}
      width='100%'
      zIndex={3}
    >
      <Heading
        as='h1'
        size='lg'
        color='gray.500'
        textShadow='-9px 9px 5px rgb(0, 0, 0, 0.5), 1px 1px 0 black'
      >
        Kenzie <Box as='span' color='red.500'>Shop</Box>
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
            >
              {cart.length}
            </Circle>
          </Box>
          Carrinho
        </Link>
      </Center>
    </Flex>
  )
}

export { Header }
