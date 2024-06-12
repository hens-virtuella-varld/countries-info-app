<template>
  <div class="flex items-center gap-2">
    <h3 class="w-40">Select {{ name }}</h3>
    <div>
      <ul class="flex flex-wrap gap-3">
        <li v-for="option in options" class="border-2 p-2 rounded-xl">
          <label :for="option">{{ option }}</label>
          <input
            class="sr-only"
            type="checkbox"
            :id="option"
            :name="option"
            :value="option"
            :checked="selectedOptions.has(option)"
            @change="onChange"
          />
        </li>
      </ul>
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
