import { Center, Icon, Link, Text } from "@chakra-ui/react"
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <Center
      as='footer'
      width='100%'
      p={5}
      bg='tertiary.200'
      color='primary.900'
    >
      <Text>
        Feito com
        <Text
          as='span'
          color='secondary.500'
          _hover={{ color: 'secondary.900' }}
          transition='color 0.3s'
        > ❤ </Text>
        por <Text as='strong'>Matheus C.</Text></Text>
      <Link
        target='_blank'
        ml={4}
        href='https://www.linkedin.com/in/matheus-chaves-62954214a/'
      >
        <Center>
          <Icon w={5} h={5} as={AiOutlineLinkedin} color='linkedin.500' />
        </Center>
      </Link>
      <Link
        target='_blank'
        ml={4}
        href='https://github.com/matheuschvs'
      >
        <Center>
          <Icon w={5} h={5} as={AiOutlineGithub} color='black' />
        </Center>
      </Link>
    </Center>
  )
}

export { Footer }
