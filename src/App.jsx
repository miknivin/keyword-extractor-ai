import { Container,Box, useToast } from "@chakra-ui/react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import TextInput from "./Components/textInput"
import { useState } from "react"
import KeywordsModel from "./Components/KeywordsModel"

const App = () => {
  const toast = useToast();

  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        "role": "user",
                        "content": `Extract keywords from this text. Make the first letter of each word uppercase and separate with commas.\n${text}`
                    }
                ],
                temperature: 0.5,
                max_tokens: 60,
                frequency_penalty: 0.8
            })
        };
        const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);

        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }

        const json = await response.json();
        const data = json.choices[0].message.content.trim();
        console.log(data);
        setKeywords(data);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state here, e.g., display an error message to the user
        setLoading(false);
        setIsOpen(false); // Close the modal on error
        toast({
          title:'Error fetching data',
          description: 'Contact support',
          status:'error',
          duration: 5000,
          isClosable:false
      })
    }
};

const closeModal = () => {
  setIsOpen(false)
}


  return (
    <Box bg='gray.800' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent textColor='white'>
        <Header/>
        <TextInput  extractKeywords={extractKeywords}/>
        <Footer/>
      </Container>
      <KeywordsModel keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal}/>
    </Box>
  )
}

export default App