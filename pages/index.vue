<template>
  <main
    class="font-sans text-stone-700 w-full flex flex-col items-center bg-slate-100"
  >
    <section class="flex flex-col max-xl:w-full xl:w-[78rem] p-3 gap-y-2">
      <section class="relative">
        <!-- <section
          v-if="selectedCountry"
          class="absolute top-0 left-0 w-full h-full bg-zinc-400 opacity-50"
        ></section> -->
        <section>
          <OrderSelector
            :name="'Sort by'"
            :sortOrder="sortOrder"
            @select="setSortOrder"
            :disabled="!!selectedCountry"
          />
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
        </section>
      </section>

      <section v-if="selectedCountry">
        <SelectedCountry
          :country="selectedCountry"
          @select="setSelectedCountry"
        />
      </section>
      <section v-else>
        <ul
          v-if="Object.keys(displayedList).length > 0"
          class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          <CountryItem
            :key="country.cca3"
            v-for="country in displayedList"
            :country="country"
            @select="setSelectedCountry"
          />
        </ul>
      </section>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import allCountries from '@/assets/data/allCountries.json';
// const uri = 'https://restcountries.com/v3.1/all';
// const { data: allCountries } = await useFetch(uri);

const sortOrder = ref('descendingPopulation');
const cca3 = ref('');
const searchInput = ref('');
const selectedRegions = ref(new Set([]));
const selectedLanguages = ref(new Set([]));
const isDisplayedList = ref(true);
const selectedCountry = ref(null);

const setSelectedCountry = (country) => {
  selectedCountry.value = country;
};
const setSortOrder = (order) => (sortOrder.value = order);
const setCca3 = (code) => (cca3.value = code);
const setSearchInput = (input) => (searchInput.value = input);
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

const displayedList = computed(() => {
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
  'Spanish',
  'Arabic',
  'Russian',
  'Hindi',
];
</script>

<style scoped></style>
