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

import { increaseQuantity, decreaseQuantity } from '../../store/modules/cart/actions'

const CartList = () => {
  const cart = useSelector(({ cart }) => cart)
  const dispatch = useDispatch()

  return (
    <VStack
      as='ul'
      mt={15}
      mb={100}
      divider={<StackDivider borderColor='gray.200' />}
    >
      {cart.map((product) => {
        const { id, image, name, price, quantity } = product

        return (
          <Flex
            p={25}
            w='100%'
            as='li'
            key={id}
            justify="space-between"
          >
            <Center as='figure' mr={5} w={300} minW={300}>
              <Image src={image} alt={name} w='100%' />
            </Center>
            <Flex
              flex='1'
              direction='column'
              justify="space-between"
              maxW='calc(100% - 320px)'
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
                justifyContent='flex-end'
              >
                <Box mr={10}>
                  <Text>Quantidade: </Text>
                  <Button
                    mr={2}
                    fontSize='2xl'
                    bg='red.200'
                    borderRadius={0}
                    onClick={() => dispatch(decreaseQuantity(product))}
                  >-</Button>
                  <Text as='b'>{quantity}</Text>
                  <Button
                    ml={2}
                    fontSize='2xl'
                    bg='green.200'
                    borderRadius={0}
                    onClick={() => dispatch(increaseQuantity(product))}
                  >+</Button>
                </Box>
                <Button>
                  <Icon as={BsTrash} mr={2} />
                  remover
                </Button>
              </Flex>
            </Flex>
          </Flex>
        )
      })}
    </VStack>
  )
}

export { CartList }
