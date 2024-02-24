<template>
  <section id="project" class="Project">
    <div class="SectionContainer">
      <header class="Project__header">
        <h2 class="SectionSubtitle" id="ProjectSubtitle">Project</h2>
        <h1 class="SectionTitle" id="ProjectTitle">Things I've built</h1>
      </header>
      <div class="Project__body">
        <div
          class="ProjectItem"
          v-for="(project, index) in projects"
          :key="index"
          :style="{
            padding: ['xs'].includes(screen.type.value) ? '16px' : 'none',
            'box-shadow': ['xs'].includes(screen.type.value)
              ? '-2px 4px 6px var(--secondBgColor)'
              : 'none',
          }"
        >
          <img
            :src="project.imgSrc"
            alt=""
            class="ProjectItem__mobileImage"
            v-if="['xs'].includes(screen.type.value)"
            :key="index"
            :style="{
              opacity: isDark ? '0.069' : '0.055',
            }"
          />
          <img
            :src="project.imgSrc"
            alt=""
            class="ProjectItem__image"
            v-if="index % 2 != 0 && !['xs'].includes(screen.type.value)"
          />
          <div
            class="ProjectItem__content"
            :style="{
              'margin-right':
                index % 2 == 0 && !['xs'].includes(screen.type.value)
                  ? '-128px'
                  : '0px',
              'margin-left':
                index % 2 != 0 && !['xs'].includes(screen.type.value)
                  ? '-128px'
                  : '0px',
              'align-items': ['xs'].includes(screen.type.value)
                ? 'flex-start'
                : index % 2 == 0
                ? 'flex-start'
                : 'flex-end',
              'text-align': ['xs'].includes(screen.type.value)
                ? 'left'
                : index % 2 == 0
                ? 'left'
                : 'right',
            }"
          >
            <p class="ProjectItem__category">{{ project.category }}</p>
            <h2 class="ProjectItem__title">{{ project.title }}</h2>
            <p class="ProjectItem__description">{{ project.description }}</p>
            <p class="ProjectItem__tag">
              {{ project.tag.join(" ") }}
            </p>
            <div
              class="ProjectItem__links"
              :class="'ProjectItem__links--' + screen.type.value"
            >
              <a
                :href="project.githubUrl"
                class="ProjectItem__link"
                v-if="project.githubUrl"
                target="_blank"
                rel="noopener"
                aria-label="Github"
                ><svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5626 20.318C21.1653 19.9847 22.6193 19.4073 23.7493 18.5593C25.6799 17.112 26.6666 14.876 26.6666 12.6667C26.6666 11.1167 26.0793 9.67001 25.0619 8.44467C24.4953 7.76201 26.1526 2.66667 24.6799 3.35267C23.2066 4.03934 21.0466 5.55801 19.9153 5.22267C18.6436 4.85044 17.3249 4.66319 15.9999 4.66667C14.7999 4.66667 13.6453 4.81534 12.5686 5.09001C11.0033 5.48801 9.50592 4.00001 7.99992 3.35267C6.49325 2.70601 7.31592 7.97534 6.86859 8.53001C5.89325 9.73667 5.33325 11.1527 5.33325 12.6667C5.33325 14.876 6.52659 17.112 8.45725 18.56C9.74392 19.524 11.3559 20.1387 13.1599 20.4413"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.1599 20.4413C12.3879 21.2913 12.0012 22.0986 12.0012 22.8633V28.674"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                  />
                  <path
                    d="M19.5627 20.318C20.2947 21.278 20.6607 22.1407 20.6607 22.9047V28.674"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 20.8107C4.59933 20.884 5.044 21.1593 5.33333 21.6373C5.768 22.3533 7.38267 25.012 9.21667 25.012H12.0013"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
              <a
                :href="project.demoUrl"
                class="ProjectItem__link"
                v-if="project.demoUrl"
                target="_blank"
                rel="noopener"
                aria-label="Live demo"
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0001 4L21.3334 9.33333M16.0001 4V20V4ZM16.0001 4L10.6667 9.33333L16.0001 4Z"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.66675 22.6666L3.49475 25.98C3.63895 26.5569 3.97185 27.069 4.44052 27.435C4.9092 27.801 5.48676 27.9999 6.08141 28H25.9187C26.5134 27.9999 27.091 27.801 27.5596 27.435C28.0283 27.069 28.3612 26.5569 28.5054 25.98L29.3334 22.6666"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <img
            :src="project.imgSrc"
            alt=""
            class="ProjectItem__image"
            :class="'ProjectItem__image--' + index"
            v-if="index % 2 == 0 && !['xs'].includes(screen.type.value)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, inject } from "vue";
import { observeProject } from "@/components/Shared/observer";
import { CustomScreen } from "@/components/Shared/screen";
import Project0Image from "@/assets/project_0.webp";
import Project1Image from "@/assets/project_1.webp";
import Project2Image from "@/assets/project_2.webp";

onMounted(() => observeProject());

const screen = inject("screen") as CustomScreen;
const isDark = inject("isDark");
const projects = [
  {
    category: "Paid project",
    title: "The Archive",
    description:
      "A showcase website for a luxurious fashion brand. Implement in an elegant theme of black and white. With smooth page transitions. Using firebase as the backend to store all products where users can sort by price or query by brands and categories.",
    tag: ["Vue.js", "Vite", "TypeScript", "Firebase"],
    imgSrc: Project0Image,
    demoUrl: "https://the-archive-com.web.app/",
  },
  {
    category: "Side project",
    title: "Blockchain Visual",
    description:
      "A visualisation website for blockchain. You can see the building block of the blockchain and how are all the blocks chained together to create a secure and immutable distributed database.",
    tag: ["Vue.js", "Vite", "TypeScript"],
    imgSrc: Project1Image,
    githubUrl: "https://github.com/FeiWhang/blockchain_visual",
    demoUrl: "https://blockchain-visual.web.app/",
  },
  {
    category: "College project",
    title: "Code340",
    description:
      "A web platform prototype for an online marketplace for all kinds of code. An itemcode, voucher, giftcards. Register or login to post your product for sell or buy from other sellers.",
    tag: ["Vue.js", "FirebaseAuth", "Firestore"],
    imgSrc: Project2Image,
    githubUrl: "https://github.com/FeiWhang/code340",
    demoUrl: "https://cs340prj.web.app/",
  },
];
</script>

<style lang="scss" scoped>
.Project {
  max-width: var(--layoutWidth);
  margin: 0 auto;
  padding: 0 var(--layoutPadding);
  &__body {
    display: flex;
    flex-direction: column;
    margin: var(--subsectionSpace) 0;
    row-gap: calc(var(--subsectionSpace) * 1.69);
  }
}
.ProjectItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  will-change: box-shadow;
  transition: box-shadow 0.25s ease-in-out;
  opacity: 0;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    z-index: 5;
  }
  &__image {
    z-index: 1;
    width: clamp(300px, 55vw, 650px);
    border-radius: 8px;
    filter: saturate(0.123) opacity(0.123)
      drop-shadow(0 0 4px var(--shadowColor));
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transition: all 0.345s ease-in-out;
    &:hover {
      animation: revealCard 0.456s ease-in-out;
      z-index: 6;
      filter: saturate(0.88) opacity(0.88)
        drop-shadow(0 0 4px var(--shadowColor));
    }
    &:nth-child(even) {
      --offset: 8px;
    }
    &:nth-child(odd) {
      --offset: -8px;
    }
  }
  &__mobileImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.088;
    filter: saturate(0.088) drop-shadow(0 0 4px var(--shadowColor));
    border-radius: 8px;
  }
  &__category {
    font-size: var(--fontXXXS);
    color: var(--activeTextColor);
    margin-bottom: 4px;
  }
  &__title {
    font-size: var(--fontM);
    font-family: "Lexend Deca";
    font-weight: 600;
  }
  &__description {
    font-size: var(--fontXS);
    color: var(--bodyTextColor);
    margin: var(--componentSpace) 0;
    padding: var(--componentSpace);
    max-width: 500px;
    background-color: var(--secondBgColor);
    transition: var(--bgTransition);
    border-radius: 8px;
  }
  &__tag {
    font-size: var(--fontXXS);
    word-spacing: 16px;
  }
  &__links {
    display: flex;
    align-items: center;
    column-gap: 16px;
    margin-top: var(--componentSpace);
    &--xs {
      align-self: flex-end;
    }
    svg {
      width: var(--fontM);
      filter: drop-shadow(0 0 4px var(--shadowColor));
      path {
        stroke: var(--bodyTextColor);
        transition: stroke 0.2s ease-in-out;
      }
      &:hover {
        path {
          stroke: var(--activeTextColor);
        }
      }
    }
  }
}

// animations
@keyframes revealCard {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(var(--offset), 0, 0) rotateY(4deg);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
