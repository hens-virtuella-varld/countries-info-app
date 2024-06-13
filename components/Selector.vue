<template>
  <div class="flex flex-col gap-2 bg-white px-4 py-2">
    <h3 class="flex justify-center text-base font-bold uppercase">Select {{ name }}</h3>
    <div>
      <ul class="flex flex-wrap justify-start gap-3 sm:justify-evenly">
        <li
          v-for="option in options"
          class="border-2 px-3 py-1 rounded-xl has-[:checked]:bg-red-200 has-[:hover]:!bg-red-300 has-[:active]:!bg-red-500 has-[:active]:!text-red-50"
        >
          <label :for="option" class="text-base font-medium">{{ option }}</label>
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
