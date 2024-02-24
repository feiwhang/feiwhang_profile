<template>
  <div class="HomeHero" :class="'HomeHero--' + screen.type.value">
    <HeroImg />
    <h1
      class="HomeHero__title"
      :class="'HomeHero__title--' + screen.type.value"
    >
      Design, Develop &
      <br v-if="['xs', 'sm', 'md'].includes(screen.type.value)" />Deliver great
      experience
    </h1>
    <p
      class="HomeHero__subtitle"
      :class="'HomeHero__subtitle--' + screen.type.value"
    >
      {{ "Associate Software engineer at " }}
      <a
        href="https://careersatagoda.com/life-at-agoda/"
        rel="noopener"
        target="_blank"
        title="External link to Agoda website"
        >Agoda</a
      >
      |
      {{ "Ex - Computer Science student at " }}
      <a
        href="https://muic.mahidol.ac.th/"
        rel="noopener"
        target="_blank"
        title="External link to MUIC website"
        >MUIC</a
      >
    </p>
    <div class="HomeHero__ctaContainer">
      <LinkGo
        to="#project"
        title="My project"
        bgColor="var(--purple)"
        hoverColor="var(--lightPurple)"
        padding="var(--pillPaddingS)"
        elemColor="var(--textColorLight)"
        fontSize="var(--fontXS)"
        class="HomeHero__cta"
      />
      <LinkGo
        to="#contact"
        title="Contact me"
        bgColor="transparent"
        hoverColor="transparent"
        padding="var(--pillPaddingS)"
        elemColor="var(--textColor)"
        fontSize="var(--fontXS)"
        class="HomeHero__cta"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import LinkGo from "@/components/Shared/LinkGo.vue";
import HeroImg from "@/components/Home/HeroImg.vue";
import { CustomScreen } from "@/components/Shared/screen";

const screen = inject("screen") as CustomScreen;
</script>

<style lang="scss" scoped>
.HomeHero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
  color: var(--textColor);
  &__title {
    animation: fadeUp 0.55s ease-in-out 2.45s forwards;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    opacity: 0;
    font-family: "Lexend Deca";
    font-size: clamp(1.5rem, 6.9vw, 3.5rem);
    font-weight: 500;
    text-align: center;
    margin-bottom: 8px;
    margin-top: 16px;
    color: var(--activeTextColor);
  }
  &__subtitle {
    animation: fadeUp 0.55s ease-in-out 2.573s forwards;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    opacity: 0;
    font-size: var(--fontS);
    margin-bottom: 24px;
    text-align: center;
    &--xs {
      font-size: 16px;
    }
    a {
      text-decoration: none;
      font-size: var(--fontS);
      color: var(--textColor);
      font-weight: 600;
      letter-spacing: 0.88px;
    }
  }
  &__ctaContainer {
    display: flex;
    column-gap: 8px;
  }
  &__cta {
    animation: fadeUp 0.55s ease-in-out 2.684s forwards;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    opacity: 0;
  }
}
</style>
