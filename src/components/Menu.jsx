import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import styles from "../styles/Menu.module.css";

export default function menu() {
  const [logout, setLogout] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  if (logout) {
    localStorage.removeItem("accessToken");
    setLogout(false);
    setRedirectToLogin(true);
  }

  useEffect(() => {
    if (redirectToLogin) {
      window.location.href = "/login";
    }
  }, [redirectToLogin]);

  return (
    <div className={styles.container}>
      <Menu as="nav">
        <MenuButton as={Button} colorScheme="pink">
          Minha Conta
        </MenuButton>
        <MenuList>
          <MenuGroup>
            <MenuItem className={styles.menu}>Perfil</MenuItem>
            <MenuItem className={styles.menu}>Configurações</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem className={styles.menu}>Docs</MenuItem>
            <MenuItem className={styles.menu} onClick={() => setLogout(true)}>
              Sair
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
}
