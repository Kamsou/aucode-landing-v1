<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text'
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  let inputValue = (event.target as HTMLInputElement).value

  if (props.type === 'email') inputValue = inputValue.toLowerCase()

  emit('update:modelValue', inputValue)
}
</script>

<template>
  <div>
    <label v-if="label" class="block text-sm not-italic text-gray-light mb-2">{{ label }}</label>
    <input
      :value="modelValue"
      :type="type"
      @input="updateValue"
      class="border border-[#E5E5E5] p-2 rounded-xl bg-gray-100 placeholder-gray-light text-sm placeholder-opacity-80 overflow-hidden h-[50px] w-full tracking-tight"
      :class="disabled ? 'cursor-not-allowed text-gray-400 italic' : 'text-gray-800'"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>
