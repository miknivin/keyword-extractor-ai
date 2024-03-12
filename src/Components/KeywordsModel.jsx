import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    CircularProgress,
    ModalBody,
    useClipboard
} from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const KeywordsModel = ({ keywords, loading, isOpen, closeModal }) => {
    const { hasCopied, onCopy } = useClipboard(keywords); // Using useClipboard hook

    return (
        <>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Keywords
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' alignItems='center' justifyContent='center'>
                        {loading ? (
                            <CircularProgress isIndeterminate color='blue.300' />
                        ) : (
                            <Text>
                                {keywords}
                            </Text>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='teal' mr={3} onClick={closeModal}>
                            Close
                        </Button>
                        <Button colorScheme='transparent' textColor='teal' _hover={{textColor: 'white', bg:'teal'}} border='2px' borderColor='teal.400' onClick={onCopy}>
                            {hasCopied ? 'Copied' : 'Copy'}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default KeywordsModel;
