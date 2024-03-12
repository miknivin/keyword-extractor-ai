import { Heading, Image, Text } from "@chakra-ui/react"
import logo from '../assets/keyword-icon.svg'
const Header = () => {
  return (
    <>
    <Image src={logo} alt="logo" width={100} marginBottom='1rem'/>
    <Heading color='white' marginBottom='1rem'>
     Ai Keyword Extractor
    </Heading>
    <Text fontSize={25} textAlign='center'>
        Paste in your Text and we will do the rest
    </Text>
    </>
  )
}

export default Header