import { Box, Text, Image } from "@chakra-ui/react";

export default function LoginCard() {
  return (
    <Box
      maxW="xl"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      bg="white"
      h="450px"
      boxShadow="lg"
      borderColor="gray.200"
      borderStyle="solid"
      borderRadius="lg"
      p="10px"
      m="auto"
    >
      <Image
        src="https://img.icons8.com/external-justicon-flat-justicon/200/external-cat-dog-and-cat-justicon-flat-justicon-4.png"
        alt="logo"
        flex="1"
        h="90px"
        w="auto"
        m="auto"
        // center image
      />
      <Text
        fontSize="xl"
        fontWeight="bold"
        textAlign="center"
        mb="10px"
        fontFamily="monaco"
        bgGradient="linear-gradient(to right, #ffb6c1, #ff69b4)"
        bgClip="text"
        fontWeight="extrabold"
      >
        Amor Miau
      </Text>
    </Box>
  );
}
