import { useNavigate } from "react-router-dom";

import bannerImage from "../../assets/Foto Home.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header/header";

import {
  Banner,
  Container,
  TextContent,
  Title,
  TitleHighlight,
} from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/cadastro");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Bem-vindo ao super Mercado SuperSelect
              <br />
            </TitleHighlight>
            "Transformando a gestão de produtos em uma experiência simples e
            ágil."
          </Title>
          <TextContent>
            Bem-vindo ao nosso supermercado digital! Aqui, oferecemos uma
            experiência de compras moderna e eficiente, com tecnologia de ponta
            para facilitar o controle e o gerenciamento dos seus produtos.
            Através de nosso sistema intuitivo e dinâmico, você terá acesso
            rápido a informações detalhadas sobre cada item, garantindo uma
            experiência de compra prática e organizada.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <Banner src={bannerImage} alt="Imagem principal" />
      </Container>
    </>
  );
};

export { Home };
