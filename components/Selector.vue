<template>
  <div class="flex flex-col gap-2 bg-white px-4 py-2">
    <h3 class="flex justify-center text-base font-bold uppercase">
      Select {{ name }}
    </h3>
    <div class="flex flex-wrap justify-start gap-3 sm:justify-evenly">
      <div v-for="option in options">
        <input
          class="sr-only peer"
          type="checkbox"
          :id="option"
          :name="option"
          :value="option"
          :checked="selectedOptions.has(option)"
          @change="onChange"
        />
        <label
          :for="option"
          class="border-2 px-3 py-1 rounded-xl text-base font-medium peer-checked:bg-red-200 [@media(pointer:fine){&:hover}]:bg-red-300 active:!bg-red-400"
          >{{ option }}</label
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const { selectedOptions, options, name } = defineProps([
  'selectedOptions',
  'options',
  'name',
]);

const emit = defineEmits(['select']);

const onChange = (event) => {
  const option = event.target.value;
  const isChecked = event.target.checked;

  emit('select', { option, isChecked });
};
</script>

<style scoped></style>
