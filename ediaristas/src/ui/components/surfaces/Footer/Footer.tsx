/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.styles";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterTitle>Quem somos</FooterTitle>
        <Typography>
          O e-diarista te ajuda a encontrar um profissional perfeito para
          realizar a limpeza da sua casa. Garantimos os melhores profissionais
          com total segurança e praticidade! São milhares de clientes
          satisfeitos por todo o pais.
        </Typography>
        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
        <AppList>
          <li>
            <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
              <img src="/img/logos/app-store.png" alt="App Store" />
            </a>
          </li>
          <li>
            <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
              <img src="/img/logos/google-play.png" alt="Google Play" />
            </a>
          </li>
        </AppList>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
