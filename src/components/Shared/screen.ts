import { ComputedRef, Ref, computed, onMounted, onUnmounted, ref } from "vue";

export interface CustomScreen {
  width: Ref<number>;
  type: ComputedRef<string>;
  scroll: Ref<number>;
}

export function getScreen(): CustomScreen {
  const width = ref(window.innerWidth);
  const scroll = ref(window.scrollY);

  const onWidthChange = () => (width.value = window.innerWidth);
  const onScrollChange = () => (scroll.value = window.scrollY);
  onMounted(() => {
    window.addEventListener("resize", onWidthChange, { passive: true });
    window.addEventListener("scroll", onScrollChange, { passive: true });
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onWidthChange);
    window.removeEventListener("scroll", onScrollChange);
  });

  const type = computed(() => {
    switch (true) {
      case width.value < 600:
        return "xs";
      case width.value >= 600 && width.value < 960:
        return "sm";
      case width.value >= 960 && width.value < 1264:
        return "md";
      case width.value >= 1264 && width.value < 1620:
        return "lg";
      case width.value >= 1620:
        return "xl";
      default:
        return "xl";
    }
  });

  return { width, type, scroll };
}
