import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const TextInput = ({extractKeywords}) => {
    const [text, setText] = useState('');
    const toast = useToast();


    const submitText = () => {
        if (text === ''){
            toast({
                title:'Text field is empty',
                description: 'Please enter some text to extract keywords',
                status:'error',
                duration: 5000,
                isClosable:false
            })
        }
        else{
            extractKeywords(text);
        }
    }

    return (
        <>
        <Textarea
        bg='teal.400'
        color='white'
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={ (e)=> setText(e.target.value)}
        />
        <Button
        bg='teal.600'
        color='white'
        marginTop={4}
        width='100%'
        _hover={{bg:'teal.700'}}
        onClick={submitText} // Corrected onClick handler
        >
        Submit
        </Button>
        </>
    )
}

export default TextInput;
