import { useState } from "react"
import { useSelector } from "react-redux"
import {
  Flex, Heading
} from "@chakra-ui/react"

import { ProductList } from '../../components/ProductList'
import { Showcase } from "../../components/Showcase"
import { ThemeChanger } from "../../components/ThemeChanger"

const Products = () => {
  const products = useSelector(({ products }) => products)
  const [product, setProduct] = useState({})

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
        mb={10}
        textAlign='center'
        textShadow='2px 2px 2px black'
      >
        🚴 BICICLETAS ⬇
      </Heading>
      <ProductList products={products} setProduct={setProduct} />
      <Showcase product={product} mt={50} mb={100} p={[0, 10]} />
    </Flex>
  )
}

export { Products }
