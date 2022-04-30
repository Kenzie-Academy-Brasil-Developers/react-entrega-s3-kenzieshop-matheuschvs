import { useState } from "react"
import { useSelector } from "react-redux"
import {
  Flex, Heading
} from "@chakra-ui/react"

import { ProductList } from '../../components/ProductList'
import { Showcase } from "../../components/Showcase"

const Products = () => {
  const products = useSelector(({ products }) => products)
  const [product, setProduct] = useState({})

  return (
    <Flex
      as='main'
      direction="column"
      minHeight='100vh'
    >
      <Heading
        as='h1'
        color='gray.700'
        mt={125}
        mb={10}
        textAlign='center'
        textShadow='2px 2px 0 black'
      >
        🚴 BICICLETAS ⬇
      </Heading>
      <ProductList products={products} setProduct={setProduct} />
      <Showcase product={product} mt={50} mb={100} p={10} />
    </Flex>
  )
}

export { Products }
