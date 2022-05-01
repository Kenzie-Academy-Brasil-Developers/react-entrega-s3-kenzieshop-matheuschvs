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
      <Box p={5}>
        <Heading as='h2' size='lg' mr={5} display='inline-block'>
          Valor Total:
        </Heading>
        <Text as='b' color='green.700' fontSize='2xl'>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(cart.reduce(
            (acc, item) => acc += item.price * item.quantity, 0
          ))}
        </Text>
      </Box>
      <Center>
        <VStack
          as='ul'
          mt={15}
          mb={100}
          divider={<StackDivider borderColor='gray.200' />}
          maxW={[300, 400, 750, 990, 1037]}
        >
          {cart.length === 0 && <Box as='li'>
            <Heading as='h4' size='md' color='burlywood'>
              Que pena, Seu carrinho está vazio!
            </Heading>
            <Text>
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
                    isTruncated
                  >
                    {name}
                  </Heading>
                  <Text
                    fontSize='xl'
                    as='b'
                    color='green.700'
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
                    <Box mr={10}>
                      <Text>Quantidade: </Text>
                      <Button
                        mr={2}
                        fontSize='2xl'
                        bg='red.200'
                        borderRadius={0}
                        onClick={() => dispatch(decreaseQuantityThunk(product))}
                      >-</Button>
                      <Text as='b'>{quantity}</Text>
                      <Button
                        ml={2}
                        fontSize='2xl'
                        bg='green.200'
                        borderRadius={0}
                        onClick={() => dispatch(increaseQuantityThunk(product))}
                      >+</Button>
                    </Box>
                    <Button onClick={() => dispatch(removeProductThunk(product))}>
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
