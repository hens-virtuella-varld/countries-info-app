<template>
  <div>
    <div>
      <label for="scales">Checked: Select; Unchecked: Search </label>
      <input
        type="checkbox"
        id="toggler"
        name="toggler"
        checked
        @change="ToggleIsSelectMode"
      />
    </div>
    <CountrySelector v-if="isSelectMode" :allCountries="allCountries" @select="setCca3" />
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

const searchInput = ref('');
const cca3 = ref('');
const isSelectMode = ref(true);

const setSearchInput = (sI) => {
  searchInput.value = sI;
};
const setCca3 = (c) => {
  cca3.value = c;
};

const ToggleIsSelectMode = (event) => {
  isSelectMode.value = event.target.checked;
};

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
