<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: number | string;
  }>(),
  {
    modelValue: 0,
  }
);

const emit = defineEmits<{
  "update:modelValue": [count: number];
}>();

const updateValue = (value: number | string) =>
  emit("update:modelValue", parseInt(value.toString()));
</script>
<template>
  <span>
    <button
      class="px-2 bg-gray-200 rounded-l cursor-pointer"
      @click="
        updateValue(
          parseInt(modelValue.toString()) > 0
            ? parseInt(modelValue.toString()) - 1
            : 0
        )
      "
    >
      -
    </button>
    <input
      :value="modelValue"
      type="number"
      min="0"
      @input="
        updateValue(
          parseInt(($event.target as HTMLInputElement)?.value.toString())
        )
      "
    />
    <button
      class="px-2 bg-gray-200 rounded-r cursor-pointer"
      @click="updateValue(parseInt(modelValue.toString()) + 1)"
    >
      +
    </button>
  </span>
</template>

<style scoped>
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
  border: 1px solid gray;
  @apply border-gray-500 w-10 text-center;
}
button {
  border: 1px solid gray;
}
</style>
