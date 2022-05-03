import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  StackDivider,
  Text,
  VStack
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { BsTrash } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

import {
  decreaseQuantityThunk,
  increaseQuantityThunk,
  removeProductThunk
} from "../../store/modules/cart/thunks"

const CartList = () => {
  const cart = useSelector(({ cart }) => cart)
  const dispatch = useDispatch()

  return (
    <Flex direction='column'>
      <Flex
        direction={{ base: 'column', md: 'row', xl: 'column' }}
        align='center'
        justify='space-around'
      >
        <Box p={5}>
          <Heading
            as='h2'
            size='lg'
            mr={5}
            display='inline-block'
            color='primary.900'
          >
            Valor Total:
          </Heading>
          <Text as='b' color='tertiary.900' fontSize='2xl'>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(cart.reduce(
              (acc, item) => acc += item.price * item.quantity, 0
            ))}
          </Text>
        </Box>
        <Button
          variant='outline'
          borderColor='primary.900'
          color='primary.900'
          _hover={{ bg: 'primary.900', color: 'primary.100' }}
          minW={{ base: 300, xl: 800 }}
          mb={[10, 0]}
        >Finalizar Compra</Button>
      </Flex>
      <Center>
        <VStack
          as={motion.ul}
          mt={15}
          mb={100}
          divider={<StackDivider borderColor='gray.200' />}
          maxW={[300, 400, 750, 990, 1037]}
          animate={{ translateY: [1000, 1] }}
        >
          {cart.length === 0 && <Box as='li'>
            <Heading as='h4' size='md' color='tertiary.900'>
              Que pena, Seu carrinho está vazio!
            </Heading>
            <Text color='secondary.500'>
              Volte e adicione produtos para atualizar a lista
            </Text>
          </Box>}
          {cart.map((product) => {
            const { id, image, name, price, quantity } = product

            return (
              <Flex
                as='li'
                p={[0, 0, 25]}
                w='100%'
                key={id}
                direction={['column', 'column', 'row']}
                justify="space-between"
              >
                <Center as='figure' mr={5} w={[300, 400, 300]} minW={300}>
                  <Image src={image} alt={name} w='100%' />
                </Center>
                <Flex
                  flex='1'
                  direction='column'
                  justify="space-between"
                  maxW={['100%', '100%', 'calc(100% - 320px)']}
                >
                  <Heading
                    flex='1'
                    as='h3'
                    size='md'
                    mt={5}
                    mb={10}
                    color='primary.900'
                    isTruncated
                  >
                    {name}
                  </Heading>
                  <Text
                    fontSize='xl'
                    as='b'
                    color='tertiary.900'
                    textAlign='right'
                  >
                    {Intl.NumberFormat(
                      'pt-BR',
                      { style: 'currency', currency: 'BRL' }
                    ).format(price * quantity || 0)}
                  </Text>
                  <Flex
                    alignItems='flex-end'
                    justifyContent={['space-between', 'space-between', 'flex-end']}
                  >
                    <Box mr={10} color='primary.900'>
                      <Text>Quantidade: </Text>
                      <Button
                        mr={2}
                        fontSize='2xl'
                        bg='secondary.100'
                        color='secondary.900'
                        _hover={{ bg: 'secondary.500', color: 'secondary.100' }}
                        borderRadius={0}
                        onClick={() => dispatch(decreaseQuantityThunk(product))}
                      >-</Button>
                      <Text as='b'>{quantity}</Text>
                      <Button
                        ml={2}
                        fontSize='2xl'
                        bg='primary.100'
                        color='primary.900'
                        _hover={{ bg: 'primary.500', color: 'primary.100' }}
                        borderRadius={0}
                        onClick={() => dispatch(increaseQuantityThunk(product))}
                      >+</Button>
                    </Box>
                    <Button
                      bg='secondary.100'
                      color='secondary.500'
                      _hover={{ bg: 'secondary.500', color: 'secondary.100' }}
                      onClick={() => dispatch(removeProductThunk(product))}
                    >
                      <Icon as={BsTrash} mr={2} />
                      remover
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            )
          })}
        </VStack>
      </Center>
    </Flex >
  )
}

export { CartList }
