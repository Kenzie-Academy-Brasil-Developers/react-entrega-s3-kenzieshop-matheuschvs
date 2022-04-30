import { useState } from "react"
import { useSelector } from "react-redux"
import {
  Center,
  Flex
} from "@chakra-ui/react"

import { ProductList } from '../../components/ProductList'
import { Showcase } from "../../components/Showcase"

const Products = () => {
  const products = useSelector(({ products }) => products)
  const [product, setProduct] = useState(products[0])

  return (
    <Flex
      as='main'
      direction="column"
    >
      <ProductList products={products} setProduct={setProduct} />
      <Showcase product={product} mt={50} p={10} />
    </Flex>
  )
}

export { Products }
