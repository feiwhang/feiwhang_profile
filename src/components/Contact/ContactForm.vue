<template>
  <form
    class="ContactForm"
    :class="screen.width.value < 669 ? 'ContactForm--mobile' : ''"
    @submit.prevent
  >
    <label for="title" class="ContactForm__label">Title</label>
    <input
      type="text"
      id="title"
      v-model="formData.title"
      class="ContactForm__input"
    />
    <p
      class="ContactForm__error"
      :style="{ opacity: !validation.title && isSubmitClicked ? 1 : 0 }"
    >
      * Title cannot be empty
    </p>

    <label for="message" class="ContactForm__label">Message</label>
    <textarea
      name="message"
      id="message"
      v-model="formData.message"
      cols="30"
      rows="10"
      class="ContactForm__input"
    ></textarea>
    <p
      class="ContactForm__error"
      :style="{ opacity: !validation.message && isSubmitClicked ? 1 : 0 }"
    >
      * Message cannot be empty
    </p>
    <button
      class="ContactForm__submitButton"
      @click="onSubmit"
      :disabled="submitState.disabled"
      :style="{ cursor: submitState.disabled ? 'not-allowed' : 'pointer' }"
    >
      <div class="ButtonContainer">
        <svg
          class="SendIcon"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.568 14.7933L5.90134 4.12666C5.6731 4.01926 5.41907 3.97881 5.16876 4.01001C4.91844 4.04121 4.68211 4.14277 4.48721 4.30291C4.29231 4.46304 4.14683 4.67518 4.06767 4.91469C3.98852 5.1542 3.97892 5.41125 4.04001 5.65599L5.65601 12.1213L16 16L5.65601 19.8787L4.04001 26.344C3.97777 26.5889 3.98657 26.8465 4.06536 27.0866C4.14415 27.3267 4.28969 27.5394 4.48494 27.6998C4.68019 27.8603 4.91709 27.9618 5.16792 27.9925C5.41875 28.0232 5.67314 27.9819 5.90134 27.8733L28.568 17.2067C28.7971 17.099 28.9908 16.9283 29.1264 16.7147C29.2621 16.501 29.3341 16.2531 29.3341 16C29.3341 15.7469 29.2621 15.499 29.1264 15.2853C28.9908 15.0717 28.7971 14.901 28.568 14.7933V14.7933Z"
            fill="black"
          />
        </svg>
        <p class="ContactForm__submitStatus">
          {{ submitState.status }}
        </p>
      </div>
    </button>
  </form>
</template>

<script setup lang="ts">
import { inject, reactive, computed, ref } from "vue";
import { CustomScreen } from "@/components/Shared/screen";

const screen = inject("screen") as CustomScreen;
const formData = reactive({
  title: "",
  message: "",
});

const validation = computed(() => {
  return {
    title: !!formData.title.trim(),
    message: !!formData.message.trim(),
  };
});

const submitState = reactive({
  status: "Send Email",
  disabled: false,
});

const isSubmitClicked = ref(false);

function onSubmit() {
  isSubmitClicked.value = true;
  const isValid = Object.keys(validation.value).every((key) => {
    return validation.value[key as keyof typeof validation.value];
  });
  if (isValid) {
    const mailTo =
      "mailto:feiwhang@gmail.com?subject=" +
      formData.title +
      "&body=" +
      formData.message;
    window.open(mailTo);
  }
}
</script>

<style lang="scss" scoped>
.ContactForm {
  display: flex;
  flex-direction: column;
  opacity: 0;
  &__label {
    margin-bottom: 6px;
    font-size: var(--fontXXS);
    font-family: "Lexend Deca";
    font-weight: 200;
  }
  &__input {
    width: clamp(280px, 30vw, 369px);
    padding: 8px 16px;
    border-radius: 8px;
    font-family: Nunito;
    font-size: var(--fontXS);
    background-color: var(--thirdBgColor);
    box-shadow: 0 0 6px transparent;
    appearance: none;
    -webkit-appearance: none;
    -webkit-box-shadow: 0 0 6px transparent;
    color: var(--bodyTextColor);
    will-change: box-shadow;
    transition: box-shadow 0.2s ease-in-out;
    &:focus {
      -webkit-box-shadow: 0 0 6px var(--shadowColor);
      box-shadow: 0 0 6px var(--shadowColor);
    }
  }
  &__error {
    color: var(--redError);
    margin: 4px 0 16px 8px;
    font-size: var(--fontXXXS);
    transition: opacity 0.2s ease-in-out;
  }
  &__submitButton {
    width: 100%;
    cursor: pointer;
    background-color: var(--purple);
    border-radius: 6px;
    padding: 12px;
    margin-top: 8px;
    font-size: var(--fontXS);
    font-weight: 500;
    color: white;
    transition: var(--bgTransition);
    &:hover {
      background-color: var(--lightPurple);
    }
  }

  #message {
    resize: none;
    padding: 12px 16px;
  }
  &--mobile {
    input,
    textarea {
      width: auto;
      flex: 1;
    }
  }
}
.ButtonContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
}
.SendIcon {
  width: 24px;
  animation: hovering 2s ease-in-out infinite;
  path {
    fill: white;
  }
}
@keyframes hovering {
  0% {
    transform: translate3d(-4px, 0, 0);
  }
  50% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-4px, 0, 0);
  }
}
</style>
