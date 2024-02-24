<template>
  <section id="contact" class="Contact">
    <div class="SectionContainer">
      <div class="Contact__body">
        <div class="Contact__info">
          <header class="Contact__header">
            <h2 class="SectionSubtitle" id="ContactSubtitle">Contact</h2>
            <h1 class="SectionTitle" id="ContactTitle">Get a quote</h1>
          </header>
          <div
            class="ContactFormContainer"
            v-if="screen.width.value < 669"
            :style="{ margin: 'var(--subsectionSpace) 0' }"
          >
            <ContactForm />
          </div>
          <div class="Contact__items">
            <p class="Contact__item">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6667 5.33325H5.33341C3.86675 5.33325 2.68008 6.53325 2.68008 7.99992L2.66675 23.9999C2.66675 25.4666 3.86675 26.6666 5.33341 26.6666H26.6667C28.1334 26.6666 29.3334 25.4666 29.3334 23.9999V7.99992C29.3334 6.53325 28.1334 5.33325 26.6667 5.33325ZM26.1334 10.9999L16.7067 16.8933C16.2801 17.1599 15.7201 17.1599 15.2934 16.8933L5.86675 10.9999C5.73305 10.9249 5.61597 10.8235 5.5226 10.7019C5.42923 10.5802 5.3615 10.441 5.32352 10.2924C5.28553 10.1439 5.27809 9.98917 5.30162 9.83766C5.32516 9.68616 5.3792 9.541 5.46046 9.41099C5.54172 9.28097 5.64851 9.16879 5.77438 9.08125C5.90025 8.9937 6.04258 8.9326 6.19274 8.90165C6.34291 8.8707 6.49779 8.87054 6.64802 8.90118C6.79825 8.93182 6.9407 8.99263 7.06675 9.07992L16.0001 14.6666L24.9334 9.07992C25.0595 8.99263 25.2019 8.93182 25.3521 8.90118C25.5024 8.87054 25.6573 8.8707 25.8074 8.90165C25.9576 8.9326 26.0999 8.9937 26.2258 9.08125C26.3516 9.16879 26.4584 9.28097 26.5397 9.41099C26.621 9.541 26.675 9.68616 26.6985 9.83766C26.7221 9.98917 26.7146 10.1439 26.6766 10.2924C26.6387 10.441 26.5709 10.5802 26.4776 10.7019C26.3842 10.8235 26.2671 10.9249 26.1334 10.9999V10.9999Z"
                  fill="black"
                />
              </svg>
              feiwhang@gmail.com
            </p>
            <p class="Contact__item">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 3C13.3488 3.00319 10.8071 4.08037 8.93239 5.99522C7.05771 7.91008 6.00314 10.5063 6.00001 13.2143C5.99684 15.4273 6.70454 17.5802 8.01455 19.3429C8.01455 19.3429 8.28728 19.7096 8.33183 19.7626L16 29L23.6718 19.7579C23.7118 19.7087 23.9854 19.3429 23.9854 19.3429L23.9864 19.3401C25.2957 17.5782 26.0031 15.4263 26 13.2143C25.9969 10.5063 24.9423 7.91008 23.0676 5.99522C21.1929 4.08037 18.6512 3.00319 16 3V3ZM16 16.9286C15.2808 16.9286 14.5777 16.7107 13.9797 16.3026C13.3818 15.8945 12.9157 15.3144 12.6404 14.6357C12.3652 13.957 12.2932 13.2102 12.4335 12.4897C12.5738 11.7692 12.9202 11.1073 13.4287 10.5879C13.9373 10.0684 14.5852 9.71468 15.2906 9.57137C15.996 9.42805 16.7271 9.50161 17.3916 9.78273C18.056 10.0639 18.624 10.5399 19.0235 11.1507C19.4231 11.7616 19.6364 12.4797 19.6364 13.2143C19.6352 14.199 19.2517 15.143 18.57 15.8393C17.8883 16.5356 16.9641 16.9273 16 16.9286V16.9286Z"
                  fill="black"
                />
              </svg>
              Bangkok, Thailand
            </p>
          </div>
          <div class="Contact__socials">
            <a
              href="https://github.com/FeiWhang"
              target="_blank"
              class="Contact__social"
              aria-label="Github"
              rel="noopener"
              ><svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2762 30.1076 27.0362 28.0662 28.9916 25.3432C30.9469 22.6201 31.999 19.3524 32 16C32 7.16 24.84 0 16 0Z"
                  fill="black"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/feiwhang"
              target="_blank"
              class="Contact__social"
              aria-label="Linkedin"
              rel="noopener"
              ><svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.33325 3.78392C1.33325 3.13396 1.59145 2.51063 2.05104 2.05104C2.51063 1.59145 3.13396 1.33326 3.78392 1.33326H28.2133C28.5354 1.33273 28.8544 1.39574 29.1521 1.51868C29.4498 1.64162 29.7204 1.82207 29.9482 2.0497C30.1761 2.27734 30.3569 2.54769 30.4801 2.84527C30.6034 3.14285 30.6668 3.46182 30.6666 3.78392V28.2133C30.6669 28.5354 30.6038 28.8545 30.4807 29.1522C30.3576 29.4499 30.177 29.7205 29.9493 29.9483C29.7215 30.1762 29.4511 30.3569 29.1534 30.4802C28.8558 30.6034 28.5367 30.6668 28.2146 30.6666H3.78392C3.46198 30.6666 3.1432 30.6032 2.84578 30.4799C2.54837 30.3567 2.27815 30.176 2.05056 29.9483C1.82298 29.7206 1.64249 29.4503 1.51942 29.1528C1.39634 28.8553 1.33308 28.5365 1.33325 28.2146V3.78392ZM12.9439 12.5173H16.9159V14.5119C17.4893 13.3653 18.9559 12.3333 21.1599 12.3333C25.3853 12.3333 26.3866 14.6173 26.3866 18.8079V26.5706H22.1106V19.7626C22.1106 17.3759 21.5373 16.0293 20.0813 16.0293C18.0613 16.0293 17.2213 17.4813 17.2213 19.7626V26.5706H12.9439V12.5173ZM5.61059 26.3879H9.88792V12.3333H5.61059V26.3866V26.3879ZM10.4999 7.74926C10.508 8.11549 10.4428 8.47964 10.3082 8.82034C10.1737 9.16104 9.97239 9.47144 9.71623 9.7333C9.46007 9.99516 9.15418 10.2032 8.81653 10.3453C8.47887 10.4873 8.11624 10.5605 7.74992 10.5605C7.3836 10.5605 7.02097 10.4873 6.68331 10.3453C6.34565 10.2032 6.03977 9.99516 5.78361 9.7333C5.52745 9.47144 5.32618 9.16104 5.1916 8.82034C5.05702 8.47964 4.99185 8.11549 4.99992 7.74926C5.01575 7.03039 5.31243 6.34631 5.82643 5.8435C6.34043 5.3407 7.03088 5.05915 7.74992 5.05915C8.46895 5.05915 9.1594 5.3407 9.67341 5.8435C10.1874 6.34631 10.4841 7.03039 10.4999 7.74926Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="ContactFormContainer" v-if="screen.width.value >= 669">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from "./ContactForm.vue";
import { onMounted, inject } from "vue";
import { observeContact } from "@/components/Shared/observer.js";
import { CustomScreen } from "@/components/Shared/screen";

onMounted(() => observeContact());

const screen = inject("screen") as CustomScreen;
</script>

<style lang="scss" scoped>
.Contact {
  max-width: var(--layoutWidth);
  margin: 0 auto;
  margin-bottom: var(--sectionSpace);
  padding: 0 var(--layoutPadding);
  position: relative;
  &__body {
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    background-color: var(--secondBgColor);
    padding: var(--layoutPadding);
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  &__items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: var(--layoutPadding);
    margin: var(--componentSpace) 0;
    opacity: 0;
  }
  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 16px;
    font-size: var(--fontXS);
    color: var(--bodyTextColor);
    border-radius: 8px;
    svg {
      width: 28px;
      filter: drop-shadow(0 0 4px var(--shadowColor));
      path {
        fill: var(--bodyTextColor);
      }
    }
  }
  &__socials {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 16px;
    margin-top: var(--componentSpace);
    opacity: 0;
  }
  &__social {
    svg {
      width: 28px;
      filter: drop-shadow(0 0 4px var(--shadowColor));
      path {
        fill: var(--bodyTextColor);
        transition: fill 0.2s ease-in-out;
      }
      &:hover {
        path {
          fill: var(--activeTextColor);
        }
      }
    }
  }
}
.ContactFormContainer {
  padding: var(--layoutPadding);
  border-radius: 6px;
  background-color: var(--bgColor);
}
</style>
