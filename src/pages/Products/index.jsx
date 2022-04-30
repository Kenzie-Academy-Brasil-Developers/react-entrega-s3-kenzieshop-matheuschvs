import { useState } from "react"
import { useSelector } from "react-redux"
import {
  Flex
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
    >
      <ProductList products={products} setProduct={setProduct} />
      <Showcase product={product} mt={50} mb={100} p={10} />
    </Flex>
  )
}

export { Products }
