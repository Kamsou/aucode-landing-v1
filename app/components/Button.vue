<script setup lang="ts">
interface Props {
  variant: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false
})

const emit = defineEmits(['click'])

const buttonClass = computed(() => ({
  'button-primary': props.variant === 'primary',
  'button-secondary': props.variant === 'secondary',
  'button-tertiary': props.variant === 'tertiary',
  'opacity-50 cursor-not-allowed': props.disabled
}))
</script>

<template>
  <button :class="buttonClass" @click="props.disabled ? null : emit('click')">
    <slot />
  </button>
</template>

<style scoped>
.button-primary {
  background: #bff92b;
  border-color: #bff92b;
  border-style: solid;
  border-width: 2px;
  min-height: 50px;
  font-size: 16px;

  color: #43473a;

  border-radius: 12px;

  box-shadow: 0px 4px 0px #b1e52b;
}

.button-primary:active {
  transform: translateY(2px);
  box-shadow: 0px 1px 0px #b1e52b;
  background: #bff92b;
}

.button-secondary {
  background: transparent;
  border-color: #43473a;
  border-style: solid;
  border-width: 2px;
  min-height: 50px;
  font-size: 16px;

  color: #43473a;

  border-radius: 12px;

  box-shadow: 0px 2px 0px #43473a;
}

.button-secondary:active {
  transform: translateY(2px);
  box-shadow: 0px 1px 0px #43473a;
  background: transparent;
}

.button-tertiary {
  background: #ffffff;
  border-color: #ffffff;
  border-style: solid;
  border-width: 2px;
  min-height: 50px;
  font-size: 16px;

  color: #43473a;

  border-radius: 12px;

  box-shadow: 0px 2px 0px #e5e5e5;
}

.button-tertiary:active {
  transform: translateY(2px);
  box-shadow: 0px 1px 0px #e5e5e5;
  background: #ffffff;
}
</style>
