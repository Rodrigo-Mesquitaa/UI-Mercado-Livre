import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import SallerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SallerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="Title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>

      <span>
        <p className="Title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Camiseta tematica tema os vingadores Dr.Strange. 100% algodão com estampa.
      Temos disponiveis todos os modelo dos vingadores, 12 cores a sua escolha,
      Você pode selecionar e a cor da camiseta. Temos de todos os tamanho desde o
      P até GG.    
      
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Distribuidor especializado em camisetas e acessorios tematicos, super heroi, desenhos
      filmes, series, e muito diversos. Moda feminina e masculina, infantil e adulta. 
      Produto 100 % algodão e com tecnologia anti alergica.
    </p>
  </Description>
);

export default Product;
