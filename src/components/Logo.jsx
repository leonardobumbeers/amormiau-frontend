import { Image, Text, Flex, Box } from "@chakra-ui/react";

export default function logo() {
  return (
    // cat image
    <>
      {/* <Image
        // borderRadius="inherit"
        boxSize="140px"
        // bg="blue.100"
        // border="1px solid"
        // borderColor="gray.200"
        src="logo2.png"
        alt="logo"
      ></Image> */}
      <Flex
        ml={5}
        direction="column"
        align="center"
        justify="center"
        borderRadius="full"
        boxSize="130px"
        bg="blue.100"
      >
        <Image
          //   src="https://img.icons8.com/external-justicon-flat-justicon/200/external-cat-dog-and-cat-justicon-flat-justicon-4.png"
          src="logo2.png"
          alt="logo"
          boxSize="150px"
        />
        {/* <Text
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          // mb="px"
          fontFamily="monaco"
          bgGradient="linear-gradient(to right, #ffb6c1, #ff69b4)"
          bgClip="text"
        >
          Amor Miau
        </Text> */}
      </Flex>
    </>
  );
}
