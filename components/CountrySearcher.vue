<template>
  <div class="bg-white px-8 py-4 flex justify-center">
    <h3 class="sr-only">Search for countries</h3>
    <label for="search" class="sr-only">Search for countries</label>
    <input
      type="text"
      id="search"
      placeholder="Search for countries"
      @keyup="onChange"
      class="bg-red-50 shadow-lg rounded outline-none p-3"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(['search']);

const onChange = (event) => {
  const searchInput = event.target.value;
  emit('search', searchInput);
};
</script>

<style scoped></style>
