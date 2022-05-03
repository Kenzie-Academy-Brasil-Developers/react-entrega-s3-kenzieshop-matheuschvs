import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  StackDivider
} from "@chakra-ui/react"
import { motion } from "framer-motion"

const ProductList = ({ products, setProduct }) => {
  return (
    <HStack
      as={motion.ul}
      p={4}
      overflow='auto'
      spacing={10}
      divider={<StackDivider borderColor='secondary.200' />}
      animate={{ translateX: [-1000, 0] }}
    >
      {products.map((product) => (
        <Box
          as={motion.li}
          key={product.id}
          w={150}
          listStyleType='none'
          borderRadius={10}
          animate={{ scale: [0, 1] }}
        >
          <Image
            src={product.image}
            alt={product.name}
            h={150}
            borderTopRadius={3}
          />
          <Flex
            direction='column'
            justify='space-between'
            paddingTop={2}
            borderTop='1px solid rgb(0, 0, 0, 0.3)'
          >
            <Heading
              as='h2'
              size='xs'
              h={5}
              isTruncated
              color='primary.900'
            >
              {product.name}
            </Heading>
            <Button
              mt={2}
              borderRadius={0}
              onClick={() => setProduct(product)}
              borderColor='tertiary.500'
              color='tertiary.900'
              variant='outline'
              _hover={{ bg: 'tertiary.500', color: 'tertiary.100' }}
            >Exibir</Button>
          </Flex>
        </Box>
      ))}
    </HStack>
  )
}

export { ProductList }
