<template>
  <div id="content" :style="contentStyle">
    <Loading v-if="isLoading" />
    <Header />
    <Home />
    <About />
    <Project />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Home from "@/views/Home.vue";
import About from "@/components/About/About.vue";
import Project from "@/components/Project/Project.vue";
import Contact from "@/components/Contact/Contact.vue";
import Header from "@/components/Header/Header.vue";
import Loading from "@/components/Shared/Loading.vue";
import Footer from "@/components/Footer/Footer.vue";
import { provide, ref, computed, onMounted } from "vue";
import { CustomScreen, getScreen } from "@/components/Shared/screen";

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2750);
});

const screen: CustomScreen = getScreen();

// set default dark to device theme
const isDark = ref(window.matchMedia("(prefers-color-scheme: dark)").matches);
// detect user-theme and set to isDark
const userTheme = localStorage.getItem("user-theme");
if (userTheme) {
  userTheme === "dark" ? (isDark.value = true) : (isDark.value = false);
}

const contentStyle = computed(() => {
  return {
    "--layoutWidth": "1264px",
    "--secondLayoutWidth": "960px",
    "--layoutPadding": screen.width.value > 960 ? "32px" : "16px",
    "--sectionSpace": screen.width.value > 960 ? "8rem" : "5rem",
    "--subsectionSpace": screen.width.value > 960 ? "3.33rem" : "2.22rem",
    "--componentSpace": screen.width.value > 960 ? "1.23rem" : "1.088rem",
    "--lightestPurple": "#ece4ff",
    "--lighterPurple": "#D5C6FF",
    "--lightPurple": "#8E6FE2",
    "--purple": "#7253C6",
    "--darkPurple": "#24285B",
    "--redError": isDark.value ? "#ff5e74" : "#d84458",
    "--greyPurple": "#E6E2EE",
    "--textColorLight": "#fdfdff",
    "--textColorDark": "#0A2540",
    "--textColor": isDark.value ? "#fdfdff" : "#0A2540",
    "--bodyTextColor": isDark.value ? "#c9c9d1" : "#394a59",
    "--fadeColor": isDark.value ? "#ece4ff10" : "#ece4ff",
    "--activeTextColor": isDark.value ? "#D5C6FF" : "#8E6FE2",
    "--shadowColor": isDark.value ? "#644ca6" : "#D5C6FF",
    "--bgColor": isDark.value ? "#2d2d2e" : "#fafaff",
    "--secondBgColor": isDark.value ? "#272729" : "#f6f5ff",
    "--thirdBgColor": isDark.value ? "#363638" : "#f7f5ff",
    "--fontL": screen.type.value != "xs" ? "36px" : "28px",
    "--fontM": screen.type.value != "xs" ? "22px" : "20px",
    "--fontS": screen.type.value != "xs" ? "18px" : "16px",
    "--fontXS": screen.type.value != "xs" ? "16px" : "15px",
    "--fontXXS": screen.type.value != "xs" ? "15px" : "14px",
    "--fontXXXS": screen.type.value != "xs" ? "14px" : "13px",
    "--pillPaddingL": "16px 40px",
    "--pillPaddingM": "10px 24px",
    "--pillPaddingS": "8px 16px",
    "--bgTransition": " background-color 0.3s ease-in-out",
    "--vh": window.innerHeight * 0.01 + "px",
  };
});

document
  .querySelector("body")
  ?.setAttribute("style", "background:" + contentStyle.value["--bgColor"]);

provide("screen", screen);
provide("isDark", isDark);
</script>

<style lang="scss">
@import "./components/Shared/fonts.scss";
* {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
}
html {
  scroll-behavior: smooth;
  background-color: transparent;
}
a {
  text-decoration: none;
}
#app {
  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  text-align: left;
  letter-spacing: 0.1px;
}
#content {
  background-color: var(--bgColor);
  transition: var(--bgTransition);
  color: var(--textColor);
  .SectionContainer {
    margin: 0 auto;
    padding: var(--sectionSpace) 0;
    min-width: 300px;
    max-width: var(--secondLayoutWidth);
  }
  .SectionSubtitle {
    font-size: var(--fontS);
    font-weight: 600;
    color: var(--lightPurple);
    margin-bottom: 20px;
    opacity: 0;
  }
  .SectionTitle {
    font-family: "Lexend Deca";
    font-weight: 500;
    font-size: var(--fontL);
    opacity: 0;
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 2rem, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
