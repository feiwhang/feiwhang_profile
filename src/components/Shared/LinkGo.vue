<template>
  <div class="LinkGo" :style="linkStyle">
    <a
      class="Link"
      :class="'Link--' + screen.type.value"
      :href="to"
      :target="target"
      rel="noopener"
    >
      <span>
        {{ title }}
      </span>
      <div class="IconBars" :class="'IconBars--' + screen.type.value"></div>
    </a>
  </div>
</template>

<script lang="ts">
import { inject } from "vue";
import { CustomScreen } from "@/components/Shared/screen";

export default {
  name: "LinkGo",
  props: [
    "to",
    "target",
    "title",
    "bgGradient",
    "bgColor",
    "elemColor",
    "fontSize",
    "padding",
    "cursor",
    "hoverColor",
  ],
  computed: {
    linkStyle() {
      return {
        "--cursor": this.cursor
          ? this.cursor
          : this.to === undefined
          ? "default"
          : "pointer",
        "--elemColor": this.elemColor,
        "--bgGradient":
          this.bgGradient === undefined ? "none" : this.bgGradient,
        "--bgColor": this.bgColor,
        "--fontSize": this.fontSize === undefined ? "16px" : this.fontSize,
        "--padding": this.padding === undefined ? "6px 16px" : this.padding,
        "--hoverColor":
          this.hoverColor === undefined ? "none" : this.hoverColor,
      };
    },
  },
  setup() {
    const screen = inject("screen") as CustomScreen;
    return { screen };
  },
};
</script>

<style lang="scss" scoped>
.LinkGo {
  width: fit-content;
}
.Link {
  cursor: var(--cursor);
  pointer-events: visible;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--elemColor);
  border-radius: 32px;
  background-image: var(--bgGradient);
  background-color: var(--bgColor);
  padding: var(--padding);
  font-size: var(--fontSize);
  font-weight: 600;
  letter-spacing: 0.2px;
  transition: var(--bgTransition);
  span {
    display: inline-block;
  }
  &:hover {
    background-color: var(--hoverColor);
    .IconBars {
      background-color: var(--elemColor);
      transform: translateX(3px);
      &--xs {
        background-color: transparent;
        transform: none;
      }
    }
  }
}
.IconBars {
  display: flex;
  width: 9px;
  height: 2px;
  margin-left: 8px;
  border-radius: 32px;
  transition: transform 0.25s ease-in-out, var(--bgTransition);
  background-color: transparent;
  &--xs,
  &--sm {
    transition: none;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 2px;
    margin: 0 0 0 16px;
    border-radius: 8px;
    background-color: var(--elemColor);
  }
  &::before {
    transform: translateX(-16px) rotate(45deg) translateY(-3.5px);
  }
  &::after {
    transform: translateX(-16px) rotate(-45deg) translateY(3.5px);
  }
}
</style>
