<template>
  <div>
    <label for="search">Search for countries</label>
    <input
      type="text"
      id="search"
      placeholder="Search for countries"
      @change="onChange"
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

<style lang="scss" scoped></style>
