import { AiOutlineUser } from 'react-icons/ai'
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
      direction={['column', 'row']}
      align='center'
      justify='space-between'
      bg='primary.100'
      boxShadow='md'
      position='fixed'
      top={0}
      width='100%'
      zIndex={3}
    >
      <Center>
        <Circle
          mr={3}
          w={10}
          h={10}
          background='primary.400'
          boxShadow={`0 0 3px 2px #6BBCBC`}
        >
          <Icon w='20px' h='20px' color='primary.900' as={AiOutlineUser} />
        </Circle>
        <Heading
          as='h1'
          size='lg'
          color='primary.900'
          textShadow='-9px 9px 5px rgb(0, 0, 0, 0.5), 1px 1px 0 black'
          mb={[2, 0]}
        >
          Kenzie <Box as='span' color='secondary.900'>Shop</Box>
        </Heading>
      </Center>
      <Center as='nav'>
        <Link
          as={RouterLink}
          to='/'
          color='secondary.900'
          fontWeight='bold'
          p={2}
          borderRadius={3}
        >Produtos</Link>
        <Link
          as={RouterLink}
          to='/cart'
          color='primary.900'
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
              bg='tertiary.900'
              color='tertiary.100'
              fontSize='x-small'
            >
              {cart.reduce((acc, item) => acc += item.quantity, 0)}
            </Circle>
          </Box>
          Carrinho
        </Link>
      </Center>
    </Flex>
  )
}

export { Header }
