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
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className={styles.container}>
      <Heading>
        <title>AmorMiau</title>
        <NavBar />
      </Heading>

      <main>
        <Hero />
        {/* <p className={styles.description}>
          Amor Miau é uma ONG de adoção de gatos, que resgata, cuida e busca
          ajudar pessoas a encontrarem gatos que não possuem um lar.
        </p> */}
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
