<template>
  <section id="home">
    <div class="Home__bg"></div>
    <div class="HomeContainer">
      <HomeHero />
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeHero from "@/components/Home/HomeHero.vue";
</script>

<style lang="scss" scoped>
#home {
  min-width: 314px;
  min-height: 600px;
  position: relative;
  .Home__bg {
    position: absolute;
    left: 0%;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/home_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    opacity: 0;
    animation: fadeIn 1.5s ease-in-out 2.45s forwards;
  }
  .HomeContainer {
    height: calc(var(--vh) * 100);
    max-width: var(--layoutWidth);
    margin: auto;
    padding: 0 var(--layoutPadding);
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.069;
  }
}
</style>
