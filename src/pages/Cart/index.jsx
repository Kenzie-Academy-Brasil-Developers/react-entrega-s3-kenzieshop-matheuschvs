import { Flex, Heading } from "@chakra-ui/react"

import { CartList } from "../../components/CartList"

const Cart = () => {
  return (
    <Flex
      as='main'
      direction="column"
      minHeight='100vh'
    >
      <Heading
        as='h1'
        color='secondary.900'
        mt={[150, 125]}
        mb={10}
        textAlign='center'
        textShadow='2px 2px 2px black'
      >
        🛍 CARRINHO ⬇
      </Heading>
      <CartList />
    </Flex>
  )
}

export { Cart }
