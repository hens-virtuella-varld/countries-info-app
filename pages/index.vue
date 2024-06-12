<template>
  <div class="p-5 grid justify-center">
    <!-- <div>{{ sortedCountriesByPopulation }}</div> -->
    <div v-for="sortOption in sortOptions">
      <li :for="sortOption.sortOrder">
        <input
          type="radio"
          :id="sortOption.sortOrder"
          :name="sortOption.sortOrder"
          :value="sortOption.sortOrder"
          :checked="sortOrder === sortOption.sortOrder"
          @change="setSortOrder"
        />
        <label :for="sortOption.sortLabel">{{ sortOption.sortLabel }}</label>
      </li>
    </div>
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
const selectedRegions = ref(new Set([]));
const isDescending = ref(true);
const sortOrder = ref('descendingPopulation');

const setSortOrder = (event) => (sortOrder.value = event.target.value);
const setCca3 = (c) => (cca3.value = c);
const setSearchInput = (sI) => (searchInput.value = sI);
const setSelectedRegions = ({ option: region, isChecked }) => {
  if (isChecked) {
    selectedRegions.value.add(region);
  } else {
    selectedRegions.value.delete(region);
  }
};
const setSelectedLanguages = ({ option: country, isChecked }) => {
  if (isChecked) {
    selectedLanguages.value.add(country);
  } else {
    selectedLanguages.value.delete(country);
  }
};

const searchedResultCountries = computed(() => {
  const filteredCountries = allCountries
    .filter(
      (country) =>
        country.name.common.toLowerCase().includes(searchInput.value) === true
    )
    .filter((country) => {
      if (selectedRegions.value.size === 0) {
        return true;
      } else {
        return selectedRegions.value.has(country.region);
      }
    })
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
    });

  if (sortOrder.value === 'descendingPopulation') {
    return filteredCountries.sort(
      (countryA, countryB) => countryB.population - countryA.population
    );
  } else if (sortOrder.value === 'ascendingPopulation') {
    return filteredCountries.sort(
      (countryA, countryB) => countryA.population - countryB.population
    );
  } else if (sortOrder.value === 'descendingArea') {
    return filteredCountries.sort(
      (countryA, countryB) => countryB.area - countryA.area
    );
  } else if (sortOrder.value === 'ascendingArea') {
    return filteredCountries.sort(
      (countryA, countryB) => countryA.area - countryB.area
    );
  }
});

const sortOptions = [
  {
    sortOrder: 'descendingPopulation',
    sortLabel: 'sort by population, higest first',
  },
  {
    sortOrder: 'ascendingPopulation',
    sortLabel: 'sort by population, lowest first',
  },
  {
    sortOrder: 'descendingArea',
    sortLabel: 'sort by area, higest first',
  },
  {
    sortOrder: 'ascendingArea',
    sortLabel: 'sort by area, lowest first',
  },
];

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
