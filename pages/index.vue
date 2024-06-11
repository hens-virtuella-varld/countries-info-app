<template>
  <div class="p-5 grid justify-center">
    <Selector
      :options="allRegions"
      :name="'regions'"
      :selectedOptions="selectedRegions"
      @select="setSelectedRegions"
    />
    <Selector
      :options="commonLanguages"
      :name="'languages'"
      :selectedOptions="selectedLanguages"
      @select="setSelectedLanguages"
    />
    <CountrySearcher @search="setSearchInput" />

    <div>
      <ul
        v-if="Object.keys(searchedResultCountries).length > 0"
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
        <CountryItem
          v-for="country in searchedResultCountries"
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
const selectedLanguages = ref(new Set([]));
const selectedRegions = ref(
  new Set(['Americas', 'Europe', 'Asia', 'Oceania', 'Africa', 'Antarctic'])
);

const setCca3 = (c) => (cca3.value = c);
const setSearchInput = (sI) => (searchInput.value = sI);
const setSelectedRegions = ({ option: region, isChecked }) => {
  if (isChecked) {
    selectedRegions.value.add(region);
  } else {
    selectedRegions.value.delete(region);
  }
  console.log('selectedRegions: ', selectedRegions.value);
};
const setSelectedLanguages = ({ option: country, isChecked }) => {
  if (isChecked) {
    selectedLanguages.value.add(country);
  } else {
    selectedLanguages.value.delete(country);
  }
  console.log('selectedLanguages: ', selectedLanguages.value);
};

const searchedResultCountries = computed(() =>
  allCountries
    .filter(
      (country) =>
        country.name.common.toLowerCase().includes(searchInput.value) === true
    )
    .filter((country) => selectedRegions.value.has(country.region))
    .filter((country) => {
      if (selectedLanguages.value.size === 0) {
        return true;
      } else if (!country.languages) {
        return false;
      } else {
        return Object.values(country.languages).some((language) =>
          selectedLanguages.value.has(language)
        );
      }
    })
);

const allRegions = [
  'Americas',
  'Europe',
  'Asia',
  'Oceania',
  'Africa',
  'Antarctic',
];

const commonLanguages = [
  'English',
  'French',
  'Arabic',
  'Spanish',
  'Portuguese',
  'Russian',
  'Dutch',
  'German',
  'Chinese',
  'Hindi',
];
</script>

<style scoped></style>
