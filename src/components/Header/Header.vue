<template>
  <header class="Header" :style="headerStyle">
    <div class="Header__container">
      <a
        class="Header__logo"
        :class="'Header__logo--' + screen.type.value"
        @click="onLogoClicked('home')"
      >
        <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Logo">
            <g id="F">
              <path
                id="F1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31 5C37.6274 5 43 10.3726 43 17L43 79C43 85.6274 37.6274 91 31 91C24.3726 91 19 85.6274 19 79L19 17C19 10.3726 24.3726 5 31 5ZM41 17C41 22.5228 36.5228 27 31 27C25.4772 27 21 22.5228 21 17C21 11.4772 25.4772 7 31 7C36.5228 7 41 11.4772 41 17ZM31 59C35.9706 59 40 54.9706 40 50C40 45.0294 35.9706 41 31 41C26.0294 41 22 45.0294 22 50C22 54.9706 26.0294 59 31 59Z"
                fill="#7253C6"
              />
              <path
                id="F3"
                d="M60 50H36"
                stroke="#8E6FE2"
                stroke-width="18"
                stroke-linecap="round"
              />
              <path
                id="F2"
                d="M77 17L41 17"
                stroke="#8E6FE2"
                stroke-width="20"
                stroke-linecap="round"
              />
            </g>
          </g>
        </svg>
      </a>
      <div
        class="Header__action"
        :class="'Header__action--' + screen.type.value"
      >
        <nav
          class="Header__nav"
          v-if="!['sm', 'xs'].includes(screen.type.value)"
        >
          <HeaderNav />
        </nav>
        <div
          class="Header__userTheme"
          :class="isDark ? 'Header__userTheme--dark' : ''"
          @click="setTheme()"
          title="Toggle dark mode"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="!isDark"
          >
            <path
              opacity="0.15"
              d="M11.8896 23.7791C18.456 23.7791 23.7791 18.456 23.7791 11.8896C23.7791 5.32314 18.456 0 11.8896 0C5.32314 0 0 5.32314 0 11.8896C0 18.456 5.32314 23.7791 11.8896 23.7791Z"
              fill="#FFD200"
            />
            <path
              d="M8.40625 20.656L10.5938 18.406C9.8125 18.2498 9.09375 17.9373 8.4375 17.4998L8.40625 20.656Z"
              fill="#FFE62E"
            />
            <path
              d="M15.5938 3.34363L13.4062 5.59363C14.1875 5.74988 14.9063 6.06238 15.5625 6.49988L15.5938 3.34363"
              fill="#FFE62E"
            />
            <path
              d="M3.34378 15.5938L6.50003 15.5625C6.06253 14.9063 5.75003 14.1875 5.59378 13.4062L3.34378 15.5938Z"
              fill="#FFE62E"
            />
            <path
              d="M20.6563 8.40625L17.5001 8.4375C17.9063 9.09375 18.2188 9.8125 18.4063 10.5938L20.6563 8.40625Z"
              fill="#FFE62E"
            />
            <path
              d="M3.34378 8.40625L5.59378 10.5938C5.75003 9.8125 6.06253 9.09375 6.50003 8.4375L3.34378 8.40625"
              fill="#FFE62E"
            />
            <path
              d="M20.6563 15.5938L18.4063 13.4062C18.2501 14.1875 17.9376 14.9063 17.5001 15.5625L20.6563 15.5938Z"
              fill="#FFE62E"
            />
            <path
              d="M8.40625 3.34363L8.4375 6.49988C9.09375 6.09363 9.8125 5.78113 10.5938 5.59363L8.40625 3.34363"
              fill="#FFE62E"
            />
            <path
              d="M15.5938 20.656L15.5625 17.4998C14.9063 17.9373 14.1875 18.2498 13.4062 18.406L15.5938 20.656Z"
              fill="#FFE62E"
            />
            <path
              d="M6.62503 15.75L5.37503 18.6563L8.28128 17.4062C7.62503 16.9375 7.06253 16.375 6.62503 15.75Z"
              fill="#FFCE31"
            />
            <path
              d="M17.375 8.25012L18.625 5.34387L15.75 6.59387C16.375 7.06262 16.9375 7.62512 17.375 8.25012Z"
              fill="#FFCE31"
            />
            <path
              d="M5.5625 10.8436L2.625 11.9999L5.5625 13.1561C5.46875 12.7811 5.4375 12.4061 5.4375 11.9999C5.4375 11.5936 5.46875 11.2186 5.5625 10.8436Z"
              fill="#FFCE31"
            />
            <path
              d="M18.4375 13.1561L21.375 11.9999L18.4375 10.8436C18.5 11.2186 18.5625 11.6249 18.5625 11.9999C18.5625 12.4061 18.5312 12.7811 18.4375 13.1561Z"
              fill="#FFCE31"
            />
            <path
              d="M8.24997 6.62488L5.34372 5.37488L6.59372 8.28113C7.06247 7.62488 7.62497 7.06238 8.24997 6.62488Z"
              fill="#FFCE31"
            />
            <path
              d="M15.75 17.375L18.6563 18.625L17.4062 15.7188C16.9375 16.375 16.375 16.9375 15.75 17.375Z"
              fill="#FFCE31"
            />
            <path
              d="M13.1563 5.5625L12 2.625L10.8438 5.5625C11.2188 5.5 11.625 5.4375 12 5.4375C12.375 5.4375 12.7813 5.46875 13.1563 5.5625Z"
              fill="#FFCE31"
            />
            <path
              d="M10.8438 18.4375L12 21.375L13.1563 18.4375C12.7813 18.5312 12.4063 18.5625 12 18.5625C11.5938 18.5625 11.2188 18.5312 10.8438 18.4375Z"
              fill="#FFCE31"
            />
            <path
              d="M12 17.9375C15.2792 17.9375 17.9375 15.2792 17.9375 12C17.9375 8.72081 15.2792 6.0625 12 6.0625C8.72081 6.0625 6.0625 8.72081 6.0625 12C6.0625 15.2792 8.72081 17.9375 12 17.9375Z"
              fill="#FFCE31"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="isDark"
          >
            <path
              d="M17.9151 17.2054C18.3698 17.0836 18.8093 16.9107 19.2252 16.6899C18.3521 17.9228 17.1476 18.8794 15.7522 19.4481C14.3569 20.0168 12.8282 20.1742 11.3445 19.9019C9.86074 19.6296 8.48311 18.9388 7.37227 17.9101C6.26143 16.8814 5.46316 15.5573 5.07055 14.092C4.67794 12.6268 4.70717 11.0809 5.15485 9.63461C5.60253 8.18833 6.45021 6.90129 7.59899 5.9236C8.74778 4.94591 10.1503 4.31786 11.6431 4.1127C13.1359 3.90754 14.6573 4.13372 16.0299 4.76488C15.1429 4.79402 14.2727 5.01159 13.4764 5.4033C12.6801 5.79501 11.9757 6.352 11.4095 7.0377C10.8434 7.7234 10.4282 8.52231 10.1913 9.38197C9.95439 10.2416 9.90109 11.1426 10.0349 12.0257C10.1687 12.9088 10.4866 13.7541 10.9678 14.506C11.4489 15.258 12.0823 15.8996 12.8265 16.3888C13.5707 16.878 14.4088 17.2036 15.2858 17.3444C16.1628 17.4851 17.0588 17.4378 17.9151 17.2054V17.2054Z"
              fill="#AA94E7"
            />
            <path
              opacity="0.15"
              d="M11.8896 23.7791C18.456 23.7791 23.7791 18.456 23.7791 11.8896C23.7791 5.32314 18.456 0 11.8896 0C5.32314 0 0 5.32314 0 11.8896C0 18.456 5.32314 23.7791 11.8896 23.7791Z"
              fill="#AA94E7"
            />
          </svg>
          <p>{{ isDark ? "Dark" : "Light" }}</p>
        </div>
        <a
          href="./resume.pdf"
          target="_blank"
          class="Header__cta"
          :class="'Header__cta--' + screen.type.value"
          title="Download resume pdf file"
          v-if="!['sm', 'xs'].includes(screen.type.value)"
        >
          Resume
        </a>
        <a
          class="Header__navButton"
          v-if="['sm', 'xs'].includes(screen.type.value)"
          @click="isMobileNavOpened = !isMobileNavOpened"
        >
          <svg viewBox="0 0 16 10">
            <title>Open mobile navigation</title>
            <g fill="var(--textColor)" fill-rule="evenodd">
              <rect y="8" width="16" height="2" rx="1"></rect>
              <rect y="4" width="16" height="2" rx="1"></rect>
              <rect width="16" height="2" rx="1"></rect>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <transition name="moveInOut">
      <nav
        class="Header__mobileNav"
        v-if="isMobileNavOpened"
        :class="'opened' ? isMobileNavOpened : ''"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      >
        <div class="Header__mobileCard">
          <a
            class="Header__mobileClose"
            @click="isMobileNavOpened = !isMobileNavOpened"
          >
            <svg viewBox="0 0 16 10">
              <title>Close mobile navigation</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4283 0.248461C12.5772 0.400341 12.6606 0.604537 12.6606 0.817211C12.6606 1.02989 12.5772 1.23408 12.4283 1.38596L8.98332 4.83909L12.4364 8.28409C12.5894 8.43708 12.6754 8.64459 12.6754 8.86096C12.6754 9.07733 12.5894 9.28484 12.4364 9.43784C12.2835 9.59083 12.0759 9.67678 11.8596 9.67678C11.6432 9.67678 11.4357 9.59083 11.2827 9.43784L7.8377 5.98471L4.3927 9.43784C4.2397 9.59083 4.03219 9.67678 3.81582 9.67678C3.59945 9.67678 3.39195 9.59083 3.23895 9.43784C3.08595 9.28484 3 9.07733 3 8.86096C3 8.64459 3.08595 8.43708 3.23895 8.28409L6.69207 4.83909L3.23895 1.39409C3.08595 1.24109 3 1.03358 3 0.817211C3 0.600841 3.08595 0.393333 3.23895 0.240336C3.39195 0.0873394 3.59945 0.001387 3.81582 0.001387C4.03219 0.001387 4.2397 0.0873394 4.3927 0.240336L7.8377 3.69346L11.2827 0.240336C11.3582 0.164182 11.4481 0.103737 11.5471 0.0624871C11.6461 0.0212375 11.7523 0 11.8596 0C11.9668 0 12.073 0.0212375 12.172 0.0624871C12.2711 0.103737 12.3609 0.164182 12.4364 0.240336L12.4283 0.248461Z"
                fill="var(--textColor)"
              />
            </svg>
          </a>
          <nav class="Header__mobileLink">
            <HeaderNav />
            <br />
            <a
              href="./resume.pdf"
              target="_blank"
              class="Header__cta"
              :class="'Header__cta--' + screen.type.value"
              title="Download resume pdf file"
            >
              Resume
            </a>
          </nav>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { inject, ref, provide, computed, Ref } from "vue";
import HeaderNav from "./HeaderNav.vue";
import { CustomScreen } from "@/components/Shared/screen";

const screen = inject("screen") as CustomScreen;
const hash = ref("");
const isMobileNavOpened = ref(false);

const isDark = inject("isDark") as Ref<boolean>;
function setTheme() {
  // save user-theme to storage, get after next reload
  localStorage.setItem("user-theme", isDark.value ? "light" : "dark");
  isDark.value = !isDark.value;
  // const bgColor = isDark.value ? "#2d2d2e" : "#f6f2ff";
}
const headerStyle = computed(() => {
  return {
    "--headerBgColor":
      screen.scroll.value > window.innerHeight * 0.1
        ? isDark.value
          ? "#272729F5"
          : "#f6f5ffF3"
        : "transparent",
  };
});

function onLogoClicked(id: string) {
  hash.value = "#" + id;

  const navEl = document.getElementById(id);
  navEl?.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

provide("hash", hash);
provide("isMobileNavOpened", isMobileNavOpened);
</script>

<style lang="scss">
.Header {
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 12px 0;
  transform: translate3d(0, 0, 0);
  background: var(--headerBgColor);
  transition: var(--bgTransition);
  backdrop-filter: blur(4px);
  opacity: 0;
  animation: moveDown 0.88s ease-in-out 2.45s forwards;
  &__container {
    min-width: 314px;
    max-width: var(--layoutWidth);
    padding: 0 var(--layoutPadding);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    cursor: pointer;
    font-size: 0;
    svg {
      display: block;
      margin: auto;
      width: 42px;
    }
    &--sm {
      svg {
        width: 38px;
      }
    }
    &--xs {
      svg {
        width: 36px;
      }
    }
  }
  &__nav {
    display: flex;
    justify-content: space-between;
  }
  &__action {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 16px;
    &--xs,
    &--sm {
      column-gap: 0;
    }
  }
  &__userTheme {
    display: flex;
    align-items: center;
    column-gap: 4px;
    margin-right: 16px;
    padding: 3px 8px;
    border-radius: 16px;
    background-color: rgba($color: #534c67, $alpha: 0.0345);
    p {
      font-size: var(--fontXXXS);
      color: var(--textColor);
    }
    &--dark {
      background-color: rgba($color: #000, $alpha: 0.123);
    }
  }
  &__cta {
    cursor: pointer;
    border: none;
    background-color: var(--purple);
    color: var(--textColorLight);
    font-size: var(--fontXS);
    font-weight: 600;
    padding: var(--pillPaddingM);
    border-radius: 32px;
    transition: var(--bgTransition);
    letter-spacing: 0.2px;
    font-family: Nunito;
    &:hover {
      background-color: var(--lightPurple);
    }
  }
  &__navButton {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
    svg {
      width: 24px;
    }
  }
  &__mobileNav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
  }
  &__mobileCard {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--secondBgColor);
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3);
    padding: 16px;
    padding-bottom: 36px;
  }
  &__mobileClose {
    cursor: pointer;
    position: fixed;
    top: 24px;
    right: 20px;
    padding: 4px;
    svg {
      width: 24px;
    }
  }
  &__mobileLink {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 12px;
    height: 100%;
    a {
      font-size: var(--fontM);
    }
  }
}
// animation
.moveInOut-enter-active {
  animation: moveIn 0.25s ease-in-out;
  backface-visibility: hidden;
}
.moveInOut-leave-active {
  animation: moveOut 0.25s ease-in-out;
  backface-visibility: hidden;
}
@keyframes moveDown {
  0% {
    opacity: 0;
    transform: translate3d(0, calc(var(--vh) * (-8)), 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes moveIn {
  0% {
    transform: translate3d(-100vw, 0, 0);
    transform-origin: right;
  }
  100% {
    transform: translate3d(0, 0, 0);
    transform-origin: right;
  }
}
@keyframes moveOut {
  0% {
    transform: translate3d(0, 0, 0);
    transform-origin: right;
  }
  100% {
    transform: translate3d(-100vw, 0, 0);
    transform-origin: right;
  }
}
</style>
