<template>
  <a
    class="NavLink"
    :class="hash == '' || hash == '#home' ? 'NavLink--active' : ''"
    @click="onNavClicked('home')"
  >
    Home</a
  >
  <a
    class="NavLink"
    :class="hash == '#about' ? 'NavLink--active' : ''"
    @click="onNavClicked('about')"
  >
    About</a
  >
  <a
    class="NavLink"
    :class="hash == '#project' ? 'NavLink--active' : ''"
    @click="onNavClicked('project')"
  >
    Project</a
  >
  <a
    class="NavLink"
    :class="hash == '#contact' ? 'NavLink--active' : ''"
    @click="onNavClicked('contact')"
  >
    Contact
  </a>
</template>

<script setup lang="ts">
import { Ref, inject } from "vue";

const hash = inject("hash") as Ref<string>;
const isMobileNavOpened = inject("isMobileNavOpened") as Ref<boolean>;

function onNavClicked(id: string) {
  hash.value = "#" + id;
  isMobileNavOpened.value = false;

  const navEl = document.getElementById(id);
  navEl?.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
</script>

<style lang="scss" scoped>
.NavLink {
  cursor: pointer;
  text-align: center;
  font-weight: 500;
  color: var(--textColor);
  text-decoration: none;
  width: 6.9rem;
  padding: 8px 0;
  border-radius: 32px;
  &--active {
    color: var(--activeTextColor);
  }
}
</style>
