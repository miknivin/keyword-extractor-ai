import {Box, Image, Text, Flex} from '@chakra-ui/react'
import logo from '../assets/openai-svgrepo-com.svg'
const Footer = () => {
  return (
    <Box marginTop={15}>
        <Flex justifyContent='center' alignItems='center'>
            <Image width={25} src={logo} marginRight={1}/>
            <Text>
                Powered by Open AI
            </Text>
        </Flex>
    </Box>
  )
}

export default Footer