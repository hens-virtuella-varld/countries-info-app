<template>
  <section
    class="space-y-6 py-6 rounded-lg shadow-sm text-center bg-slate-50 sm:grid sm:grid-cols-2 sm:place-items-center"
  >
    <section class="grid place-content-center">
      <img :src="`${country.flags.svg}`" class="shadow-xl w-60 sm:w-96" />
    </section>

    <section>
      <section class="space-y-2 sm:text-left px-6">
        <h3 class="text-3xl font-bold">{{ country.name.common }}</h3>
        <div v-for="(infoItem, index) in infoList" :key="`info-item-${index}`">
          <h4 class="inline font-bold">{{ `${infoItem.title}: ` }}</h4>
          <span>{{ infoItem.content }}</span>
        </div>
      </section>
      <section class="flex flex-col gap-2 py-4 items-center">
        <div>
          <a
            :href="country.maps.googleMaps"
            target="_blank"
            aria-label="open google maps in new tab"
            class="text-red-400 text-xl font-bold flex items-center space-x-2 cursor-pointer"
          >
            <div>Google maps</div>
            <ArrowBoxIcon />
          </a>
        </div>
        <button
          @click="onChange"
          class="bg-red-200 p-3 rounded-2xl font-bold [@media(pointer:fine){&:hover}]:bg-red-300 active:!bg-red-400 active:!text-slate-100"
        >
          Go back to result for all countries
        </button>
      </section>
    </section>
  </section>
</template>

<script setup>
const { country } = defineProps(['country']);

const emit = defineEmits(['select']);

const onChange = () => {
  const selectedCountry = null;
  emit('select', selectedCountry);
};

const addCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const infoList = [
  { title: 'Capital', content: Object.values(country.capital).join(', ') },
  { title: 'Region', content: country.region },
  { title: 'Area (km²)', content: addCommas(country.area) },
  { title: 'Population', content: addCommas(country.population) },
  { title: 'Languages', content: Object.values(country.languages).join(', ') },
];
</script>
