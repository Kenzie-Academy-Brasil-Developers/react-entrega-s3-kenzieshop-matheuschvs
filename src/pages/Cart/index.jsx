import { Flex, Heading } from "@chakra-ui/react"

import { CartList } from "../../components/CartList"
import { ThemeChanger } from "../../components/ThemeChanger"

const Cart = () => {
  return (
    <Flex
      as='main'
      direction="column"
      minHeight='100vh'
    >
      <ThemeChanger
        mt={[125, 100]}
        alignSelf='flex-end'
        mr={5}
        mb={5}
      />
      <Heading
        as='h1'
        color='secondary.900'
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
