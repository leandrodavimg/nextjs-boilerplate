/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line react/react-in-jsx-scope
import styled from 'styled-components'
import {
  Button,
  Switch,
  useColorMode,
  Text,
  useColorModeValue,
  useToast,
  Heading
} from '@chakra-ui/react'

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Main = ({ title = 'Boilerplate - Leandro Freitas' }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const color = useColorModeValue('cutom.900', 'cutom.100')
  const toast = useToast()

  return (
    <Container>
      <Switch size="md" colorScheme="red" onChange={toggleColorMode} />
      <span>{colorMode !== 'light' ? 'Dark' : 'Light'}</span>
      <br />
      <Text>{title}</Text>
      <br />
      <Heading
        as="h2"
        fontFamily="Passions Conflict"
        size="2xl"
        noOfLines={1}
        color={color}
      >
        Font Passion Conflict
      </Heading>
      <br />
      <Button
        colorScheme="red"
        onClick={() =>
          toast({
            title: `my toast alert`,
            position: 'top',
            isClosable: true,
            status: 'error'
          })
        }
      >
        toast
      </Button>
    </Container>
  )
}

export default Main
