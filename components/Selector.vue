<template>
  <div class="selector-and-searcher-layout">
    <h3 class="selector-title-flexbox selector-and-searcher-title-font">
      Select {{ name }}
    </h3>
    <div class="grid grid-cols-3 gap-3 place-items-center sm:grid-cols-6">
      <div v-for="option in options" :key="option">
        <input
          class="sr-only peer"
          type="checkbox"
          :id="option"
          :name="option"
          :value="option"
          :checked="selectedOptions.has(option)"
          :disabled="disabled"
          @change="onChange"
        />
        <label
          :for="option"
          class="px-3 selector-button [@media(pointer:fine){&:hover}]:bg-red-300"
          >{{ option }}</label
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const { selectedOptions, options, name, disabled } = defineProps([
  'selectedOptions',
  'options',
  'name',
  'disabled',
]);

const emit = defineEmits(['select']);

const onChange = (event) => {
  const option = event.target.value;
  const isChecked = event.target.checked;

  emit('select', { option, isChecked });
};
</script>

<style scoped></style>
