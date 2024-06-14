<template>
  <div class="p-5 flex flex-col justify-center gap-4">
    <div>
      <div class="p-3 rounded-lg shadow-md h-full text-center bg-slate-50">
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
        <div>
          Flag:
          <img :src="`${country.flags.svg}`" width="200" class="shadow-xl" />
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        @click="onChange"
        class="px-3 py-2 border-4 rounded-xl text-md font-medium hover:bg-red-200 active:bg-red-300"
      >
        Show all result countries
      </button>
    </div>
  </div>
</template>

<script setup>
const { country } = defineProps(['country']);

const emit = defineEmits(['select']);

const onChange = () => {
  const selectedCountry = null;
  emit('select', selectedCountry);
};
</script>
