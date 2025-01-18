<script setup>
import {
  EBody,
  EContainer,
  EHtml,
  EImg,
  EPreview,
  ESection,
  EText,
  EButton,
  EHr,
} from "vue-email";

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#000",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "15px 25px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
</script>

<template>
  <EHtml>
    <EHead />
    <EBody :style="main">
      <EContainer :style="container">
        <EImg
          src="https://res.cloudinary.com/augalo/image/upload/f_auto,q_auto,w_97,h_34/v1689702123/Aucode/logo_genenk.png"
          width="97"
          height="34"
          alt="Aucode"
          :style="logo"
        />
        <EText :style="paragraph"> Salut :) </EText>
        <EText :style="paragraph">
          Ravis de t'accueillir chez Aucode ! En tant que membre de notre
          communauté, tu auras accès à une multitude de ressources et
          d'opportunités pour trouver ton job idéal. Prépare-toi à explorer, te
          tester et grandir avec nous !
        </EText>
        <ESection :style="btnContainer">
          <EButton href="https://aucode.tech" :style="button">
            C'est parti !
          </EButton>
        </ESection>
        <EText :style="paragraph">
          A très vite,
          <br />
          La Aucode Team
        </EText>
        <EHr :style="hr" />
        <EText :style="footer"> Aucode </EText>
      </EContainer>
    </EBody>
  </EHtml>
</template>
