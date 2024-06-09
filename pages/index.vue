<template>
  <div>
    <div v-if="allCountriesInfo">
      <h3>common name: {{ allCountriesInfo[0].name.common }}</h3>
      <div>official name: {{ allCountriesInfo[0].name.official }}</div>
      <div>capital: {{ allCountriesInfo[0].capital }}</div>
      <div>Population: {{ allCountriesInfo[0].population }}</div>
      <div>Area: {{ allCountriesInfo[0].area }}</div>
      <div>Google Map: {{ allCountriesInfo[0].maps.googleMaps }}</div>
      <div>subregion: {{ allCountriesInfo[0].subregion }}</div>
      <div>region: {{ allCountriesInfo[0].region }}</div>
      <div>independent: {{ allCountriesInfo[0].independent }}</div>
      <div>UN Member: {{ allCountriesInfo[0].unMember }}</div>
      <div>languages: {{ allCountriesInfo[0].languages }}</div>
      <div>Flag: {{ allCountriesInfo[0].flag }}</div>
      <div>Flag: <img :src="`${allCountriesInfo[0].flags.svg}`" width="200" /></div>
    </div>
    <div v-else>I didn't get a response</div>
  </div>
</template>

<script setup>
import allCountriesInfo from '@/assets/data/allCountriesInfo.json';
// const uri = 'https://restcountries.com/v3.1/all';
// const { data: allCountriesInfo } = await useFetch(uri);
</script>

<style scoped></style>
