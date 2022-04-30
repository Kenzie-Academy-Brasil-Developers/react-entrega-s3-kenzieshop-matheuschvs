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

const Showcase = ({ product: { id, name, price, image }, ...rest }) => {
  return (
    <Flex {...rest}>
      {id && <Center as='figure' w={400}>
        <Image src={image} alt={name} h={300} />
      </Center>}
      <Flex
        justify='space-between'
        direction='column'
        ml={10}
        flex={1}
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
          >
            Adicionar ao carrinho
          </Button>
        </>}
      </Flex>
    </Flex>
  )
}

export { Showcase }
