import { useSelector } from "react-redux"
import {
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Box,
  Button
} from "@chakra-ui/react"
import { AiOutlinePlus } from 'react-icons/ai'

const Products = () => {
  const products = useSelector(({ products }) => products)

  return (
    <Center as='main'>
      <Flex
        as='ul'
        p={4}
        direction='row'
        wrap='wrap'
        justify='space-between'
      >
        {products.map(({ name, price, image }, index) => (
          <Box
            as='li'
            key={index}
            w={300}
            listStyleType='none'
            borderRadius={3}
            boxShadow='2px 2px 0 2px rgb(0, 0, 0, 0.5)'
            mb={10}
          >
            <Image src={image} alt={name} h={300} />
            <Flex direction='column' justify='space-between' p={2}>
              <Heading
                as='h2'
                size='sm'
                mb={4}
                h={10}
                isTruncated
              >
                {name}
              </Heading>
              <Text as='b' fontSize='md' textAlign='right'>
                {price}
              </Text>
              <Button
                mt={2}
                colorScheme='twitter'
                leftIcon={<AiOutlinePlus />}
              >Adicionar ao carrinho</Button>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Center>
  )
}

export { Products }
