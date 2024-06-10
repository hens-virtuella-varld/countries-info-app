<template>
  <div>
    <SelectModeToggler @toggle="ToggleIsSelectMode" />
    <CountrySelector
      v-if="isSelectMode"
      :allCountries="allCountries"
      @select="setCca3"
    />
    <CountrySearcher v-else @search="setSearchInput" />
    <div v-if="isSelectMode">
      <div
        v-if="selectedCountry[0]"
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
        <CountryCard :country="selectedCountry[0]" />
      </div>
    </div>
    <div v-else>
      <div
        v-if="Object.keys(searchedResultCountries).length > 0"
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
        <CountryCard
          v-for="country in searchedResultCountries"
          :country="country"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import allCountries from '@/assets/data/allCountries.json';
// const uri = 'https://restcountries.com/v3.1/all';
// const { data: allCountries } = await useFetch(uri);

const isSelectMode = ref(true);
const cca3 = ref('');
const searchInput = ref('');

const ToggleIsSelectMode = (boolean) => (isSelectMode.value = boolean);
const setCca3 = (c) => (cca3.value = c);
const setSearchInput = (sI) => (searchInput.value = sI);

const selectedCountry = computed(() =>
  allCountries.filter((country) => country.cca3 === cca3.value)
);

const searchedResultCountries = computed(() =>
  allCountries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchInput.value) === true
  )
);
</script>

<style scoped></style>
