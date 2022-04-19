import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaHeart } from "react-icons/fa";
// import favicon from plubic folder

const SocialButton = ({ label, href, children }) => (
  <Link
    href={href}
    isExternal
    _hover={{ color: "pink.500" }}
    _focus={{ color: "blue.500" }}
    _active={{ color: "blue.500" }}
    _disabled={{ color: "gray.500" }}
    color="gray.500"
    fontSize="sm"
    fontWeight="semibold"
    display="flex"
    alignItems="center"
    justifyContent="center"
    px="2"
    py="1"
    rounded="md"
    transition="all 0.2s"
  >
    {children}
    <VisuallyHidden>{label}</VisuallyHidden>
  </Link>
);

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Box color={useColorModeValue("gray.700", "gray.200")}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <Link href={"#"}>A ONG</Link>
              <Link href={"#"}>Quero Adotar</Link>
              <Link
                href={"#"}
                isExternal
                //align with image
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                Quero Ajudar
                <Image
                  src="solidarity.png"
                  alt="Icone doação"
                  width="20px"
                  height="20px"
                  ml={2}
                  mb={2}
                />
              </Link>
            </Stack>

            <Stack align={"flex-start"}>
              <Link href={"#"}>Resgate</Link>
              <Link href={"#"}>Gatos adotados</Link>
              <Link href={"#"}>Parceiros</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <Link href={"#"}>FAQ</Link>
              <Link href={"#"}>Transparência</Link>
              <Link href={"#"}>Política de Privacidade</Link>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text
              display={{ md: "flex" }}
              alignItems={{ md: "center" }}
              gap={{ md: "1.5" }}
            >
              Criado com <FaHeart /> por
              <Link
                href={"https://github.com/leonardobumbeers"}
                isExternal
                _hover={{ color: "pink.500", textDecoration: "underline" }}
              >
                Leonardo Bumbeers
              </Link>
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
