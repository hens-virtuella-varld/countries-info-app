<template>
  <div class="p-5 flex flex-col justify-center gap-4">
    <div>
      <CountryCard :country="country" />
      <!-- <CountryCard :country="countries[0]" /> -->
    </div>
    <div class="flex justify-center">
      <button
        class="px-3 py-2 border-4 rounded-xl text-md font-medium hover:bg-red-200 active:bg-red-300 "
      >
        <NuxtLink to="/">Go back Home page</NuxtLink>
      </button>
    </div>
  </div>
</template>

<script setup>
import allCountries from '@/assets/data/allCountries.json';

const { cca3 } = useRoute().params;

const country = allCountries.find((c) => c.cca3 === cca3);

// const uri = 'https://restcountries.com/v3.1/alpha/' + cca3;
// const { data: countries } = await useFetch(uri, { key: cca3 });
</script>
