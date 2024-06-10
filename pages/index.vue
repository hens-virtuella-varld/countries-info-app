<template>
  <div>
    <CountrySearcher @search="setSearchInput" />
    <CountrySelector :allCountries="allCountries" @select="setCca3" />
    <div
      v-if="Object.keys(selectedCountries).length > 0"
      class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
    >
      <!-- <div v-for="country in allCountries"> -->
      <CountryCard v-for="country in selectedCountries" :country="country" />
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import allCountries from '@/assets/data/allCountries.json';
// const uri = 'https://restcountries.com/v3.1/all';
// const { data: allCountries } = await useFetch(uri);

const searchInput = ref('');
const cca3 = ref('');

const setSearchInput = (sI) => {
  searchInput.value = sI;
};
const setCca3 = (c) => {
  cca3.value = c;
};
  );
};

const searchCountries = (searchInput) => {
  selectedCountries.value = allCountries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchInput) === true
  );
};
</script>

<style scoped></style>
