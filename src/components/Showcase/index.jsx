import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text
} from "@chakra-ui/react"
import { AiOutlinePlus } from 'react-icons/ai'

const Showcase = ({ product: { name, price, image }, ...rest }) => {
  return (
    <Flex {...rest}>
      <Image src={image} alt={name} h={300} w={400} />
      <Flex
        justify='space-between'
        direction='column'
        ml={10}
        flex={1}
      >
        <Heading
          as='h2'
          size='md'
          h={5}
          flex={1}
        >
          {name}
        </Heading>
        <Text
          as='b'
          color='green.500'
          textAlign='right'
        >
          {Intl.NumberFormat(
            'pt-BR',
            { style: 'currency', currency: 'BRL' }
          ).format(price)}
        </Text>
        <Button
          mt={2}
          colorScheme='telegram'
          leftIcon={<Icon as={AiOutlinePlus} />}
        >Adicionar ao carrinho</Button>
      </Flex>
    </Flex>
  )
}

export { Showcase }
