<template>
  <div class="p-5 grid justify-center">
    <CountrySearcher @search="setSearchInput" />

    <div>
      <ul
        v-if="Object.keys(searchedResultCountries).length > 0"
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
       <CountryItem
       v-for="country in allCountries"
       :country="country"
       />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import allCountries from '@/assets/data/allCountries.json';
// const uri = 'https://restcountries.com/v3.1/all';
// const { data: allCountries } = await useFetch(uri);

const cca3 = ref('');
const searchInput = ref('');

const setCca3 = (c) => (cca3.value = c);
const setSearchInput = (sI) => (searchInput.value = sI);

const searchedResultCountries = computed(() =>
  allCountries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchInput.value) === true
  )
);

const clickCountry = () => {};
</script>

<style scoped></style>
