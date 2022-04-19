import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

export default function LoginError() {
  return (
    <Alert
      status="error"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="2px"
      //   marginBlock="
      maxW="sm"
      maxH="sm"
    >
      <AlertIcon />
      <AlertTitle>Email ou senha incorretos</AlertTitle>
    </Alert>
  );
}
