<template>
  <li class="grid">
    <button
      class="p-3 rounded-lg shadow-md bg-slate-50 hover:bg-red-100 active:bg-red-200"
      @click="onChange(country)"
    >
      <div class="flex items-center justify-center gap-2">
        <div>
          <img
            :src="`${country.flags.svg}`"
            :alt="country.name.cca3"
            width="50"
          />
        </div>
        <div class="text-base font-medium">{{ country.name.common }}</div>
      </div>
    </button>
  </li>
</template>

<script setup>
const { country } = defineProps(['country']);

const emit = defineEmits(['select']);

const onChange = (country) => {
  const selectedCountry = country;
  emit('select', selectedCountry);
};
</script>

<style></style>
