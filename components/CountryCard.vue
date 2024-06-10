<template>
  <div class="card text-center">
    <!-- <h1>{{ country }}</h1> -->
    <h3>common name: {{ country.name.common }}</h3>
    <div>official name: {{ country.name.official }}</div>
    <div>capital: {{ country.capital }}</div>
    <div>Population: {{ country.population }}</div>
    <div>Area: {{ country.area }}</div>
    <div>Google Map: {{ country.maps.googleMaps }}</div>
    <div>region: {{ country.region }}</div>
    <div>subregion: {{ country.subregion }}</div>
    <div>independent: {{ country.independent }}</div>
    <div>UN Member: {{ country.unMember }}</div>
    <div>languages: {{ country.languages }}</div>
    <div>Flag: <img :src="`${country.flags.svg}`" width="200" /></div>
  </div>
</template>

<script setup>
const { country } = defineProps(['country']);
</script>

<style lang="scss" scoped></style>
