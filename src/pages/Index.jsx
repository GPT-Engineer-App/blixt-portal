import { Box, Text, VStack, Image, Button } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="#0000FF" minH="100vh" color="white" p={8}>
      <VStack spacing={4} align="center" justify="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwQmxpeHR8ZW58MHx8fHwxNzEzNTMyODQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Blixt" />
        <Text fontSize="2xl" fontWeight="bold">
          Blixt
        </Text>
        <Text fontSize="xl">Developer | Designer | Tech Enthusiast</Text>
        <Box d="flex" mt={4}>
          <a href="https://twitter.com/blixt" target="_blank" rel="noopener noreferrer">
            <Button leftIcon={<FaTwitter />} colorScheme="twitter" mr={2}>
              Twitter
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/andreasblixt" target="_blank" rel="noopener noreferrer">
            <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" mr={2}>
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/blixt" target="_blank" rel="noopener noreferrer">
            <Button leftIcon={<FaGithub />} colorScheme="gray">
              GitHub
            </Button>
          </a>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
