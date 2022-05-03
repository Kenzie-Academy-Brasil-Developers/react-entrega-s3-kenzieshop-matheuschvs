import {
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Text
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

import { addProductThunk } from "../../store/modules/cart/thunks"

const Showcase = ({ product, product: { id, name, price, image }, ...rest }) => {
  const dispatch = useDispatch()

  return (
    <Center>
      <Flex
        {...rest}
        as='section'
        maxW={1037}
        align='center'
        direction={['column', 'column', 'row']}
      >
        {id && <Center as='figure' w={[300, 400]}>
          <Image
            as={motion.img}
            whileHover={{ scale: 1.1 }}
            src={image}
            alt={name}
            h={300}
          />
        </Center>}
        <Flex
          justify='space-between'
          direction='column'
          ml={[0, 10]}
          flex={1}
          p={[5, 0]}
          as='article'
        >
          <Heading
            as='h2'
            size='lg'
            h={5}
            flex={1}
            color='secondary.900'
            textShadow='1px 1px 0 black'
          >
            {name || 'Nenhum produto foi selecionado'}
          </Heading>
          {id && <>
            <Text
              as='b'
              color='tertiary.900'
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
              leftIcon={<Icon as={AiOutlinePlus} />}
              onClick={() => dispatch(addProductThunk(product))}
              bg='primary.500'
              color='primary.100'
              _hover={{ bg: 'primary.100', color: 'primary.500' }}
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
