import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  StackDivider
} from "@chakra-ui/react"

const ProductList = ({ products }) => {
  return (
    <HStack
      as='ul'
      p={4}
      overflow='auto'
      spacing={10}
      mt={20}
      divider={<StackDivider borderColor='gray.200' />}
    >
      {products.map(({ id, name, image }) => (
        <Box
          as='li'
          key={id}
          w={150}
          listStyleType='none'
          borderRadius={10}
        >
          <Image src={image} alt={name} h={150} />
          <Flex
            direction='column'
            justify='space-between'
            p={2}
            borderTop='1px solid rgb(0, 0, 0, 0.3)'
          >
            <Heading
              as='h2'
              size='xs'
              h={5}
              isTruncated
            >
              {name}
            </Heading>
            <Button
              mt={2}
              borderRadius={0}
            >Exibir</Button>
          </Flex>
        </Box>
      ))}
    </HStack>
  )
}

export { ProductList }
