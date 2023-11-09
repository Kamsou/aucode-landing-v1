<template>
  <div
    :style="{
      transform: `translate3d(0, ${parallaxData * factor}px, 0)`,
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

const updateParallax = () => {
  parallaxData.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", updateParallax);
  updateParallax();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateParallax);
});
</script>
