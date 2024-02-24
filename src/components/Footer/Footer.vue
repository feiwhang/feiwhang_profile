<template>
  <footer class="Footer">
    <div class="Footer__container">
      <p class="Footer__text">© Copyright {{ thisYear }}. All right reserved</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const thisYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.Footer {
  background-color: var(--bgColor);
  padding: 48px 0;
  &__container {
    min-width: 314px;
    max-width: var(--layoutWidth);
    padding: 0 var(--layoutPadding);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__text {
    margin: 0 auto;
    align-self: center;
    text-align: center;
    font-size: var(--fontXXS);
    color: var(--bodyTextColor);
  }
}
</style>
