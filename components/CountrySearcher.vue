<template>
  <div class="selector-and-searcher-layout items-center">
    <h3 class="selector-and-searcher-title-font">Search for countries</h3>
    <div>
      <label for="search" class="sr-only">Search for countries</label>
      <input
        type="text"
        id="search"
        placeholder="Search for countries"
        :disabled="disabled"
        class="bg-red-50 shadow-lg rounded outline-none px-4 py-3 disabled:!bg-slate-50"
        @keyup="onChange"
      />
    </div>
  </div>
</template>

<script setup>
const { disabled } = defineProps(['disabled']);
const emit = defineEmits(['search']);

const onChange = (event) => {
  const searchInput = event.target.value;
  emit('search', searchInput);
};
</script>

<style scoped></style>
