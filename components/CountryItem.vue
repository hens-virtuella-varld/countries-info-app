<template>
  <NuxtLink :to="`/countries/${country.cca3}`" :country="country">
    <li
      class="flex justify-center items-center text-center p-3 rounded-lg shadow-md h-full bg-slate-50 hover:bg-red-100 active:bg-red-200"
      @click="clickCountry"
    >
      <div class="flex items-center justify-center gap-2">
        <div class="shadow-xl">
          <img
            :src="`${country.flags.svg}`"
            :alt="country.name.cca3"
            width="50"
          />
        </div>
        <div class="text-lg font-medium">{{ country.name.common }}</div>
      </div>
    </li>
  </NuxtLink>
</template>

<script setup>
const { country } = defineProps(['country']);
</script>

<style></style>
