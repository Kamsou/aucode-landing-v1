<template>
  <div
    :style="{
      transform: enabled ? `translate3d(0, ${parallaxData * factor}px, 0)` : undefined,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  factor: {
    type: Number,
    required: true,
  },
});

const parallaxData = ref(0);
const enabled = ref(false);

const updateParallax = () => {
  parallaxData.value = window.scrollY;
};

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const isMobile = window.innerWidth < 768;

  if (!prefersReducedMotion && !isMobile) {
    enabled.value = true;
    window.addEventListener("scroll", updateParallax, { passive: true });
    updateParallax();
  }
});

onUnmounted(() => {
  if (enabled.value) {
    window.removeEventListener("scroll", updateParallax);
  }
});
</script>
