import { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
  useToast,
  useBreakpointValue,
  Container,
  Flex,
  Box,
  Link,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const colspan = useBreakpointValue({ base: 2, md: 1 });

  const toastSuccess = () => {
    toast({
      title: "Cadastro realizado com sucesso!",
      position: "top",
      description: "Você será redirecionado para a página de login.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const toastError = () => {
    return toast({
      title: "Erro ao criar conta",
      position: "top",
      description: "Verifique os dados informados e tente novamente!",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (redirectToLogin) {
      setLoading(true);
      window.location.href = "/login";
    }
  }, [redirectToLogin]);

  // signup user
  const signupUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://amormiau-backend.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            cpf: event.target.cpf.value,
            rg: event.target.rg.value,
            birthDate: event.target.birthDate.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            city: event.target.city.value,
            state: event.target.state.value,
            // role: "basic",
          }),
        }
      );

      const data = await response.json();
      data.error ? toastError() : toastSuccess();
      data.message ? setRedirectToLogin(true) : setError(data.error);

      console.log(data);
    } catch (error) {
      setError(error);
      toastError();
      console.log(error);
    }
  };

  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <div>
      <NavBar />
      <Container w="100vw" maxW="container" maxH="100%" p={0}>
        <Flex
          // h={{ base: "auto", md: "100vh" }}
          h="100%"
          w={{ base: "auto", md: "100vw" }}
          py={[0, 10, 20]}
          direction={{ base: "column-reverse", md: "row" }}
          alignItems="center"
          bg="gray.100"
        >
          <VStack w="full" h="full" p={5} spacing={10}>
            <Box
              maxW="auto"
              maxH="auto"
              w={{ base: "auto", md: "2xl" }}
              p={10}
              borderWidth="1px"
              bg="white"
              boxShadow="lg"
              borderRadius="lg"
              borderColor="gray.200"
            >
              <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl">Cadastre-se</Heading>
                <Text>
                  Já possui conta?
                  <Link href="/login" color="#ff69b4" ml={1}>
                    Faça login
                  </Link>
                </Text>
              </VStack>
              <form onSubmit={signupUser}>
                <SimpleGrid
                  columns={2}
                  columnGap={3}
                  rowGap={6}
                  w="full"
                  mt={5}
                >
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel htmlFor="name">Nome Completo</FormLabel>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <FormControl>
                      <FormLabel htmlFor="cpf">CPF</FormLabel>
                      <Input
                        placeholder="000.000.000-00"
                        id="cpf"
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <FormControl>
                      <FormLabel htmlFor="rg">RG</FormLabel>
                      <Input
                        id="rg"
                        name="rg"
                        placeholder="12.345.678-9"
                        value={rg}
                        onChange={(event) => setRg(event.target.value)}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <FormControl>
                      <FormLabel htmlFor="birthDate">
                        Data de Nascimento
                      </FormLabel>
                      <Input
                        placeholder="00/00/0000"
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        value={birthDate}
                        onChange={(event) => setBirthDate(event.target.value)}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <FormControl>
                      <FormLabel htmlFor="phone">Telefone</FormLabel>
                      <Input
                        placeholder="(00) 00000-0000"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel htmlFor="address">Endereço Completo</FormLabel>
                      <Input
                        placeholder="Rua, nº"
                        id="address"
                        name="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <FormControl>
                      <FormLabel>Complemento</FormLabel>
                      <Input placeholder="apto, bloco, etc" />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <FormControl>
                      <FormLabel>Bairro</FormLabel>
                      <Input placeholder="Bairro" />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <FormControl>
                      <FormLabel htmlFor="city">Cidade</FormLabel>
                      <Input
                        placeholder="São Paulo"
                        id="city"
                        name="city"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <FormControl>
                      <FormLabel htmlFor="state">UF</FormLabel>
                      <Select
                        id="state"
                        name="state"
                        value={state}
                        onChange={(event) => setState(event.target.value)}
                      >
                        <option value="">Selecione</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        placeholder="email@example.com"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel htmlFor="password">Senha</FormLabel>
                      <InputGroup>
                        <Input
                          isInvalid={error}
                          isRequired={true}
                          id="password"
                          name="password"
                          type={show ? "text" : "password"}
                          placeholder="*********"
                          pr="6rem"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                        <InputRightElement
                          display="flex"
                          color="gray.500"
                          alignItems="center"
                          justifyContent="center"
                          onClick={() => setShow(!show)}
                        >
                          {show ? <ViewIcon /> : <ViewOffIcon />}
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Checkbox required>
                      <Link href="#" color="gray.500">
                        Aceito os Termos de Uso e Política de Privacidade.
                      </Link>
                    </Checkbox>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Button
                      type="submit"
                      size="md"
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
                      loadingText="Cadastrando..."
                    >
                      Cadastrar
                    </Button>
                  </GridItem>
                </SimpleGrid>
              </form>
            </Box>
          </VStack>
        </Flex>
      </Container>
      <Footer />
    </div>
  );
}
