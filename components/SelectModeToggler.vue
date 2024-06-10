<template>
  <div>
    <label for="toggler">Checked: Select; Unchecked: Search </label>
    <input
      type="checkbox"
      id="toggler"
      name="toggler"
      checked
      @change="onChange"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(['toggle']);

const onChange = (event) => {
  emit('toggle', event.target.checked);
};
</script>

<style scoped></style>
