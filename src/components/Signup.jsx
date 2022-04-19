import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Fragment,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function signup() {
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

  // signup user
  const signupUser = async (event) => {
    event.preventDefault();

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

    console.log(data);
  };

  // create signup form with signupUser function
  return (
    <Fragment>
      <Flex justifyContent="center" alignItems="center" h="100vh">
        <Box
          maxW="auto"
          maxH="auto"
          p={10}
          w="40%"
          borderWidth="1px"
          bg="white"
          boxShadow="lg"
          borderRadius="lg"
          borderColor="gray.200"
        >
          <form onSubmit={signupUser}>
            <FormLabel htmlFor="name">Nome Completo</FormLabel>
            <Input
              id="name"
              name="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              mb={5}
            />
            <InputGroup
              flexDirection="space-between"
              justifyContent="center"
              alignItems="baseline"
            >
              <FormLabel htmlFor="cpf">CPF</FormLabel>
              <Input
                id="cpf"
                name="cpf"
                placeholder="123.456.789-00"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
              />
              <FormLabel htmlFor="rg" ml={2}>
                RG
              </FormLabel>
              <Input
                id="rg"
                name="rg"
                placeholder="12.345.678-9"
                value={rg}
                onChange={(event) => setRg(event.target.value)}
              />
            </InputGroup>
            <InputGroup
              mt={5}
              flexDirection="space-between"
              justifyContent="center"
              alignItems="center"
            >
              <FormLabel htmlFor="birthDate">Data de Nascimento</FormLabel>
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                value={birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
              />
              <FormLabel htmlFor="phone" ml={2}>
                Telefone
              </FormLabel>
              <Input
                id="phone"
                name="phone"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </InputGroup>
            <FormLabel htmlFor="address" mt={5}>
              Endereço completo
            </FormLabel>
            <Input
              id="address"
              name="address"
              placeholder="Rua, número"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            <InputGroup
              mt={5}
              flexDirection="space-between"
              justifyContent="center"
              alignItems="baseline"
            >
              <FormLabel htmlFor="address" mt={5}>
                Complemento
              </FormLabel>
              <Input
                id="complement"
                name="complement"
                placeholder="apto 33"
                value={complement}
                onChange={(event) => setComplement(event.target.value)}
              />
              <FormLabel htmlFor="neighborhood" ml={2}>
                Bairro
              </FormLabel>
              <Input
                id="neighborhood"
                name="neighborhood"
                placeholder="Digite seu bairro"
                value={neighborhood}
                onChange={(event) => setNeighborhood(event.target.value)}
              />
            </InputGroup>
            <InputGroup
              mt={5}
              flexDirection="space-between"
              justifyContent="left"
              alignItems="baseline"
            >
              <FormLabel htmlFor="city">Cidade</FormLabel>
              <Input
                id="city"
                name="city"
                placeholder="Digite sua cidade"
                value={city}
                w="400px"
                onChange={(event) => setCity(event.target.value)}
              />
              <FormLabel htmlFor="state" ml={2}>
                Estado
              </FormLabel>
              <Input
                id="state"
                name="state"
                w="80px"
                placeholder="UF"
                value={state}
                onChange={(event) => setState(event.target.value)}
              />
            </InputGroup>
            <InputGroup
              mt={5}
              flexDirection="space-between"
              justifyContent="center"
              alignItems="center"
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </InputGroup>
            <InputGroup
              mt={5}
              flexDirection="space-between"
              justifyContent="center"
              alignItems="center"
            >
              <FormLabel htmlFor="password">Senha</FormLabel>
              <Input
                id="password"
                name="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </InputGroup>
            <Box display="flex">
              <Checkbox>
                <Text
                  fontWeight="semibold"
                  marginTop="2rem"
                  marginBottom="10px"
                  fontSize="md"
                  color="gray.500"
                >
                  Aceito os Termos de Uso event Política de Privacidade
                </Text>
              </Checkbox>
              <Text
                fontWeight="semibold"
                fontSize="md"
                color="gray.500"
                marginTop="2rem"
                marginBottom="10px"
                ml={10}
              >
                Já possui uma conta?
              </Text>
              <Link href="/login">
                <Text
                  ml={-2}
                  marginTop="2rem"
                  marginBottom="10px"
                  fontWeight="semibold"
                  fontSize="md"
                  color="#ffb6c1"
                  cursor="pointer"
                  mr={2}
                  _hover={{ color: "#ff69b4" }}
                >
                  Entrar
                </Text>
              </Link>
              <Button
                type="submit"
                size="md"
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
              >
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </Fragment>
  );
}
