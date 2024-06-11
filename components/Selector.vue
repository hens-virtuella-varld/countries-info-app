<template>
  <div class="flex flex-row gap-4">
    <div>Choose {{ name }} :</div>
    <div>
      <ul class="flex flex-row gap-4">
        <li v-for="option in options" :for="option">
          <div>
            <input
              type="checkbox"
              :id="option"
              :name="option"
              :value="option"
              :checked="selectedOptions.has(option)"
              @change="onChange"
            />
            <label>{{ option }}</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { selectedOptions, options, name } = defineProps(['selectedOptions', 'options', 'name']);

const emit = defineEmits(['select']);

const onChange = (event) => {
  const option = event.target.value;
  const isChecked = event.target.checked;

  emit('select', { option, isChecked });
};
</script>

<style scoped></style>
