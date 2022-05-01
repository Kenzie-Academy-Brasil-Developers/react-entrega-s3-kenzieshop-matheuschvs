import {
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Text
} from "@chakra-ui/react"
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

import { addProductThunk } from "../../store/modules/cart/thunks"

const Showcase = ({ product, product: { id, name, price, image }, ...rest }) => {
  const dispatch = useDispatch()

  return (
    <Center>
      <Flex {...rest} as='section' maxW={1037}>
        {id && <Center as='figure' w={400}>
          <Image src={image} alt={name} h={300} />
        </Center>}
        <Flex
          justify='space-between'
          direction='column'
          ml={10}
          flex={1}
          as='article'
        >
          <Heading
            as='h2'
            size='lg'
            h={5}
            flex={1}
            color='gray.600'
          >
            {name || 'Nenhum produto foi selecionado'}
          </Heading>
          {id && <>
            <Text
              as='b'
              color='green.500'
              textAlign='right'
              fontSize='2xl'
            >
              {Intl.NumberFormat(
                'pt-BR',
                { style: 'currency', currency: 'BRL' }
              ).format(price || 0)}
            </Text>
            <Button
              mt={2}
              colorScheme='telegram'
              leftIcon={<Icon as={AiOutlinePlus} />}
              onClick={() => dispatch(addProductThunk(product))}
            >
              Adicionar ao carrinho
            </Button>
          </>}
        </Flex>
      </Flex>
    </Center>
  )
}

export { Showcase }
