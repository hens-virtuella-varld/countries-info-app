<template>
  <div class="p-5 flex flex-col justify-center gap-4">
    <div>
      <CountryCard :country="country" />
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
import allCountries from '@/assets/data/allCountries.json';

const { country } = defineProps(['country']);

const emit = defineEmits('change');

const onChange = () => {
  const selectedCountry = null;
  emit('select, selectCountry');
};
</script>
