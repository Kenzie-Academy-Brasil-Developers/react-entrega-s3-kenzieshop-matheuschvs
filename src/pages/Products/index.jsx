import { useSelector } from "react-redux"
import {
  Center,
} from "@chakra-ui/react"

import { ProductList } from '../../components/ProductList'

const Products = () => {
  const products = useSelector(({ products }) => products)

  return (
    <Center as='main'>
      <ProductList products={products} />
    </Center>
  )
}

export { Products }
