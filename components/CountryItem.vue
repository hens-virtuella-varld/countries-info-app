<template>
  <li
    class="card text-center hover:bg-red-100 active:bg-red-200"
    @click="clickCountry"
  >
    <NuxtLink :to="`/countries/${country.cca3}`" :country="country">
      <div class="flex justify-center gap-2">
        <div>
          <img
            :src="`${country.flags.svg}`"
            :alt="country.name.cca3"
            width="50"
          />
        </div>
        <div>{{ country.name.common }}</div>
      </div>
    </NuxtLink>
  </li>
</template>

<script setup>
const { country } = defineProps(['country']);
</script>

<style></style>
