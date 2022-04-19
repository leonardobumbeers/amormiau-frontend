import {
  Image,
  Text,
  Heading,
  Center,
  Button,
  Link,
  Flex,
  Box,
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
// import component FooterHome
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Heading>
        <title>AmorMiau</title>
        <Image
          src="https://img.icons8.com/external-justicon-flat-justicon/200/external-cat-dog-and-cat-justicon-flat-justicon-4.png"
          alt="logo"
          h="auto"
          w="auto"
          m="auto"
          // center image
        />
        <Text
          fontSize="7xl"
          fontWeight="bold"
          textAlign="center"
          // mb="px"
          fontFamily="monaco"
          bgGradient="linear-gradient(to right, #ffb6c1, #ff69b4)"
          bgClip="text"
        >
          Amor Miau
        </Text>
        <Menu />
      </Heading>

      <main className={styles.main}>
        <p className={styles.description}>
          Amor Miau é uma ONG de adoção de gatos, que resgata, cuida e busca
          ajudar pessoas a encontrarem gatos que não possuem um lar.
        </p>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://github.com/leonardobumbeers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Criado por Leonardo Bumbeers
        </a>
      </footer> */}
      <Footer />
    </div>
  );
}
