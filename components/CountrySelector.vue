<template>
  <div>
    <label for="country-select">Select a country:</label>
    <select name="countries" id="country-select" @change="onChange">
      <option selected value disabled>Select a country</option>
      <option
        :value="country.cca3"
        v-for="country in allCountries"
        :key="country.name.cca3"
      >
        {{ `${country.flag} ${country.name.common}` }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  allCountries: {},
});

const emit = defineEmits(['select']);

const onChange = (event) => {
  const cca3 = event.target.value
  emit('select', cca3);
};
</script>

<style scoped></style>
