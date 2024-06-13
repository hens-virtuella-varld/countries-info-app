<template>
  <div class="bg-white px-4 py-2 flex flex-col items-center gap-2">
    <h3 class="text-base font-bold uppercase">Search for countries</h3>
    <div>
      <label for="search" class="sr-only">Search for countries</label>
      <input
        type="text"
        id="search"
        placeholder="Search for countries"
        @keyup="onChange"
        class="bg-red-50 shadow-lg rounded outline-none px-4 py-3 text-base"
      />
    </div>
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
