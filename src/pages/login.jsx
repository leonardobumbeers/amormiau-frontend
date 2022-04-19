import { useEffect, useState, Fragment } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import LoginError from "../components/LoginError";
import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Text,
  Box,
  Image,
  Flex,
  Link,
  Checkbox,
  Section,
  useToast,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [remember, setRemember] = useState(false);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://amormiau-backend.herokuapp.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: event.target.email.value,
            password: event.target.password.value,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      //set local storage access token to cookies

      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        setRedirectToHome(true);
        setRemember(true);
      }
      setError(data.error);
      data.error ? toastError() : toastSuccess();
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    if (redirectToHome) {
      setLoading(true);
      window.location.href = "/";
    }
  }, [redirectToHome]);

  const toastSuccess = () => {
    toast({
      title: "Login realizado com sucesso!",
      position: "top",
      description: "Você será redirecionado para a página inicial.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const toastError = () => {
    return toast({
      title: "Erro ao realizar login!",
      position: "bottom-right",
      description: "Email ou senha incorretos.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Fragment>
      <Flex justify="center" align="center" bg="gray.100" w="100vw" h="85vh">
        <Box
          maxW="xl"
          borderWidth="1px"
          borderRadius="xl"
          bg="white"
          h="500px"
          boxShadow="lg"
          borderColor="gray.200"
          borderStyle="solid"
          p="10px"
        >
          <Image
            src="https://img.icons8.com/external-justicon-flat-justicon/200/external-cat-dog-and-cat-justicon-flat-justicon-4.png"
            alt="logo"
            flex="1"
            h="90px"
            w="auto"
            m="auto"
            // center imageimport FooterHome from "../components/FooterHome";
          />
          <Text
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
            // mb="px"
            fontFamily="monaco"
            bgGradient="linear-gradient(to right, #ffb6c1, #ff69b4)"
            bgClip="text"
          >
            Amor Miau
          </Text>
          {/* {error ? <LoginError /> : null} */}
          <form onSubmit={handleSubmit}>
            <FormControl
              marginBlock="1rem"
              marginTop="sticky"
              position="linear"
              marginBottom="10px"
              padding="10px"
              width="100%"
              height="100%"
            >
              <FormLabel
                htmlFor="email"
                fontSize="md"
                fontWeight="bold"
                color="gray.500"
              >
                Email
              </FormLabel>
              <Input
                isInvalid={error}
                isRequired={true}
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                pr="auto"
                onChange={(event) => setEmail(event.target.value)}
              />
              <FormLabel
                htmlFor="password"
                fontSize="md"
                fontWeight="bold"
                marginTop="5"
                color="gray.500"
              >
                Senha
              </FormLabel>
              <InputGroup>
                <Input
                  isInvalid={error}
                  isRequired={true}
                  id="password"
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="Digite sua senha"
                  pr="6rem"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <InputRightElement
                  width="4.5rem"
                  display="flex"
                  color="gray.500"
                  alignItems="center"
                  justifyContent="center"
                  onClick={() => setShow(!show)}
                >
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </InputRightElement>
              </InputGroup>
              <InputGroup
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginTop="15px"
              >
                <Checkbox
                  id="remember"
                  name="remember"
                  color="gray.500"
                  fontSize="sm"
                  fontWeight="medium"
                  onClick={() => setRemember(true)}
                >
                  Lembrar-me
                </Checkbox>
                <Link href="#" color="gray.500" fontSize="sm">
                  Esqueci minha senha
                </Link>
              </InputGroup>
              <InputGroup
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                // marginTop="10px"
              >
                <Button
                  type="submit"
                  size="md"
                  width="100%"
                  marginTop="1.5rem"
                  marginBottom="10px"
                  bgGradient="linear(to-r, #ffb6c1, #ff69b4)"
                  color="gray.100"
                  borderRadius="xl"
                  borderWidth="2px solid"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "lg",
                  }}
                  isLoading={loading}
                  loadingText="Entrando"
                >
                  Entrar
                </Button>
              </InputGroup>
              <Box
                mt="10px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  textAlign="center"
                  fontFamily="monaco"
                  color="gray.500"
                >
                  Ainda não tem conta?
                </Text>
                <Link
                  href="/signup"
                  fontSize="sm"
                  textAlign="center"
                  fontFamily="monaco"
                  color="pink.200"
                  fontWeight="extrabold"
                  mr={5}
                >
                  Cadastre-se
                </Link>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Flex>
      <Footer />
    </Fragment>
  );
}
