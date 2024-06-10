<template>
  <div>
    <CountrySearcher @search="searchCountries" />
    <CountrySelector :allCountries="allCountries" @select="selectCountry" />
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

const selectedCountries = ref([]);

const selectCountry = (cca3) => {
  selectedCountries.value = allCountries.filter(
    (country) => country.cca3 === cca3
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
